---
layout: post
title:  "Raycasting Engine"
last-updated:   2023-12-22 15:22:24 +0100
categories: technical

background-image: "/assets/images/projects/raycasting-engine/screenshot.png"
cover-image: "/assets/images/projects/raycasting-engine/cover.png"
icon-image: "/assets/images/lovebirb-logo.png"
short-description: A multi-threaded C++ raycasting engine with super-sampling

tools: [ "cpp", "sdl" ]
links: { "github":"https://github.com/LiruJ/RayCasting" }
---

{% include post-image.html src="/assets/images/projects/raycasting-engine/screenshot.png" caption="The rendered scene" height=320 %}

This was made for the "Mathematics for Computer Graphics" unit for Bournemouth University, for which I attained a mark of 82. The assignment was to make a simple 2D shape renderer that would rasterise circles, triangles, and squares, with grades of 70+ only being given to those who made a raycasting engine.

{% include post-image.html src="/assets/images/projects/raycasting-engine/console.png" caption="The console output of a render" height=320 %}

I made the raycasting engine, but did not feel happy with the speed and the quality of the renders, so I added multithreading support and an anti-aliasing method known as "Super-sampling", in which the scene is rendered at a much larger resolution then scaled down.

{% include post-image.html src="/assets/images/projects/raycasting-engine/comparison.png" caption="The comparison between detail (image), super-sample multiplier, and time taken" height=180 %}

The engine supported up to 16x reflections, 24 bit colour on the spheres, shadows from blocked lights, and smooth lighting. This rendering could be spread over up to 8 threads, and could be rendered up to 16 times the original size for the super-sampling method.