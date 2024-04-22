---
layout: post
title:  "GuiCookie"
last-updated:   2024-01-12 18:51:24 +0100
categories: framework

background-image: "/assets/images/projects/guicookie/background.png"
background-image-filter: pixelated
cover-image: "/assets/images/projects/guicookie/cover.png"
icon-image: "/assets/images/projects/guicookie/icon.png"
short-description: A GUI framework for MonoGame

tools: [ "csharp", "monogame" ]
links: { "nuget":"https://www.nuget.org/packages/Lovebirb.MonoGame.GuiCookie/", "github":"https://github.com/LiruJ/GuiCookie" }
---

I created GuiCookie as I spent a long time hard-coding and digging through hundreds of lines of code to create user interfaces for my projects, and I wanted to invest time into designing and implementing a real GUI solution that allows for changes to be made to an interface without having to rebuild the entire project. I now use this framework in anything I make in MonoGame.

{% include post-double-image.html src="/assets/images/projects/guicookie/main-menu.png" src2="/assets/images/projects/guicookie/corner-map.png" caption="Delve, Destroy, Execute's GUI, made in GuiCookie" height=220 %}

{% include post-image.html src="/assets/images/projects/guicookie/layout.png" caption="The layout sheet" height=220 %}

This is achieved by reading layout data from XML documents with a syntax roughly equal to HTML. These documents define the style (what graphics are used and how), templates (pre-made elements), and the layout (how the elements are laid out on the screen). An entire pipeline was created to completely separate the XML data from the code that runs while the game is open. This pipeline also allows for custom classes to be loaded at runtime using C#'s reflection, allowing custom behaviour for components and elements.

{% include post-image.html src="/assets/images/projects/guicookie/templates.png" caption="The templates sheet" height=220 %}

The template system allows elements to be defined in a separate file and used quickly within the layout file. These templates can also be used at runtime to create these elements; for example, as part of a list.

{% include post-image.html src="/assets/images/projects/guicookie/style.png" caption="The styles sheet" height=220 %}

A separate xml file is used to store styles, and multiple of these sheets can be referenced per layout. This means that styles can be broken down and reused across the entire game without any duplication.

{% include post-image.html src="/assets/images/projects/guicookie/nine-slice.png" caption="How a nine slice works" height=110 %}

Graphics for elements could be defined with 4 values to create a nine slice, which greatly speeds up development time.