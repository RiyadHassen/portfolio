# Riyad Hassen — Portfolio

Personal portfolio built with Jekyll for GitHub Pages.

## Quick Start

```bash
git clone https://github.com/RiyadHassen/portfolio.git && cd portfolio
bundle install
bundle exec jekyll serve --livereload
# open http://localhost:4000
```

---

## How to Update Your Portfolio

### Add a New Project

Create a `.md` file in `_projects/` — copy any existing one as a template:

```bash
cp _projects/visrag.md _projects/my-new-project.md
```

Edit the front matter:

```yaml
---
title: "My New Project"
subtitle: "One-line description"
tags: ["PyTorch", "NLP"]
image: "my-new-project.png"   # drop image in assets/images/projects/
github: "https://github.com/RiyadHassen/my-new-project"
demo: ""
featured: false               # true = wider card, shown first
order: 8                      # lower number = appears first

description: >
  Short description shown on the homepage card (1–2 sentences).
---

## Overview
Full detail page content in Markdown goes here.
```

Jekyll auto-discovers the file, adds it to the homepage grid, and creates `/projects/my-new-project/` automatically.

---

### Add Project Images

Drop your image into `assets/images/projects/`, then reference it:

```yaml
image: "my-new-project.png"
```

Recommended: **1200×675px** (16:9). Shown on the card and at the top of the detail page.

---

### Add a New Experience

Create a file in `_experiences/`. Filename prefix controls sort order:

```yaml
---
company: "New Company"
role: "Your Role"
location: "City, State"
period: "Jan 2026 – Present"
current: true   # shows a "Current" badge

bullets:
  - "Achievement with numbers, e.g. reduced latency by 20%."
  - "Another key contribution."
---
```

---

### Edit About / Skills / Education / Certifications

Open `_data/content.yml` and edit in place. Add a skill group:

```yaml
- title: "New Category"
  items: [Tool1, Tool2, Tool3]
```

Add a certification:

```yaml
- name: "AWS Solutions Architect"
  issuer: "Amazon"
  date: "Jan 2026"
```

---

### Add a Standalone Page (Blog, Publications, CV)

Create a file in `_pages/`:

```markdown
---
title: Publications
permalink: /publications/
layout: page
---

## My Publications
...
```

Then add it to the nav in `_layouts/default.html`.

---

## File Map

```
_config.yml              ← site name, email, social handles
_data/content.yml        ← about, skills, education, certs, memberships
_experiences/            ← ONE .md FILE PER JOB
_projects/               ← ONE .md FILE PER PROJECT (gets its own page)
_pages/                  ← optional extra pages
_layouts/                ← HTML templates
assets/images/projects/  ← drop project screenshots here
index.html               ← homepage (auto-pulls all collections)
```

## Deploy

```bash
git add . && git commit -m "Add: new project" && git push
```

**Settings → Pages → Source: main branch → / (root)**
