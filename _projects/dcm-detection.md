---
title: "DCM Detection"
subtitle: "Detecting spinal cord disorder from video pose data"
tags: ["Transformers", "Time Series", "Medical ML"]
image: ""
github: ""
demo: ""
featured: false
order: 3

description: >
  Transformer-based time-series architecture for detecting Degenerative
  Cervical Myelopathy from video pose datasets. UW–Madison research project.
---

## Overview

Degenerative Cervical Myelopathy (DCM) is a progressive spinal cord disorder that impairs motor function. Early detection from movement data can significantly improve patient outcomes. This UW–Madison research project explored automated DCM detection from video-based pose estimation.

## Approach

- Extracted pose keypoint sequences from patient video using standard pose estimation models.
- Designed a **Transformer-based time-series classifier** that attends to temporal patterns in joint trajectories indicative of DCM (gait irregularities, reduced arm swing, balance anomalies).
- Implemented an end-to-end ML pipeline: pose extraction → sequence normalization → Transformer encoder → binary/severity classification.

## Contribution

Designed the model architecture and built the training pipeline. Collaborated with medical domain experts to interpret which temporal features correlated with clinical DCM severity scores.
