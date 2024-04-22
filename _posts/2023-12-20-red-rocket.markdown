---
layout: post
title:  "Red Rocket"
last-updated:   2023-12-22 15:22:24 +0100
categories: game

background-image: "/assets/images/projects/red-rocket/background.png"
cover-image: "/assets/images/projects/red-rocket/cover.png"
icon-image: "/assets/images/projects/red-rocket/icon.png"
short-description: Program a rocket ship to navigate an alien planet to reach a series of goals

tools: [ "csharp", "unity" ]
links: { "itchio":"https://liru.itch.io/redrocket" }
---

{% include post-image.html src="/assets/images/projects/red-rocket/rrss1.png" caption="The rocket taking off" height=320 %}

I made this along with a friend for the Bournemouth University 48 hour game jam, in which it won first place.

{% include post-image.html src="/assets/images/projects/red-rocket/rrss2.png" caption="The first goal" height=320 %}

My friend made the environmental and UI graphics, whereas I created all of the code for both the gameplay and the UI logic, as well as sprites for the ship.

{% include post-image.html src="/assets/images/projects/red-rocket/rrss4.png" caption="The rocket after being upgraded with 2 extra boosters" height=320 %}

The main difficulty was creating the timeline system, which executed specific commands in a sequence, forming the base mechanic for the game. These commands were originally planned to have much more variety, with foundational code being written to support multiple parameters, but due to time constraints we ended up mainly using the "Set Thrust" command for ship thrusters.