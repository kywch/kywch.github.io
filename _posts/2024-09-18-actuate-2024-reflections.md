---
layout: post
title: "Reflections from Actuate 2024"
date: 2024-09-18
categories: [robotics, ai]
tags: [robotics, embodied-ai, perception, vla, interpretability]
excerpt: "Key reflections from the 2024 Actuate Robotics & Embodied AI Conference on unified models vs specialized collaboration and interpretability."
---

Reflections from the 2024 Actuate Robotics & Embodied AI Conference:

## Key Questions

Two major themes emerged for me:

1. **Unified perception-to-action model vs. specialized models collaborating?** Then, interpretability?
2. **How much can we change the environment that robots operate in?**

## Interpretability Trade-offs

Specialized models can provide good interpretability. For example, you can tell that "rain messed up object detection" when you have a dedicated perception module.

But vision-language-action models (like LINGO-1 from Wayve) that can explain their actions were also very impressive. These unified models can provide natural language explanations for their decisions, which is a different kind of interpretability.

## The Modularity Question

This connects to fundamental questions in AI architecture:
- **Modular**: Better interpretability, easier to debug specific components, can swap out parts
- **End-to-end**: Better optimization for the overall task, natural language explanations, simpler deployment

We might need both approaches for different use cases.

## Related Reading

[Actuate 2024 recap from Foxglove](https://foxglove.dev/blog/actuate-2024-recap) provides more details on the conference.
