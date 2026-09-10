/* Braze Trainer — app logic (vanilla JS, no build step, no backend) */

(function () {
  "use strict";

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
      const levelClass = cert.level.toLowerCase();
      card.className = "cert-card " + levelClass;
      card.setAttribute("type", "button");
      card.setAttribute("aria-label", "Train for " + cert.name);

      card.innerHTML = `
        <span class="level-tag ${levelClass}">${cert.level}</span>
        <h3 class="cert-name">${cert.name}</h3>
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
  const feedbackPanel = document.getElementById("feedback-panel");
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const btnExitQuiz = document.getElementById("btn-exit-quiz");

  const LETTERS = ["A", "B", "C", "D", "E"];

  function renderQuestion() {
    const cert = CERTS[state.certId];
    const q = state.questions[state.index];
    const total = state.questions.length;
    const answered = state.answers[state.index] !== null;
    const selectedIndex = state.answers[state.index];

    quizCertName.textContent = cert.short;
    quizProgressLabel.textContent = "Q " + (state.index + 1) + " / " + total;
    progressFill.style.width = ((state.index) / total) * 100 + "%";

    domainFlagCode.textContent = q.code;
    domainFlagName.textContent = q.domain;
    questionText.textContent = q.q;

    optionsEl.innerHTML = "";
    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.type = "button";

      let cls = "option";
      if (answered) {
        cls += " locked";
        if (i === selectedIndex && i === q.correct) cls += " correct-pick";
        else if (i === selectedIndex && i !== q.correct) cls += " wrong-pick";
        else if (i === q.correct) cls += " reveal-correct";
        else cls += " dim";
      }
      btn.className = cls;
      btn.innerHTML = `<span class="option-letter">${LETTERS[i]}</span><span class="option-text">${opt}</span>`;

      if (!answered) {
        btn.addEventListener("click", () => selectOption(i));
      } else {
        btn.disabled = true;
      }
      optionsEl.appendChild(btn);
    });

    if (answered) {
      const isCorrect = selectedIndex === q.correct;
      feedbackPanel.style.display = "block";
      feedbackPanel.className = "feedback-panel " + (isCorrect ? "is-correct" : "is-incorrect");
      feedbackPanel.innerHTML = isCorrect
        ? `<p class="feedback-status is-correct">✓ Correct</p><p class="feedback-explain">${q.explain}</p>`
        : `<p class="feedback-status is-incorrect">✗ Not quite — the correct answer is ${LETTERS[q.correct]}</p><p class="feedback-explain"><strong>${q.options[q.correct]}.</strong> ${q.explain}</p>`;
    } else {
      feedbackPanel.style.display = "none";
      feedbackPanel.innerHTML = "";
    }

    btnPrev.disabled = state.index === 0;
    btnNext.textContent = state.index === total - 1 ? "See results" : "Next";
    btnNext.disabled = !answered;
  }

  function selectOption(i) {
    if (state.answers[state.index] !== null) return; // already locked in
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
        <div class="domain-row-top">
          <span class="domain-row-name">${d.code} ${d.name}</span>
          <span class="domain-row-stat">${stat.correct}/${stat.total} correct</span>
        </div>
        <div class="bar-pair">
          <div class="bar-track"><div class="bar-fill weight" style="width:${d.weight}%"></div></div>
          <span class="bar-mini-label">${d.weight}% of real exam</span>
        </div>
        <div class="bar-pair">
          <div class="bar-track"><div class="bar-fill score ${isWeak ? "weak" : "good"}" style="width:${yourPct}%"></div></div>
          <span class="bar-mini-label">${yourPct}% your accuracy</span>
        </div>
      `;
      domainBreakdown.appendChild(row);
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
