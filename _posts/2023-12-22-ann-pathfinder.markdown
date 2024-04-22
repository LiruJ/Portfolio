---
layout: post
title:  "Neural Network Pathfinder"
last-updated:   2023-12-22 15:22:24 +0100
categories: technical

background-image: "/assets/images/projects/ann-pathfinder/background.png"
cover-image: "/assets/images/projects/ann-pathfinder/cover.png"
icon-image: "/assets/images/lovebirb-logo.png"
short-description: A showcase of a pathfinding neural network vs. A*

tools: [ "csharp", "monogame" ]
links: { "itchio":"https://liru.itch.io/nn-pathfinder", "github":"https://github.com/LiruJ/NeuralNetwork" }
---

This was made for the "AI Game Programming" unit for Bournemouth University, the assignment was to make either a Genetic Algorithm (GA) or an Artificial Neural Network (ANN) that would find a solution between two positions, I chose to create an ANN and received a grade of 82 for my efforts.

{% include post-double-image.html src="/assets/images/projects/ann-pathfinder/SS1.png" src2="/assets/images/projects/ann-pathfinder/SS2.png" caption="The program before and during the learning phase" height=220 %}

I went a step further and created an entire GUI focused on visually displaying the inner workings of the neural network and gave a nice interface for parameters to be tweaked.

{% include post-double-image.html src="/assets/images/projects/ann-pathfinder/SS3.png" src2="/assets/images/projects/ann-pathfinder/SS4.png" caption="The program after finding a solution" height=220 %}

The program includes a maze generator, an implementation of the A* algorithm, an implementation of an ANN, and a copy of my GUI framework; GuiCookie.