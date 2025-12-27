---
layout: post
title: "Meta MMO: A Massive Update to Neural MMO"
date: 2024-06-07
categories: [reinforcement-learning, research]
tags: [rl, multi-agent, neural-mmo, pufferlib, open-source]
excerpt: "Introducing Meta MMO - 3x faster training, diverse minigames, and successfully trained generalist agents. Open-source under MIT license."
---

I'm excited to share a massive update to Neural MMO that integrates all the previous NeurIPS competition know-how and makes it 3x faster! By Joseph Suárez, Ryan Sullivan, and me!

## Introducing Meta MMO

A new collection of many-agent minigames for training generalist RL agents.

### Highlights

- **Diverse minigames** with free-for-all & team settings, domain randomization, and adaptive difficulty
- **Up to 3X faster** training vs Neural MMO 2, allowing 1B step experiments on a gaming desktop
- **Successfully trained a generalist agent** to play multiple minigames with one set of weights

## Open Source

Meta MMO, along with baselines and code, is open-source under MIT license. We hope it catalyzes more progress in multiagent RL.

- **Paper:** [arxiv.org/abs/2406.05071](https://arxiv.org/abs/2406.05071)
- **Code:** [github.com/kywch/meta-mmo](https://github.com/kywch/meta-mmo)

## Huge Thanks to PufferAI

Huge shout-out to PufferAI & PufferLib, a new super efficient RL library, for powering this work! This success directly led to my later work [simplifying PHC with PufferLib](/blog/2025/03/puffer-phc/).

## Game Replays

You can watch these minigame replays in your browser:

### Full Config Minigames

- [Survival](https://kywch.github.io/nmmo-client/?file=https://kywch.github.io/meta-mmo/full_survive_seed_21_20240530_160720.replay.lzma)
- [Team Battle](https://kywch.github.io/nmmo-client/?file=https://kywch.github.io/meta-mmo/full_teambattle_seed_11_20240530_162610.replay.lzma)
- [Multi-task Training](https://kywch.github.io/nmmo-client/?file=https://kywch.github.io/meta-mmo/full_multitaskeval_seed_21_20240530_161502.replay.lzma)

### Mini Config Minigames

- [Team Battle](https://kywch.github.io/nmmo-client/?file=https://kywch.github.io/meta-mmo/mini_teambattle_seed_21_20240530_164242.replay.lzma)
- [Protect the King](https://kywch.github.io/nmmo-client/?file=https://kywch.github.io/meta-mmo/mini_protecttheking_seed_21_20240530_163441.replay.lzma)
- [Race to the Center](https://kywch.github.io/nmmo-client/?file=https://kywch.github.io/meta-mmo/mini_racetocenter_seed_21_20240530_163538.replay.lzma)
- [King of the Hill](https://kywch.github.io/nmmo-client/?file=https://kywch.github.io/meta-mmo/mini_kingofthehill_seed_21_20240530_163207.replay.lzma)
- [Sandwich](https://kywch.github.io/nmmo-client/?file=https://kywch.github.io/meta-mmo/mini_sandwich_seed_21_20240530_163914.replay.lzma)

## Context

This work builds on the [2023 NeurIPS Neural MMO Challenge](/blog/2023/11/neurips-2023-nmmo-challenge/) and my [talk at NeurIPS 2023](/blog/2023/12/neurips-2023-talk/).
