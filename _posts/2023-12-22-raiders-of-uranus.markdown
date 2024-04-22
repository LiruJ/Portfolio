---
layout: post
title:  "Raiders of Uranus"
last-updated:   2024-01-12 18:51:24 +0100
categories: game

background-image: "/assets/images/projects/raiders-of-uranus/background.png"
cover-image: "/assets/images/projects/raiders-of-uranus/cover.png"
icon-image: "/assets/images/projects/raiders-of-uranus/icon.png"
short-description: A text-based dungeon explorer

tools: [ "csharp" ]
links: { "itchio": "https://liru.itch.io/raiders-of-uranus", "github":"https://github.com/LiruJ/TextDungeon" }
---

{% include post-image.html src="/assets/images/projects/raiders-of-uranus/start-screen.png" caption="The game start screen" height=320 %}

I finished 3 months early for my Access course at college, and due to administrative reasons attendance was still compulsory. Due to this, I had a lot of free time where I was more or less forced to sit in front of a computer, one which had no frameworks, engines, or sophisticated software. All I had was Visual Studio 2013, C# 4.0, and the ability to write into a console.

{% include post-image.html src="/assets/images/projects/raiders-of-uranus/SS1.png" caption="The dungeon, where '.' is a floor, '#' is a wall, '%' is a door, and '@' is the player" height=320 %}

I challenged myself to make a game with these limitations, I was only at college for two days a week so I wanted something that could be put on hold a lot, so I decided on a little dungeon crawler. I created a map generator with rooms, corridors, and doors, then I created a little player with whom you could walk around. I added a discovery mechanic that uncovers the map based on line of sight, and some logic that closed doors after a set number of turns.

And that was about as far as I had gotten before college was done, and aside from a single bugfix I made in 2019, it has remained completely untouched since college, yet remains one of the most entertaining projects I have worked on.