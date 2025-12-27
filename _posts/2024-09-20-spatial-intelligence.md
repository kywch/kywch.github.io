---
layout: post
title: "Spatial Intelligence: Research or Product?"
date: 2024-09-20
categories: [ai, thoughts]
tags: [spatial-intelligence, transformers, neuroscience, research]
excerpt: "Thoughts on Fei-Fei Li's spatial intelligence venture and whether transformers are the right architecture for this problem."
---

Just watched ["The Future of AI is Here" — Fei-Fei Li Unveils the Next Frontier of AI](https://www.youtube.com/watch?v=vIXfYFB7aBI)

Coming from a neuroscience background, I kind of get where they're coming from. Yes, it's fascinating how transformers can turn even videos into token sequences and perform well on various tasks. But our brains don't process information this way.

## The Brain-Inspired Perspective

Our visual and spatial processing systems:
- Use dedicated hierarchical pathways
- Maintain spatial relationships explicitly
- Process information in parallel specialized streams
- Don't serialize everything into sequences

## The Research Question

Perhaps the best outcome of their venture would be a new architecture based on more brain-inspired representations and methods that handle spatial intelligence far more efficiently than transformers. But for now, it sounds to me much closer to research than a product.

## Transformers vs. Spatial Processing

Transformers excel at:
- Sequence modeling
- Long-range dependencies
- Scale (with enough compute and data)

But for spatial reasoning, they might be fundamentally inefficient compared to architectures that:
- Preserve spatial structure
- Use specialized operations (convolutions, group equivariance)
- Process spatial hierarchies explicitly
