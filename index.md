**Currently, I work in robotics, developing software to teach robots.** Many aspects of cognitive neuroscience training seem to transfer to robotics - designing evaluation tasks is similar, perception and action "networks" are comparable, and both involve extensive debugging.

During my PhD and postdoc, I used web-based cognitive tasks, brain imaging, eye-tracking, and machine learning to study human decision-making. For example, I developed [The Choose-And-Solve Task](https://kywch.github.io/CAST_jsPsych/choose-and-solve-task.html) to show how some individuals with math anxiety choose to avoid math and published my work in [*Science Advances* (Choe et al., 2019)](https://www.science.org/doi/10.1126/sciadv.aay1062). See my [Google Scholar](https://scholar.google.com/citations?user=Smql8gkAAAAJ&hl=en) page for other cognition works. 

---

### Open-source Projects

* [MimicGen to LeRobot](https://github.com/kywch/mg2hfbot): Want to try [LeRobot](https://github.com/huggingface/lerobot) without a robot? This project converts [MimicGen](https://mimicgen.github.io/) datasets, trains LeRobot policies (ACT, diffusion) on these datasets, and evaluates these on complex tasks.
* [Meta MMO](https://github.com/kywch/meta-mmo): I trained a generalist agent for Neural MMO games [\[arxiv\]](https://arxiv.org/pdf/2406.05071). Watch the same agent play [\[team battle\]](https://kywch.github.io/nmmo-client/?file=https://kywch.github.io/meta-mmo/full_teambattle_seed_11_20240530_162610.replay.lzma), [\[race to the center\]](https://kywch.github.io/nmmo-client/?file=https://kywch.github.io/meta-mmo/mini_racetocenter_seed_21_20240530_163538.replay.lzma), [\[king of the hill\]](https://kywch.github.io/nmmo-client/?file=https://kywch.github.io/meta-mmo/mini_kingofthehill_seed_21_20240530_163207.replay.lzma), and [\[sandwich\]](https://kywch.github.io/nmmo-client/?file=https://kywch.github.io/meta-mmo/mini_sandwich_seed_21_20240530_163914.replay.lzma).
* [NeurIPS 2023 Neural MMO Challenge](https://neuralmmo.github.io/_build/html/rst/landing.html#icon-2023-competition): As a core developer, I created the RL baselines, optimized the game, and [presented at NeurIPS](https://nips.cc/virtual/2023/83943).
* [Card Table](https://kywch.github.io/start-rl/): For my lit reviews, I want a whiteboard where I can move sticky notes around and write text here and there. So I made a React app, with much help from Claude. [\[code\]](https://github.com/kywch/card-table)

---

### Web-based Cognitive Tasks
These tasks are based on [the jsPsych library](https://www.jspsych.org/) and have been used in my research with Qualtrics. You can try these right now! NOTE: These tasks are **NOT** designed to work on mobile phones and tablets.

* [The Choose-And-Solve Task](https://kywch.github.io/CAST_jsPsych/choose-and-solve-task.html): An effort-based decision-making task for measuring math avoidance [(Choe et al., 2019, *Science Advances*)](https://www.science.org/doi/10.1126/sciadv.aay1062). [\[demo\]](https://kywch.github.io/CAST_jsPsych/choose-and-solve-task.html) [\[code\]](https://github.com/kywch/CAST_jsPsych) [\[data\]](https://osf.io/t4wju/) [\[problem set\]](https://github.com/kywch/CAST_jsPsych/tree/master/problem-set)
* [Retaliate or Carry-on: Reactive AGression Experiment (RC-RAGE)](https://kywch.github.io/RC-RAGE_jsPsych/rc-rage-demo.html): An improved costly-reactive-aggression paradigm by [Meidenbauer, Choe, Bakkour, & Berman (2021)](https://psyarxiv.com/kw3by/). <!-- [\[code\]](https://github.com/kywch/RC-RAGE_jsPsych) -->
* [Stop-Signal Task (STOP-IT)](https://kywch.github.io/STOP-IT/jsPsych_version/experiment-transformed-third.html): Adapted the [original code]( https://github.com/fredvbrug/STOP-IT) by [Verbruggen and colleagues (2019)](https://elifesciences.org/articles/46323).
* [Multi-Image Rating Task](https://kywch.github.io/ImageRatingStudy/multi-image-rating-demo.html): An efficient method for rating images (work-in-progress) vs. [pairwise image rating](https://kywch.github.io/ImageRatingStudy/pairwise-rating-demo.html). <!-- [\[code\]](https://github.com/kywch/ImageRatingStudy) -->
* [BubbleView Task](https://kywch.github.io/BubbleView_jsPsych/): Adapted the [original code](https://github.com/namwkim/bubbleview) by [Kim and colleagues (2017)](http://bubbleview.namwkim.org/). <!-- [\[code\]](https://github.com/kywch/BubbleView_jsPsych) -->
* [Perceptual Metacognition Task](https://kywch.github.io/Perceptual-Metacognition/): Adapted the [original code](https://expfactory.github.io/v1/perceptual_metacognition.html) by [Sochat and colleagues (2016)](https://www.frontiersin.org/articles/10.3389/fpsyg.2016.00610/full).
* Working memory tasks: [Backward Digit Span Task](https://kywch.github.io/WorkingMemoryTasks/backward-digit-span-adaptive.html) and [Dual N-Back Task](https://kywch.github.io/WorkingMemoryTasks/dual-nback.html). <!-- [\[code\]](https://github.com/kywch/WorkingMemoryTasks) -->

**Have you wondered how to use jsPsych with Qualtrics?** Here is [the jsPsych in Qualtrics Tutorial Series](https://kywch.github.io/jsPsych-in-Qualtrics/)!

---

### Math Anxiety & Avoidance Decision-Making
The [Choose-And-Solve Task (CAST)](https://kywch.github.io/CAST_jsPsych) is a novel effort-based decision-making task in which participants chose between solving easy, low-reward problems and hard, high-reward problems in both math and nonmath contexts. 
Higher levels of math anxiety were associated with a tendency to select easier, low-reward problems over harder, high-reward math (but not word) problems, suggesting that **we cannot even pay math-anxious people to do hard math.** Addressing math avoidance behaviors can help break the vicious cycle of math anxiety and increase interest and success in STEM fields. Please see [the paper (Choe et al., 2019, *Science Advances*)](https://www.science.org/doi/10.1126/sciadv.aay1062).
<br>
<br>
<a href="https://kywch.github.io/CAST_jsPsych"><img src="images/Choose_And_Solve_Task.jpg?raw=true" style="max-width:450px"></a>
<br>

* Paper: [**Calculated avoidance: Math anxiety predicts math avoidance in effort-based decision-making** (Choe et al., 2019, *Science Advances*)](https://www.science.org/doi/10.1126/sciadv.aay1062). [\[demo\]](https://kywch.github.io/CAST_jsPsych/choose-and-solve-task.html) [\[code\]](https://github.com/kywch/CAST_jsPsych) [\[data\]](https://osf.io/t4wju/) [\[problem set\]](https://github.com/kywch/CAST_jsPsych/tree/master/problem-set)
* Selected media: [@ScienceMagazine](https://twitter.com/sciencemagazine/status/1198707895585722368), [@ScienceAdvances](https://twitter.com/ScienceAdvances/status/1198345515810852864), [UChicago News](https://news.uchicago.edu/story/fear-math-can-outweigh-promise-higher-rewards), [Inverse.com](https://www.inverse.com/article/61092-math-anxiety-bad-decisions), [PERbites.org](https://perbites.org/2019/12/18/math-anxiety-and-math-avoidance/), [한빛사 인터뷰](https://www.ibric.org/myboard/read.php?id=189447&Board=tr_interview).

<!--
---
[Project 2 Title](/pdf/sample_presentation.pdf)
<img src="images/dummy_thumbnail.jpg?raw=true"/>
-->


---
<p><small>Hosted on GitHub Pages &mdash; Theme by <a href="https://github.com/orderedlist" target="_blank">orderedlist</a>, 
 page template forked from <a href="https://github.com/evanca/quick-portfolio" target="_blank">evanca</a>.</small></p>
