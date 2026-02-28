---
# ── HOW TO EDIT ──────────────────────────────────────────────
# - title, description, tags are shown on the homepage card
# - body (below the ---) is the full project detail page
# - image: path relative to /assets/images/projects/
#   e.g.  image: visrag.png   → put file at assets/images/projects/visrag.png
#   Leave blank if you have no image yet.
# - github / demo: optional links shown on the detail page
# - featured: true → shown first on homepage
# - order: controls sort order (lower = earlier)
# ─────────────────────────────────────────────────────────────

title: "VisRAG"
subtitle: "Vision-based Retrieval Augmented Generation"
tags: ["VLM", "RAG", "Computer Vision", "NLP"]
image: ""              # e.g. visrag.png
github: ""             # e.g. https://github.com/RiyadHassen/visrag
demo: ""               # e.g. https://your-demo-link.com
featured: true
order: 1

description: >
  End-to-end retrieval-generation pipeline using Vision Language Models
  instead of text encoders for document retrieval and question answering.
---

## Overview

VisRAG is a Vision-based Retrieval Augmented Generation framework that uses Vision Language Models (VLMs) as the primary encoding mechanism for document retrieval — treating documents as images rather than extracted text.

## Motivation

Traditional RAG pipelines rely on OCR or text extraction before encoding, which loses structural and visual information (tables, diagrams, layout). VisRAG preserves this by encoding document images directly.

## Architecture

- **Retrieval stage (VisRAG-Ret):** Uses [Qwen2-VL](https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct) to encode document page images into dense vectors for similarity search.
- **Generation stage:** MiniCPM-v2.0 (multi-modal VLM) receives the top-k retrieved page images and generates a grounded answer.
- **Baseline:** Text-based OCR pipeline (TextRAG) used for benchmarking.

## Results

Evaluated on an image document question-answering dataset. VisRAG outperformed TextRAG on layout-heavy documents where OCR degrades (multi-column PDFs, tables, figures with captions).

## Key Learnings

Working with VLMs at retrieval scale requires careful batching and VRAM management. Qwen2-VL inference on page images is significantly more expensive than text embedding — retrieval latency is a real constraint worth engineering around.
