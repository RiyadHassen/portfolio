---
title: "Image-Based Geolocation"
subtitle: "GeoGuesser-inspired VLM reasoning pipeline"
tags: ["VLM", "Fine-tuning", "CLIP", "RAG"]
image: ""
github: ""
demo: ""
featured: true
order: 2

description: >
  Predicts geographic location from image scene clues using a fine-tuned
  VLM reasoning pipeline and RAG-augmented CLIP encoder.
---

## Overview

Inspired by the GeoGuesser game — given a street-level or scene image, predict the geographic location by reading visual clues (signs, architecture, vegetation, road markings).

## Pipeline

1. **GeoReasoner:** A Vision-Language Model pipeline based on Qwen2-VL, fine-tuned on the **NaviClues** dataset to perform explicit chain-of-thought geographic reasoning ("I see Cyrillic signage and birch trees → likely Eastern Europe/Russia").

2. **RAG augmentation:** A fine-tuned CLIP encoder retrieves visually similar geo-tagged reference images from a database, providing additional context to the generation step.

## Results

Fine-tuning on NaviClues significantly improved country-level prediction accuracy over the zero-shot VLM baseline. RAG integration further reduced median distance error, especially for ambiguous regions that share visual features.

## Challenges

- Geolocation is inherently ambiguous — many regions look similar.
- NaviClues dataset required cleaning; many labels had GPS drift.
- Balancing retrieval recall vs. latency when the reference image DB grows.
