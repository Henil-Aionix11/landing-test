"use client";

import { useState } from "react";

const appUrl = "https://app.surgitutor.ai";
const logoUrl = `${appUrl}/logo.png`;

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Workflow", href: "#workflow" },
  { label: "Feedback", href: "#feedback" },
  { label: "Access", href: "#access" },
  { label: "Contact Us", href: "#contact" },
];

const marqueeItems = [
  "Topic-based practice",
  "Scenario launch",
  "Voice consultation",
  "Live transcript",
  "Scored feedback",
  "Completed sessions",
  "Curriculum coverage",
];

const platformCards = [
  {
    title: "AI-based scenario-led training",
    body: "AI-based practice starts with topics and cases, so learners enter the right scenario without friction.",
  },
  {
    title: "AI-based voice-first sessions",
    body: "Residents reason out loud in an AI-based live consultation flow instead of working through static prompts.",
  },
  {
    title: "AI-based post-case review",
    body: "Each completed case returns an AI-based score and debrief that guides the next repetition.",
  },
];

const supportedScenarios = [
  "General Abdomen",
  "Hernia",
  "Biliary",
  "Liver",
  "Pancreas",
  "Spleen",
  "Esophagus",
  "Stomach",
  "Small Intestine",
  "Large Intestine",
  "Anorectal",
  "Endoscopy",
  "Breast",
  "Endocrine",
  "Skin and Soft Tissue",
  "Surgical Critical Care",
  "Trauma",
  "Arterial Disease",
  "Vascular Venous",
  "Transplantation",
  "Thoracic Surgery",
  "Vascular Access",
  "Pediatric Surgery",
];

const workflowSteps = [
  {
    step: "01",
    title: "Choose topic",
    body: "Open the AI-based learner dashboard and move into the right surgical area.",
  },
  {
    step: "02",
    title: "Start scenario",
    body: "Pick a case and launch tutor mode directly from the scenario list.",
  },
  {
    step: "03",
    title: "Complete session",
    body: "Work through the conversation with voice input and visible transcript flow.",
  },
  {
    step: "04",
    title: "Review feedback",
    body: "Use the score and debrief to tighten the next attempt.",
  },
];

const accessCards = [
  {
    label: "Individual access",
    title: "For residents and individual learners",
    body: "Use the individual flow to enter the AI-based learner dashboard, launch scenarios, complete voice sessions, and review feedback case by case.",
    link: `${appUrl}/auth/login`,
    cta: "Individual Login",
  },
  {
    label: "University access",
    title: "For universities and training programs",
    body: "Use the university flow for AI-based institutional access, curriculum visibility, participation tracking, and program-level performance review.",
    link: `${appUrl}/auth/university/login`,
    cta: "University Login",
  },
];

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const repeatedMarqueeItems = [...marqueeItems, ...marqueeItems];
  const repeatedScenarios = [...supportedScenarios, ...supportedScenarios];

  return (
    <div className="page-shell">
      <div className="bg-orb orb-one" />
      <div className="bg-orb orb-two" />
      <div className="bg-orb orb-three" />

      <header className={`site-header ${navOpen ? "nav-open" : ""}`}>
        <a className="brand" href={appUrl} aria-label="SurgiMentor">
          <img className="brand-logo" src={logoUrl} alt="SurgiMentor logo" />
          <div>
            <div className="brand-name">SurgiMentor</div>
            <div className="brand-tag">AI surgical training platform</div>
          </div>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={navOpen}
          aria-controls="primary-navigation"
          onClick={() => setNavOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="top-nav" id="primary-navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setNavOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href={appUrl} onClick={() => setNavOpen(false)}>
            Start Practice
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-badge">AI-Powered Master. Real-World Ready.</div>
          <h1 className="hero-title">Master Surgical Skills with AI-Powered Training.</h1>

          <div className="studio-shell hero-studio">
            <div className="studio-top">
              <div className="studio-title-wrap">
                <div className="studio-icon">
                  <img src={logoUrl} alt="SurgiMentor logo" />
                </div>
                <div>
                  <strong>SurgiMentor Session Studio</strong>
                  <span>Voice session in progress</span>
                </div>
              </div>
              <div className="studio-status">
                <span className="studio-status-dot" />
                Live session
              </div>
            </div>

            <div className="studio-grid">
              <article className="studio-panel">
                <div className="studio-panel-head">
                  <span>Transcript Flow</span>
                  <span className="studio-chip">Session 05:32</span>
                </div>

                <div className="studio-wave">
                  {Array.from({ length: 22 }).map((_, index) => (
                    <span key={index} style={{ animationDelay: `${index * 0.08}s` }} />
                  ))}
                </div>

                <div className="studio-transcript">
                  <div className="transcript-line">
                    <strong>AI Tutor</strong>
                    <p>Walk me through your immediate priorities for this patient.</p>
                  </div>
                  <div className="transcript-line user-line">
                    <strong>Learner</strong>
                    <p>
                      I would start with stabilization, urgent assessment, and early escalation if
                      the findings suggest an unstable surgical abdomen.
                    </p>
                  </div>
                  <div className="transcript-line">
                    <strong>AI Tutor</strong>
                    <p>Good. Now tell me what findings would change your next step quickly.</p>
                  </div>
                  <div className="typing-pulse">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </article>

              <article className="studio-panel feedback-panel-animated">
                <div className="studio-panel-head">
                  <span>Feedback Builder</span>
                  <span className="studio-chip studio-chip-strong">Analyzing</span>
                </div>

                <div className="feedback-hero">
                  <div className="feedback-score">
                    <span className="feedback-score-label">score</span>
                    <strong>8.7</strong>
                    <small>Tutor mode</small>
                  </div>
                  <div className="feedback-tags">
                    <span>Summary drafting</span>
                    <span>Strengths detected</span>
                    <span>Improvements ranked</span>
                  </div>
                </div>

                <div className="builder-block">
                  <div className="builder-label">Session Summary</div>
                  <div className="builder-lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="builder-block">
                  <div className="builder-label">Strengths</div>
                  <div className="builder-lines short-lines">
                    <span />
                    <span />
                  </div>
                </div>

                <div className="builder-block">
                  <div className="builder-label">Improvements</div>
                  <div className="builder-lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="builder-footer">
                  <div>
                    <span>Output</span>
                    <strong>Score + debrief</strong>
                  </div>
                  <div>
                    <span>Mode</span>
                    <strong>Tutor</strong>
                  </div>
                </div>

                <div className="builder-progress">
                  <div className="builder-progress-row">
                    <span>Reasoning analysis</span>
                    <strong>92%</strong>
                  </div>
                  <div className="builder-progress-bar">
                    <div />
                  </div>
                </div>
              </article>
            </div>

            <div className="studio-actions">
              <span>Scenario launched</span>
              <span>Transcript captured</span>
              <span>Feedback generated</span>
              <span>Progress reviewed</span>
            </div>
          </div>

          <p className="hero-subtitle">
            Transform your surgical training with immersive AI simulations. Practice real-world scenarios,
            receive instant feedback, and accelerate your journey to surgical mastery.
          </p>

          <div className="hero-actions">
            <a className="ghost-button" href={appUrl}>
              Explore Platform
            </a>
          </div>

          <div className="hero-preview">
            <div className="preview-top">
              <div>
                <span className="preview-kicker">Learner workspace</span>
                <h2>One smooth path from case selection to feedback</h2>
              </div>
              <div className="preview-pill">Tutor mode live</div>
            </div>

            <div className="preview-grid">
              <article className="preview-card preview-card-large">
                <span className="card-chip">Scenario Dashboard</span>
                <h3>Choose topic, open case, begin AI-based practice.</h3>
                <p>
                  SurgiMentor starts with topics and scenarios so learners can enter the right case
                  quickly and begin AI-based tutor-mode practice without extra friction.
                </p>
                <div className="mini-tags">
                  <span>Emergency Surgery</span>
                  <span>Acute abdomen</span>
                  <span>Tutor mode</span>
                </div>
              </article>

              <article className="preview-card">
                <span className="card-chip">Live Session</span>
                <h3>Voice consultation with transcript.</h3>
                <p>
                  Microphone access, AI-based live interaction, and visible conversation flow keep
                  practice close to real reasoning under pressure.
                </p>
              </article>

              <article className="preview-card accent-card">
                <span className="card-chip">Feedback</span>
                <h3>AI-based score, summary, strengths, improvements.</h3>
                <p>
                  The session closes with an AI-based measurable debrief that makes repetition
                  easier and progress clearer.
                </p>
              </article>
            </div>
          </div>

          <div className="marquee-shell" aria-label="Platform highlights">
            <div className="marquee-track">
              {repeatedMarqueeItems.map((item, index) => (
                <span key={`${item}-${index}`} className="marquee-item">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="platform-section" id="platform">
          <div className="section-heading section-heading-tight">
            <span className="section-kicker">Platform</span>
            <h2>AI-based practice for repeatable surgical case training.</h2>
            <p>Real workflow, AI-based live interaction, measurable review.</p>
          </div>

          <div className="platform-grid">
            {platformCards.map((card) => (
              <article key={card.title} className="platform-card">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="support-section">
          <div className="section-heading section-heading-tight">
            <span className="section-kicker">Supported Scenarios</span>
            <h2>Some of the scenarios currently supported in SurgiMentor.</h2>
            <p>These are sample scenarios available now, with many more supported across the app.</p>
          </div>

          <div className="support-topics">
            <div className="support-topic-showcase">
              <div className="support-slider-window" aria-label="Supported scenarios">
                <div className="support-slider-track">
                  {repeatedScenarios.map((scenario, index) => (
                    <article key={`${scenario}-${index}`} className="support-scenario-card">
                      <h4>{scenario}</h4>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="workflow-section" id="workflow">
          <div className="section-heading section-heading-tight">
            <span className="section-kicker">Workflow</span>
            <h2>Pick a case. Work the conversation. Review the score.</h2>
          </div>

          <div className="workflow-grid">
            {workflowSteps.map((step) => (
              <article key={step.step} className="workflow-card">
                <span className="workflow-step">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="feedback-section" id="feedback">
          <div className="section-heading section-heading-tight">
            <span className="section-kicker">Feedback</span>
            <h2>Speak the case. See your progress.</h2>
            <p>Every finished session ends with an AI-based score and useful debrief.</p>
          </div>

          <div className="feedback-surface">
            <div className="score-panel">
              <span className="feedback-mini-label">Completed Session</span>
              <div className="score-number">8.7</div>
              <p className="score-caption">
                Overall AI-based score from a completed tutor-mode scenario.
              </p>
              <div className="score-bar">
                <div className="score-fill" />
              </div>
            </div>

            <div className="feedback-content">
              <article className="feedback-note">
                <span className="feedback-mini-label">Session Summary</span>
                <p>
                  Safe early prioritization, clear spoken reasoning, and a strong overall flow
                  with room to sharpen escalation timing.
                </p>
              </article>

              <div className="feedback-columns">
                <article className="feedback-note">
                  <span className="feedback-mini-label">Strengths</span>
                  <ul>
                    <li>Clear structure under live questioning.</li>
                    <li>Strong prioritization in the opening phase.</li>
                  </ul>
                </article>

                <article className="feedback-note">
                  <span className="feedback-mini-label">Improvements</span>
                  <ul>
                    <li>Earlier escalation language in higher-risk moments.</li>
                    <li>Tighter differential framing before closure.</li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="access-section" id="access">
          <div className="section-heading section-heading-tight">
            <span className="section-kicker">Access</span>
            <h2>Two clear ways into SurgiMentor.</h2>
            <p>
              Built for both individual learners and university programs using an AI-based
              platform.
            </p>
          </div>

          <div className="access-grid">
            {accessCards.map((card) => (
              <article key={card.title} className="access-card">
                <span className="card-chip">{card.label}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <a className="access-link" href={card.link}>
                  {card.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div className="cta-surface contact-surface">
            <div className="contact-copy">
              <span className="section-kicker">Contact Us</span>
              <h2>Get in touch with the SurgiMentor team.</h2>
              <p>
                Reach the SurgiMentor team for product access, training programs, or collaboration.
              </p>
            </div>

            <div className="contact-action-wrap">
              <div className="contact-panel">
                <div className="contact-panel-copy">
                  <span className="contact-panel-label">Email</span>
                  <strong>Send a message</strong>
                  <p>Reach our team directly for access or support.</p>
                </div>

                <a
                  className="contact-icon-button"
                  href="mailto:Maazzuberi@surgitutor.com"
                  aria-label="Email SurgiMentor"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 6.75h16A1.25 1.25 0 0 1 21.25 8v8A1.25 1.25 0 0 1 20 17.25H4A1.25 1.25 0 0 1 2.75 16V8A1.25 1.25 0 0 1 4 6.75Z" />
                    <path d="m3.5 8 8.01 5.34a.9.9 0 0 0 .98 0L20.5 8" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
