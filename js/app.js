/* Braze Trainer — app logic (vanilla JS, no build step, no backend) */

(function () {
  "use strict";

  const DOMAIN_COLORS = ["#e8a23d", "#45d6b4", "#e8695a", "#7aa2e8", "#c88ce8", "#e8d23d"];

  const screens = {
    landing: document.getElementById("screen-landing"),
    quiz: document.getElementById("screen-quiz"),
    results: document.getElementById("screen-results")
  };

  const certGrid = document.getElementById("cert-grid");

  let state = null; // active quiz state

  function showScreen(name) {
    Object.values(screens).forEach((el) => el.classList.remove("active"));
    screens[name].classList.add("active");
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  /* ---------- localStorage helpers (best score per cert) ---------- */

  function bestScoreKey(certId) {
    return "braze-trainer:best:" + certId;
  }

  function getBestScore(certId) {
    try {
      const raw = localStorage.getItem(bestScoreKey(certId));
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function setBestScore(certId, pct) {
    try {
      const existing = getBestScore(certId);
      if (!existing || pct > existing.pct) {
        localStorage.setItem(bestScoreKey(certId), JSON.stringify({ pct: pct, date: Date.now() }));
      }
    } catch (e) {
      /* localStorage unavailable — fail silently, scoring still works this session */
    }
  }

  /* ---------- Landing screen ---------- */

  function renderLanding() {
    certGrid.innerHTML = "";
    CERT_ORDER.forEach((id) => {
      const cert = CERTS[id];
      const card = document.createElement("button");
      card.className = "cert-card";
      card.setAttribute("type", "button");
      card.setAttribute("aria-label", "Train for " + cert.name);

      const levelClass = cert.level.toLowerCase();
      const best = getBestScore(id);

      const domainBarSpans = cert.domains
        .map((d, i) => `<span style="width:${d.weight}%; background:${DOMAIN_COLORS[i % DOMAIN_COLORS.length]}"></span>`)
        .join("");

      card.innerHTML = `
        <div class="cert-card-top">
          <span class="level-tag ${levelClass}">${cert.level}</span>
          <span class="cert-meta">${cert.cost} · ${cert.time}</span>
        </div>
        <h3 class="cert-name">${cert.name}</h3>
        <p class="cert-blurb">${cert.blurb}</p>
        <div class="domain-bar" aria-hidden="true">${domainBarSpans}</div>
        <div class="cert-card-foot">
          <span class="cert-cta">Start training</span>
          <span>${best ? `<span class="best-score">best ${best.pct}%</span>` : `${cert.questions.length} practice Qs`}</span>
        </div>
      `;

      card.addEventListener("click", () => startQuiz(id));
      certGrid.appendChild(card);
    });
  }

  /* ---------- Quiz flow ---------- */

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function startQuiz(certId) {
    const cert = CERTS[certId];
    state = {
      certId: certId,
      questions: shuffle(cert.questions),
      index: 0,
      answers: new Array(cert.questions.length).fill(null)
    };
    showScreen("quiz");
    renderQuestion();
  }

  const quizCertName = document.getElementById("quiz-cert-name");
  const quizProgressLabel = document.getElementById("quiz-progress-label");
  const progressFill = document.getElementById("progress-fill");
  const domainFlagCode = document.getElementById("domain-flag-code");
  const domainFlagName = document.getElementById("domain-flag-name");
  const questionText = document.getElementById("question-text");
  const optionsEl = document.getElementById("options");
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const btnExitQuiz = document.getElementById("btn-exit-quiz");

  function renderQuestion() {
    const cert = CERTS[state.certId];
    const q = state.questions[state.index];
    const total = state.questions.length;

    quizCertName.textContent = cert.short;
    quizProgressLabel.textContent = "Q " + (state.index + 1) + " / " + total;
    progressFill.style.width = ((state.index) / total) * 100 + "%";

    domainFlagCode.textContent = q.code;
    domainFlagName.textContent = q.domain;
    questionText.textContent = q.q;

    const letters = ["A", "B", "C", "D", "E"];
    optionsEl.innerHTML = "";
    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option" + (state.answers[state.index] === i ? " selected" : "");
      btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
      btn.addEventListener("click", () => selectOption(i));
      optionsEl.appendChild(btn);
    });

    btnPrev.disabled = state.index === 0;
    btnNext.textContent = state.index === total - 1 ? "See results" : "Next";
    btnNext.disabled = state.answers[state.index] === null;
  }

  function selectOption(i) {
    state.answers[state.index] = i;
    renderQuestion();
  }

  btnPrev.addEventListener("click", () => {
    if (state.index > 0) {
      state.index--;
      renderQuestion();
    }
  });

  btnNext.addEventListener("click", () => {
    const total = state.questions.length;
    if (state.index < total - 1) {
      state.index++;
      renderQuestion();
    } else {
      submitQuiz();
    }
  });

  btnExitQuiz.addEventListener("click", () => {
    if (confirm("Leave this practice run? Your progress on this attempt won't be saved.")) {
      state = null;
      showScreen("landing");
      renderLanding();
    }
  });

  /* ---------- Results ---------- */

  const scoreBig = document.getElementById("score-big");
  const resultsStatus = document.getElementById("results-status");
  const resultsVerdictText = document.getElementById("results-verdict-text");
  const domainBreakdown = document.getElementById("domain-breakdown");
  const reviewList = document.getElementById("review-list");
  const btnRetry = document.getElementById("btn-retry");
  const btnBackToCerts = document.getElementById("btn-back-to-certs");

  function submitQuiz() {
    const cert = CERTS[state.certId];
    const total = state.questions.length;
    let correctCount = 0;

    const domainStats = {};
    cert.domains.forEach((d) => {
      domainStats[d.name] = { weight: d.weight, code: d.code, correct: 0, total: 0 };
    });

    state.questions.forEach((q, i) => {
      const isCorrect = state.answers[i] === q.correct;
      if (isCorrect) correctCount++;
      if (domainStats[q.domain]) {
        domainStats[q.domain].total++;
        if (isCorrect) domainStats[q.domain].correct++;
      }
    });

    const pct = Math.round((correctCount / total) * 100);
    setBestScore(state.certId, pct);

    renderResults(cert, correctCount, total, pct, domainStats);
    showScreen("results");
  }

  function renderResults(cert, correctCount, total, pct, domainStats) {
    scoreBig.innerHTML = `${correctCount}<small>/${total}</small>`;

    let passingNum = null;
    if (cert.passing) passingNum = parseInt(cert.passing, 10);

    if (passingNum !== null) {
      const passed = pct >= passingNum;
      resultsStatus.textContent = passed ? "Above passing bar" : "Below passing bar";
      resultsStatus.className = "status " + (passed ? "pass" : "fail");
      resultsVerdictText.textContent = `You scored ${pct}%. The real ${cert.name} exam requires ${cert.passing} to pass. This is a self-made practice set — treat it as a signal, not a guarantee.`;
    } else {
      resultsStatus.textContent = pct + "%";
      resultsStatus.className = "status na";
      resultsVerdictText.textContent = `You scored ${pct}% on this practice run of ${cert.name}. Official passing score isn't published for this exam — use this to spot weak domains.`;
    }

    // Domain breakdown, ordered by exam weight (highest first)
    domainBreakdown.innerHTML = "";
    const orderedDomains = cert.domains.slice().sort((a, b) => b.weight - a.weight);
    orderedDomains.forEach((d) => {
      const stat = domainStats[d.name];
      const yourPct = stat.total ? Math.round((stat.correct / stat.total) * 100) : 0;
      const isWeak = stat.total && yourPct < 60;

      const row = document.createElement("div");
      row.className = "domain-row";
      row.innerHTML = `
        <div class="domain-row-name">${d.code} ${d.name}</div>
        <div class="domain-row-stat">${stat.correct}/${stat.total} correct</div>
        <div class="domain-row-bars">
          <div class="bar-track"><div class="bar-fill weight" style="width:${d.weight}%"></div></div>
          <span class="bar-mini-label">${d.weight}% of real exam</span>
          <div class="bar-track"><div class="bar-fill score ${isWeak ? "weak" : "good"}" style="width:${yourPct}%"></div></div>
          <span class="bar-mini-label">${yourPct}% your accuracy</span>
        </div>
      `;
      domainBreakdown.appendChild(row);
    });

    // Review list
    reviewList.innerHTML = "";
    const letters = ["A", "B", "C", "D", "E"];
    state.questions.forEach((q, i) => {
      const userAnswer = state.answers[i];
      const isCorrect = userAnswer === q.correct;
      const item = document.createElement("div");
      item.className = "review-item";
      item.innerHTML = `
        <div class="review-item-head">
          <span class="review-mark ${isCorrect ? "correct" : "incorrect"}">${isCorrect ? "✓ correct" : "✗ missed"}</span>
        </div>
        <p class="review-q">${q.q}</p>
        <div class="review-domain">${q.code} ${q.domain}</div>
        <div class="review-answer">Your answer: <strong>${userAnswer !== null ? letters[userAnswer] + " — " + q.options[userAnswer] : "skipped"}</strong></div>
        ${!isCorrect ? `<div class="review-answer">Correct answer: <strong>${letters[q.correct]} — ${q.options[q.correct]}</strong></div>` : ""}
        <div class="review-explain">${q.explain}</div>
      `;
      reviewList.appendChild(item);
    });
  }

  btnRetry.addEventListener("click", () => {
    startQuiz(state.certId);
  });

  btnBackToCerts.addEventListener("click", () => {
    state = null;
    showScreen("landing");
    renderLanding();
  });

  /* ---------- Init ---------- */

  renderLanding();
  showScreen("landing");
})();
