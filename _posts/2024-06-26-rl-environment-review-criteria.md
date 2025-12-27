---
layout: post
title: "Crafting Review Criteria for RL Environments, with AI"
date: 2024-06-26
categories: [reinforcement-learning, research]
tags: [rl, peer-review, environments, benchmarks, neurips]
excerpt: "Developing review criteria for RL environment papers with Claude's help. Emphasizing reproducibility and usability over novelty."
---

Before reviewing RL environment papers submitted to NeurIPS Datasets and Benchmarks, I asked Claude to suggest review criteria. The suggestions were quite good! So I went back and forth with it to adapt the criteria to my taste and came up with the following.

## My Biases

My experience with the Neural MMO competition biased me toward valuing the open-source and easy-to-use aspects. I've also always been uncomfortable with the excessive emphasis on novelty and significance, so I toned it down substantially.

Here's the review 'checklist' I'll try to use this round.

## Reproducibility

- Is the code publicly available?
- Is the code easy to read, install, train, and evaluate?
- Is the code easy to use with common RL libraries?

## Clarity of Environment Description

- Is the environment clearly described? (check the code and/or write down questions)
- Are the observation space, action space, and reward structure well defined?
- Is there comprehensive documentation for using and understanding the environment?

## Complexity

- Is the environment sufficiently challenging for current algorithms?
- Does the environment offer a range of tasks or difficulties?
- Can the environment be easily scaled up or down in complexity?
- How well does it approximate real-world scenarios in its domain?

## Baseline Results

- Are baseline results provided for common RL algorithms?
- Are appropriate evaluation metrics used?
- How much compute is required to replicate the experiments?
- Are the experiments sound and well presented?

## Previous Work/Significance

- Is previous work sufficiently described?
- How does this work differ from or improve upon existing work?
- What new aspects or challenges does this environment introduce to the field?

## Bonus Points

Examples (not exhaustive):
- Can researchers easily modify aspects of the environment for their specific needs?
- Does the environment test a variety of RL skills (e.g., exploration, long-term planning, multi-agent coordination)?
- Is it optimized for speed, allowing for rapid iterations in research?
- How well does this environment support policy transfer, particularly in sim-to-real scenarios?
- Are there clear benchmarking protocols established for this environment?
- Is there active maintenance or support for researchers using the environment?

## Call for Feedback

If you find something major is missing, please feel free to suggest! I'll also revisit this next year to see how my thoughts have changed.
