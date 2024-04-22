---
layout: post
title:  "Drillers of Uranus"
last-updated:   2023-12-22 15:22:24 +0100
categories: game

background-image: "/assets/images/projects/drillers-of-uranus/background.png"
cover-image: "/assets/images/projects/drillers-of-uranus/cover.png"
icon-image: "/assets/images/projects/drillers-of-uranus/icon.png"
short-description: Mine and recover precious gems before the cave collapses

tools: [ "cpp", "sdl" ]
links: { "github":"https://github.com/LiruJ/DrillersUranus","itchio":"https://liru.itch.io/drillers" }
---

This was made for the "Object Oriented Programming" unit of Bournemouth university in the span of two months, the grade I was given for this game was 99.2.

I wanted to experiment with certain architectures and systems that I had been reading about, mainly an event bus and service-based design. The event bus worked perfectly for this application, and I learnt a lot about C++ function handling in the process. The service-based design was used to completely abstract away SDL and the event bus from any code that needed it, and worked reasonably well. Although this approach did lead to a rather fragmented codebase with execution paths that were sometimes hard to follow, and I moved to using dependency injection after this project.

{% include post-double-image.html src="/assets/images/projects/drillers-of-uranus/SS2.png" src2="/assets/images/projects/drillers-of-uranus/SS3.png" caption="The mining minigame, in which the player can fully uncover gems before the wall collapses (the crack at the bottom)" height=220 %}

I also wanted to create a game with a minigame built-in, and did so with the mining minigame that allows the player to uncover gems in a cave wall to boost their score.

The minigame used a 2D array of heights and an array of gems. Each gem existed at a certain height, and so parts of it could be visible or obscured. A gem needs to be fully uncovered in order to be obtained, and so the goal is to efficiently uncover gems by reducing the height of the cave wall around it. Every time the wall is struck, it becomes slightly more unstable, ending with the wall collapsing. The current stability of the wall can be seen as a crack that goes from left to right at the bottom of the screen.

Striking the gem causes extra instability to the wall, so precision is important. There are 3 different tools to help with this, each causing differing levels of instability and area of effect.

{% include post-double-image.html src="/assets/images/projects/drillers-of-uranus/SS1.png" src2="/assets/images/projects/drillers-of-uranus/SS4.png" caption="The dungeon state, in which the player can move their character around the map in order to find the exit, or start mining" height=220 %}

The game also features two types of map generation, a custom dungeon generator, and an implementation of the "Drunkard's Walk" algorithm to generate massive caverns. Each tile has a "prosperity" property which determines the amount of gems to generate when it is mined, this prosperity is randomly given to a handful of tiles on map generation.

The player starts at a random position within a tilemap (the dungeon) and must find their way to the exit, which is also randomly placed. There is an instability value (the number in the bottom-right) which ticks down whenever the player moves. When the cave is no longer stable, a random selection of floor tiles will be turned to walls every time the player makes a move. If the player is on a floor tile as it is turned into a wall, they are crushed and killed and must restart from the first level in a new game.

If I had more time to create this game, I would have created a combat system and a shop to make the gems useful for more than just score.