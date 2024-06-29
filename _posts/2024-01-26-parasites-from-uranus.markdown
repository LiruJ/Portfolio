---
layout: post
title:  "Parasites: Tower Defence"
last-updated:   2023-12-22 15:22:24 +0100
categories: game

background-image: "/assets/images/projects/parasites-from-uranus/background.png"
cover-image: "/assets/images/projects/parasites-from-uranus/cover.png"
icon-image: "/assets/images/projects/parasites-from-uranus/icon.png"
short-description: Protect your power cells from the Uranian parasites in this tower defence game

tools: [ "construct2" ]
links: { "itchio":"https://liru.itch.io/parasites" }
---

<embed src="/games/parasites-from-uranus/index" style="width:100%; aspect-ratio: 16 / 9;">
<figcaption class="project-image-caption">The game itself, playable in-browser</figcaption>

In one of my very first assignments at Bournemouth university, I had to make a game using Construct 2. I decided to make a tower defence game as nobody else seemed to be making one, and I prefer games with more strategy than action.

{% include post-image.html src="/assets/images/projects/parasites-from-uranus/FullSize.png" caption="The game's box art" height=520 %}

The game had some interesting ideas, such as the economy strategy in which the weaker turrets gave more currency for killing the parasites, whereas the stronger turrets gave less. In general though, the turret balance is the weakest part of the game, but is also a never-ending task.

While I was making it, I did have to spend hours tweaking values, though. So this game loads the turret upgrade data from an XML file, which allowed me to just change some values, save the file, then refresh the page. Without this, I would have had to rebuild the entire project every time, which would have turned endless hours into endless days.

{% include post-image.html src="/assets/images/projects/parasites-from-uranus/SS2.png" caption="The game over screen" height=320 %}

I would love to one day make a sequel to this game, but using a proper game framework rather than being forced to use Construct. This would allow me to add more variety in enemies and turrets. For example, I wanted the flamethrower to set the parasites on fire and deal damage over time, but ran into some limitations that prevented it. 