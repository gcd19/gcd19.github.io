---
layout: minimal-home
permalink: /
title: "Chendi Ge"
description: "Researcher at Tencent Hunyuan working on LLM evaluation, agentic coding, and agentic RL."
redirect_from: 
  - /about/
  - /about.html
  - /hiring/
---

<div class="minimal-wrapper">
  <header class="minimal-sidebar">
    <h1>Chendi Ge <span lang="zh-CN">葛晨笛</span></h1>
    <div class="role-line">
      <span class="position">Researcher</span>
      <span class="role-separator" aria-hidden="true">&middot;</span>
      <a class="affiliation" href="https://hy.tencent.com/">Tencent Hunyuan</a>
    </div>
    <span class="email">gecd23@gmail.com</span>
    <div class="social-icons">
      <a href="https://scholar.google.com/citations?user=w5EwLD8AAAAJ&hl=zh-CN&oi=ao" title="Google Scholar"><svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path fill="currentColor" d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>Scholar</a>
      <a href="https://github.com/gcd19" title="GitHub"><svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>GitHub</a>
      <a href="mailto:gecd23@gmail.com" title="Email"><svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="m3.5 7 8.5 6 8.5-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>Email</a>
    </div>
    <nav class="side-toc" aria-label="Page sections">
      <a href="#about">About</a>
      <a href="#models">Models</a>
      <a href="#reports">Reports</a>
      <a href="#publications">Publications</a>
      <a href="#experience">Experience</a>
      <a href="#education">Education</a>
      <a href="#honors">Honors</a>
    </nav>
  </header>

  <main class="minimal-main">
    <section id="about" class="top-section">
      <h2>About Me</h2>
      <p>I am a researcher at <strong>Tencent Hunyuan</strong>, working on agentic coding evaluation for the Hy model series. I am especially interested in whether coding agents can deliver work that people actually use, beyond writing code that passes tests. Before that, I was on the post-training team at <a href="https://chat.z.ai/">Z.ai</a>, where I contributed to <a href="https://z.ai/blog/glm-4.5">GLM-4.5</a> and served as a <strong>Core Contributor to <a href="https://z.ai/blog/glm-5">GLM-5</a></strong>.</p>
      <p>I received my M.S. from the <a href="https://www.cs.tsinghua.edu.cn/csen/">Department of Computer Science and Technology</a> at Tsinghua University in 2026, advised by <a href="https://scholar.google.com/citations?user=7t2jzpgAAAAJ&hl=zh-CN&oi=ao">Prof. Wenwu Zhu</a> and <a href="https://mn.cs.tsinghua.edu.cn/xinwang/">Prof. Xin Wang</a>. I received my B.Eng. from Tsinghua University in 2023, with a minor in Economics and Finance from <a href="https://www.sem.tsinghua.edu.cn/en/">Tsinghua SEM</a>.</p>
    </section>

    <aside class="hiring" aria-label="Hiring">
      <p><span class="hiring-dot" aria-hidden="true"></span><strong>We&rsquo;re hiring self-motivated interns</strong> for agentic coding evaluation at Tencent Hunyuan. If you&rsquo;re graduating in 2028 or later, feel free to <a href="mailto:chendige@tencent.com?subject={{ '姓名-学校-年级-每周可到岗天数-可实习时长' | url_encode }}">email me</a> your CV.</p>
    </aside>

    <section id="models" class="section">
      <h2>Models</h2>
      <div class="model-groups">
        {%- for group in site.data.models %}
        <div class="model-group">
          <div class="model-org">
            <strong>{{ group.org }}</strong>
            <span>{{ group.role }}</span>
          </div>
          <ul class="model-list">
            {%- for model in group.models %}
            <li>
              <time>{{ model.date }}</time>
              <span class="model-name">{% if model.links %}<a href="{{ model.links[0].url }}">{{ model.name }}</a>{% else %}{{ model.name }}{% endif %}</span>
              {%- if model.links %}
              <span class="paper-links">
                {%- for link in model.links %}
                <a href="{{ link.url }}">{{ link.label }}</a>
                {%- endfor %}
              </span>
              {%- endif %}
            </li>
            {%- endfor %}
          </ul>
        </div>
        {%- endfor %}
      </div>
    </section>

    <section id="reports" class="section">
      <h2>Technical Reports</h2>
      <div class="paper-list">
        <article>
          <div class="venue"><span class="venue-badge">arXiv 2026</span></div>
          <div>
            <h3><a href="https://arxiv.org/abs/2602.15763">GLM-5: From Vibe Coding to Agentic Engineering</a></h3>
            <p>GLM-5 Team. <strong>Core Contributor.</strong></p>
            <p class="paper-links"><a href="https://arxiv.org/abs/2602.15763">Paper</a> <a href="https://z.ai/blog/glm-5">Blog</a></p>
          </div>
        </article>
        <article>
          <div class="venue"><span class="venue-badge">arXiv 2025</span></div>
          <div>
            <h3><a href="https://arxiv.org/abs/2508.06471">GLM-4.5: Agentic, Reasoning, and Coding (ARC) Foundation Models</a></h3>
            <p>GLM-4.5 Team. <strong>Contributor.</strong></p>
            <p class="paper-links"><a href="https://arxiv.org/abs/2508.06471">Paper</a> <a href="https://z.ai/blog/glm-4.5">Blog</a></p>
          </div>
        </article>
      </div>
    </section>

    <section id="publications" class="section">
      <h2>Publications</h2>
      <div class="paper-list">
        <article>
          <div class="venue"><span class="venue-badge">ICML 2025</span></div>
          <div>
            <h3><a href="https://arxiv.org/abs/2506.11672">Dynamic Mixture of Curriculum LoRA Experts for Continual Multimodal Instruction Tuning</a></h3>
            <p><strong>Chendi Ge</strong>, Xin Wang, Zeyang Zhang, Hong Chen, Jiapei Fan, Longtao Huang, Hui Xue, Wenwu Zhu. <strong>ICML 2025.</strong></p>
            <p class="paper-links"><a href="https://arxiv.org/abs/2506.11672">Paper</a> <a href="https://github.com/gcd19/D-MoLE">GitHub</a></p>
          </div>
        </article>
        <article>
          <div class="venue"><span class="venue-badge">AAAI 2025</span><span class="venue-tag">Oral</span></div>
          <div>
            <h3><a href="https://ojs.aaai.org/index.php/AAAI/article/view/33274">Behavior Importance-Aware Graph Neural Architecture Search for Cross-Domain Recommendation</a></h3>
            <p><strong>Chendi Ge</strong>, Xin Wang, Ziwei Zhang, Yijian Qin, Hong Chen, Haiyang Wu, Yang Zhang, Yuekui Yang, Wenwu Zhu. <strong>AAAI 2025 Oral.</strong></p>
            <p class="paper-links"><a href="https://ojs.aaai.org/index.php/AAAI/article/view/33274">Paper</a> <a href="https://github.com/gcd19/BiGNAS">GitHub</a></p>
          </div>
        </article>
        <article class="secondary-paper">
          <div class="venue"><span class="venue-badge">SCIS 2025</span></div>
          <div>
            <h3><a href="https://arxiv.org/abs/2506.09738">Towards Multi-modal Graph Large Language Model</a></h3>
            <p>Xin Wang, Zeyang Zhang, Linxin Xiao, Haibo Chen, <strong>Chendi Ge</strong>, Wenwu Zhu. <strong>Sci China Inf Sci, 2025.</strong></p>
          </div>
        </article>
        <article class="secondary-paper">
          <div class="venue"><span class="venue-badge">ICML 2023</span></div>
          <div>
            <h3><a href="https://proceedings.mlr.press/v202/wang23z/wang23z.pdf">Curriculum Co-disentangled Representation Learning across Multiple Environments for Social Recommendation</a></h3>
            <p>Xin Wang, Zirui Pan, Yuwei Zhou, Hong Chen, <strong>Chendi Ge</strong>, Wenwu Zhu. <strong>ICML 2023.</strong></p>
          </div>
        </article>
      </div>
    </section>

    <section id="experience" class="section">
      <h2>Experience</h2>
      <ul class="timeline-list">
        <li><time>2026.03 – present</time><span><strong>Tencent Hunyuan</strong>, Foundation Model Department<br><em>Researcher, Tencent Project UP (<span lang="zh-CN">青云计划</span>)<br>LLM frontier evaluation with a focus on agentic coding</em></span></li>
        <li><time>2025.05 – 2026.03</time><span><strong>Z.ai</strong>, Post-training Team<br><em>Research Intern; <strong>Core Contributor</strong> to GLM-5 and contributor to GLM-4.5<br>Agentic coding and agentic RL</em></span></li>
        <li><time>2024.05 – 2025.02</time><span><strong>Alibaba Group</strong><br><em>Research Intern<br>Continual multimodal instruction tuning; <a href="https://arxiv.org/abs/2506.11672">first-author paper at ICML 2025</a></em></span></li>
        <li><time>2023.04 – 2023.12</time><span><strong>Tencent TEG</strong><br><em>Research Intern<br>Cross-domain recommendation; <a href="https://ojs.aaai.org/index.php/AAAI/article/view/33274">first-author Oral at AAAI 2025</a></em></span></li>
      </ul>
    </section>

    <section id="education" class="section">
      <h2>Education</h2>
      <ul class="timeline-list">
        <li><time>2023.09 – 2026.06</time><span>M.S. in Computer Science and Technology, Tsinghua University</span></li>
        <li><time>2019.08 – 2023.06</time><span>B.Eng. in Computer Science and Technology, Tsinghua University (GPA: 3.8/4.0)</span></li>
      </ul>
    </section>

    <section id="honors" class="section">
      <h2>Honors & Awards</h2>
      <div class="award-table">
        <div><time>2026</time><p><strong>Excellent Graduate</strong>, Tsinghua University <span class="award-note">Top 10%</span><br><span lang="zh-CN">清华大学优良毕业生</span></p></div>
        <div><time>2026</time><p><strong>Outstanding Graduate</strong>, Department of Computer Science and Technology, Tsinghua University<br><span lang="zh-CN">清华大学计算机系优秀毕业生</span></p></div>
        <div><time>2025</time><p><strong>Comprehensive Excellence Scholarship</strong>, Tsinghua University<br><span lang="zh-CN">清华大学综合优秀奖学金</span></p></div>
      </div>
    </section>

    <footer class="site-footer">
      <span>&copy; {{ site.time | date: "%Y" }} Chendi Ge</span>
      <span>Last updated {{ site.time | date: "%B %Y" }}</span>
    </footer>
  </main>
</div>
