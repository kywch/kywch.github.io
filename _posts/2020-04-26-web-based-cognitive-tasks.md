---
layout: post
title: "Web-based Cognitive Tasks: Interactive jsPsych Experiments"
date: 2020-04-26
categories: [research, cognitive-neuroscience]
tags: [jspsych, web-experiments, cognitive-tasks, qualtrics]
excerpt: "A collection of web-based cognitive tasks built with jsPsych for research. Try them yourself - from decision-making to working memory tasks!"
---

These tasks are based on [the jsPsych library](https://www.jspsych.org/) and have been used in my research with Qualtrics. You can try these right now!

**NOTE:** These tasks are **NOT** designed to work on mobile phones and tablets. Please use a desktop or laptop computer for the best experience.

## Available Tasks

### The Choose-And-Solve Task

An effort-based decision-making task for measuring math avoidance. This task was used in our [*Science Advances* publication (Choe et al., 2019)](https://www.science.org/doi/10.1126/sciadv.aay1062) showing that math-anxious individuals avoid challenging math problems even when offered higher rewards.

**Resources:**
- [Try the demo](https://kywch.github.io/CAST_jsPsych/choose-and-solve-task.html)
- [View source code](https://github.com/kywch/CAST_jsPsych)
- [Download research data](https://osf.io/t4wju/)
- [Browse problem set](https://github.com/kywch/CAST_jsPsych/tree/master/problem-set)

### RC-RAGE: Reactive Aggression Experiment

**Retaliate or Carry-on: Reactive AGression Experiment** - An improved costly-reactive-aggression paradigm developed by [Meidenbauer, Choe, Bakkour, Inzlicht, Meidenbauer, & Berman (2023)](https://link.springer.com/article/10.3758/s13428-023-02066-9).

- [Try the demo](https://kywch.github.io/RC-RAGE_jsPsych/rc-rage-demo.html)

### Stop-Signal Task (STOP-IT)

A measure of response inhibition, adapted from the [original code](https://github.com/fredvbrug/STOP-IT) by [Verbruggen and colleagues (2019)](https://elifesciences.org/articles/46323).

- [Try the demo](https://kywch.github.io/STOP-IT/jsPsych_version/experiment-transformed-third.html)

### Image Rating Tasks

Efficient methods for rating images in research studies:

- [Multi-Image Rating Task](https://kywch.github.io/ImageRatingStudy/multi-image-rating-demo.html) - Rate multiple images efficiently (work-in-progress)
- [Pairwise Image Rating](https://kywch.github.io/ImageRatingStudy/pairwise-rating-demo.html) - Traditional pairwise comparison approach

### BubbleView Task

A method for studying visual attention by revealing images through interactive "bubbles". Adapted from the [original code](https://github.com/namwkim/bubbleview) by [Kim and colleagues (2017)](http://bubbleview.namwkim.org/).

- [Try the demo](https://kywch.github.io/BubbleView_jsPsych/)

### Perceptual Metacognition Task

Measures confidence judgments in perceptual decisions. Adapted from the [original code](https://expfactory.github.io/v1/perceptual_metacognition.html) by [Sochat and colleagues (2016)](https://www.frontiersin.org/articles/10.3389/fpsyg.2016.00610/full).

- [Try the demo](https://kywch.github.io/Perceptual-Metacognition/)

### Working Memory Tasks

Two classic working memory paradigms:

- [Backward Digit Span Task](https://kywch.github.io/WorkingMemoryTasks/backward-digit-span-adaptive.html) - Remember and recall digits in reverse order
- [Dual N-Back Task](https://kywch.github.io/WorkingMemoryTasks/dual-nback.html) - Track simultaneous visual and auditory sequences

## Using jsPsych with Qualtrics

**Have you wondered how to use jsPsych with Qualtrics?** Check out my comprehensive tutorial series:

[jsPsych in Qualtrics Tutorial Series](https://kywch.github.io/jsPsych-in-Qualtrics/)

This tutorial walks you through integrating these powerful cognitive tasks into your Qualtrics surveys for online research.

## About jsPsych

[jsPsych](https://www.jspsych.org/) is a JavaScript library for creating behavioral experiments that run in a web browser. It provides a framework for building experiments from modular plugins, making it easier to create complex experimental paradigms for online research.

## Citation

If you use these tasks in your research, please cite the original papers linked above. For the Choose-And-Solve Task specifically:

Choe, K. W., Jenifer, J. B., Rozek, C. S., Berman, M. G., & Beilock, S. L. (2019). Calculated avoidance: Math anxiety predicts math avoidance in effort-based decision-making. *Science Advances*, 5(11), eaay1062.
