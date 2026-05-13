# Acuity

**An AI-powered, context-aware productivity system that recommends one task at a time — and monitors whether you're actually doing it.**

![Status](https://img.shields.io/badge/status-in%20progress-yellow?style=flat-square)
![Stack](https://img.shields.io/badge/stack-Next.js%20%7C%20TypeScript%20%7C%20FastAPI-blue?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

## What is Acuity?

Most to-do apps are just fancy lists. You dump your tasks in, feel briefly organized, and then spend ten minutes deciding what to actually start — or avoid the whole thing entirely.

Acuity is different. Instead of showing you everything, it recommends *one task* based on your deadlines, complexity, and — through a Chrome extension — what you're actually doing in your browser right now. If you drift, it notices. If you're in flow, it keeps you there.

It's the productivity tool that does the deciding for you.

---

## Features

### Web Application

**Intelligent Backlog Management**
Add tasks manually or upload a PDF. An NLP model evaluates each task and assigns dynamic priority scores based on description, topic complexity, and deadline proximity — no manual sorting needed.

**Dynamic Task Routing**
A backend algorithm processes live telemetry from the extension to determine your next optimal task. Low-energy state? It queues lighter tasks. Focused and in flow? It escalates the harder ones.

**Focus Mode Interface**
When you start a session, the full task list disappears. The UI shows only one thing: the task you should be working on right now. No distractions, no second-guessing.

**Productivity Analytics Dashboard**
A heatmap-based dashboard that tracks consistency, peak productivity hours, and work efficiency over time.

**Scheduled Focus Times**
Define your work hours and let the system plan around them. The Chrome extension activates automatically during scheduled sessions.

**Sensitive Site Configuration**
A settings portal where you manage your personal domain exclusion list — so the monitoring engine never activates on private or sensitive sites.

---

### Chrome Extension

**Real-Time Engagement Tracking**
A background service worker monitors cursor velocity, scroll frequency, and text highlighting to estimate how engaged you actually are with the current page.

**Contextual Content Parsing**
Extracts text and metadata from your active tab and cross-references it against your assigned task to determine if you're working or drifting.

**In-Browser Intervention Overlays**
Non-intrusive overlays that nudge you back on track when distraction is detected — step-by-step prompts to rebuild momentum, or a gentle suggestion to switch tasks.

**Privacy-First URL Filtering**
Before any content parsing occurs, the extension checks the active tab's URL against a global blacklist (banking, healthcare, government, etc.) and your personal exclusions. Nothing sensitive is ever analyzed.

**Kill Switch**
A single button to immediately pause all monitoring on your current site — no settings menu required.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js, TypeScript, Tailwind CSS |
| Backend | Node.js, Express.js |
| AI Service | Python, FastAPI |
| Database | MongoDB |
| AI / NLP | OpenAI API or local models |
| Browser Extension | Chrome Extension API (Manifest V3) |
| Auth | JWT, NextAuth |

---

## How It Works

1. You add your tasks (or upload a PDF of them).
2. Acuity's NLP engine scores and ranks them by urgency and complexity.
3. You start a focus session — Acuity assigns you one task.
4. The Chrome extension monitors your browser behavior in real time.
5. If you're on task, nothing happens. If you drift, Acuity intervenes with a nudge.
6. Task recommendations adapt dynamically based on your engagement and energy state.
7. Your productivity history is tracked and visualized over time.

---

## Privacy

Acuity was designed with monitoring ethics in mind:

- Monitoring only activates during user-defined focus sessions.
- Sensitive domains are blocked by default and configurable by the user.
- Active tab content is processed ephemerally — raw browsing text is never permanently stored on any server.
- Users have a manual kill switch to pause monitoring at any time.

---

## Project Status

This project is currently a work in progress. Core features are being built out incrementally. Contributions, feedback, and ideas are welcome.

---
