---
layout: post
title:  "Farming Simulator"
last-updated:   2026-10-13 16:57:24 +0100
categories: game

background-image: "/assets/images/projects/farming-simulator/background.jpg"
cover-image: "/assets/images/projects/farming-simulator/cover.jpg"
icon-image: "/assets/images/projects/farming-simulator/icon.png"
short-description: The number 1 farming simulation game worldwide

tools: [ "cpp", "lua" ]
links: { "farming-simulator":"https://www.farming-simulator.com/" }
---

I worked for Giants Software on their game Farming Simulator, where I worked on the player controller, wildlife system, and hand tools.

When I joined the project, the chainsaw was the only hand tool, and it was hard-coded into the player code. This made it infeasible to add other hand tools or add special functionality to the chainsaw, like storing it on a vehicle.

{% include post-double-image.html src="/assets/images/projects/farming-simulator/chainsaw-holder-2.png" src2="/assets/images/projects/farming-simulator/chainsaw-holder-1.png" caption="The chainsaw holder" height=220 %}

I completely replaced the existing code and created a modular system in which a hand tool could define functionalities it provided rather than stating what it was. For example, the chainsaw had the functionalities "motorised", "storable", and "treeCutter", which allowed for any other hand tool to be storable or non-chainsaw tree cutting tools to exist. These modules also handled their own individual networking states, which cleaned up the multiplayer logic dramatically.

{% include video.html src="/assets/images/projects/farming-simulator/cut-tree.mp4" caption="The chainsaw in action" height=320 %}

This new system was also a huge potential for modders, as the modular nature allowed for unique behaviours to be added without conflicting with the player system. The [Hand Tools](https://farming-simulator.com/mod.php?mod_id=369801&title=fs2025) mod demonstrates these possibilities.

{% include post-image.html src="/assets/images/projects/farming-simulator/modding.jpg" caption="Hand tools added via modding " height=320 %}

By now, this system has been used to flesh out existing game mechanics like horse care, as well support the [Highlands Fishing Expansion](https://www.farming-simulator.com/dlc-detail.php?dlc_id=fs25highlandsfishing) which adds fishing rods.

I also refactored the player code from scratch, as the existing system was hard-coded for first-person perspective. I split the player class up into separate modules to handle the physics, networking, inventory, camera, input, and graphics.

Then, I replaced the existing animation system which was simply a huge list of conditional statements, and converted it into a state machine. This simplified the animation logic greatly and fixed a number of bugs caused by edge cases (for example, when the player would come out of the water while jumping and crouching, they would appear to be falling).

This state machine also allowed for the smooth interpolation of animations, which was important for a third-person perspective, as the player was now able to see their character in motion. This means that the speed of the running animation would scale with the relative speed of the player, meaning the physical character body's inertia would cause the player animation to naturally speed up and slow down.

{% include video.html src="/assets/images/projects/farming-simulator/player-walk.mp4" caption="The third-person perspective" height=320 %}

The final player-focused feature I worked on was the wildlife system. Farming Simulator 25 had a huge focus on map customisation, allowing the player to terraform the land, change forests, and even construct buildings. This presented a challenge for the existing wildlife system which simply chose a random spot around the player and spawned an animal there. Often times, deer would spawn inside sheds, or birds would suddenly appear inside a building.

I had to create a solution that could sample sections of the map around the player to determine the kinds of animals that may spawn. For example, an area with many trees and distance from buildings and roads would be more likely to spawn deer, whereas crows spawned more in freshly ploughed fields. This system even allowed for the sampling of weather and season, meaning that ducks would spawn in ponds during sunny weather, and would have ducklings during the spring.

{% include video.html src="/assets/images/projects/farming-simulator/wildlife-deer.mp4" caption="Deer spawn in forests and fields, far from player activity" height=320 %}

Each animal had its own state machine, making their behaviour highly customisable. For example, driving past a flock of crows may cause them to fly away and land a few metres away, but constantly chasing them around would cause them to fly far away from the player and despawn. They may look for food or seek water, enhancing the immersion of the world and supporting the natural aesthetic of farming.

{% include video.html src="/assets/images/projects/farming-simulator/wildlife-birds.mp4" caption="Birds can either spawn on the ground, or flying overhead. They follow the landscape and avoid flying through solid objects" height=320 %}

The final general project I worked on was the in-game camera tool, for internal use. This allowed the video team to create paths that the camera would follow, and control camera parameters like the depth of field, field of view, and exposure. This tool was then used to create every piece of promotional video for the game, including the trailers.