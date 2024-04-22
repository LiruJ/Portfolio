---
layout: post
title:  "Delve, Destroy, Execute"
last-updated:   2023-12-22 15:22:24 +0100
categories: game

background-image: "/assets/images/projects/delve-destroy-execute/background.png"
cover-image: "/assets/images/projects/delve-destroy-execute/cover.png"
icon-image: "/assets/images/projects/delve-destroy-execute/icon.png"
short-description: An educational puzzle-programming game using drag-and-drop code blocks

tools: [ "csharp", "monogame" ]
links: { "itchio":"https://liru.itch.io/delve-destroy-execute" }
---

Delve, Destroy, Execute was created as my final year project for university, where the topic I chose was an educational game focused on teaching problem solving skills. I received a grade of 72 for this project, and I personally believe that it was a success.

{% include post-image.html src="/assets/images/projects/delve-destroy-execute/main-menu.png" caption="The game's main menu" height=320 %}

The idea started as a typical dungeon crawler game, with the twist that the player would not be in direct control of their character and must instead program them. After many iterations, the concept developed into a mission-based puzzle game with the ability to tell an engaging story in order to deliver an educational experience.

{% include post-image.html src="/assets/images/projects/delve-destroy-execute/early-version.png" caption="The first iteration to test the concept" height=320 %}

The game features its own scripting language, programmed using the drag-and-drop block system. This language includes loops, conditionals, variables, commands, and yielding statements, which is used in the missions to teach various concepts relating to problem solving. This scripting language can also be loaded from raw text, which is used to control certain pieces of logic within each mission, such as the map's logic and eventually the enemy AI.

{% include post-double-image.html src="/assets/images/projects/delve-destroy-execute/first-level.png" src2="/assets/images/projects/delve-destroy-execute/corner-map.png" caption="The mission state" height=220 %}

Missions are delivered via the usage of an overworld, which allows the player to move the camera across a terrain. Missions and cutscenes appear as markers on this terrain, and completing them unlocks more content, creating a flow of progression through the game. Selecting a mission and then pressing the start button changes the game state, displaying the mission's tilemap, objectives, and code designer. The player can then design and run their code in order to complete the objectives.

{% include post-double-image.html src="/assets/images/projects/delve-destroy-execute/overworld.png" src2="/assets/images/projects/delve-destroy-execute/overworld2.png" caption="The overworld state" height=220 %}

I used C# and MonoGame to create the game, with Unity being used to design the overworld map and tilemaps. A custom pipeline was created to handle the creation of game assets using this Unity to MonoGame workflow, which ended up being the backbone of the design process.

The game is still being developed in my spare time, with the focus being on replacing the custom programming language with embedded Lua, to massively expand the potential of the puzzles.