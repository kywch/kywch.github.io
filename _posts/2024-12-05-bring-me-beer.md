---
layout: post
title: "Bring Me a Beer: A Turing Test for Home Robots"
date: 2024-12-05
categories: [robotics]
tags: [robotics, manipulation, armpi, hiwonder]
excerpt: "Starting to hack the Hiwonder Armpi Pro robot arm. The 'bring me a beer' task is still hard."
---

Jealous of other robot arms moving around, I got my robot (Hiwonder Armpi Pro) and have started to hack it. It's not open source, but the parts are metal and the company provides enough source code to hack.

![Hiwonder Armpi Pro robot arm](/images/posts/2024-12-05-armpi.jpeg)

## The Bring Me a Beer Test

A "Turing test" for home robots is the "bring me a beer" task. It's still hard.

This seemingly simple task requires:
- Navigation to the right location
- Object recognition and grasping
- Robust manipulation without dropping
- Safe navigation back while carrying an object
- Handoff to a human

Each of these is a research problem in itself, and integrating them reliably is even harder. But that's what makes it a good benchmark - it's grounded in a real task people actually want.

## Why the Armpi Pro?

While not fully open source, the Hiwonder Armpi Pro provides:
- Metal construction (more robust than plastic alternatives)
- Enough source code to understand and modify behavior
- Reasonable price point for experimentation
- Active community

It's a good platform for learning and experimentation without the cost of research-grade hardware.
