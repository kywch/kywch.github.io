---
layout: post
title: "Puffer-PHC: Simplifying Perpeptual Humanoid Control with PufferLib"
date: 2025-03-24
categories: [robotics, reinforcement-learning]
tags: [rl, humanoid, pufferlib, open-source]
excerpt: "Making the Perceptual Humanoid Control repo simpler and training 60k+ SPS on a single 4090 with PufferLib."
---

The [Perpeptual Humanoid Control repository](https://github.com/ZhengyiLuo/PHC) by @zhengyiluo is awesome. I made it simpler by greatly reducing the dependencies and class inheritances, and hooked up PufferLib so that it can train 60k+ SPS in a 4090.

## What I Changed

The original PHC repo is powerful but has substantial dependencies and complex inheritance hierarchies. My goals were:
- Reduce dependencies to make it easier to install and use
- Simplify the class structure for better readability
- Integrate PufferLib for massive speedups

The results speak for themselves: training at 60,000+ steps per second on a single RTX 4090.

## Repository

Check out the code at [github.com/kywch/puffer-phc](https://github.com/kywch/puffer-phc)

Sponsored by Puffer AI.
