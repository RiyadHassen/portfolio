---
title: "Hybrid LLM (Manticore)"
subtitle: "Transformer + Mamba SSM distributed training"
tags: ["LLM", "Mamba SSM", "DeepSpeed", "Distributed Training"]
image: ""
github: ""
demo: ""
featured: false
order: 5

description: >
  Re-implementation and fine-tuning of Manticore, a hybrid Transformer + Mamba
  State Space Model. Trained Jamba across multiple GPUs with DeepSpeed Pipeline Parallelism.
---

## Overview

Manticore is a hybrid architecture that interleaves Transformer attention layers with Mamba State Space Model (SSM) layers — aiming to get the best of both: Transformer's in-context learning ability and Mamba's O(n) inference efficiency.

## What We Built

- Re-implemented the Manticore hybrid architecture from the paper, integrating pretrained Transformer and Mamba checkpoint weights.
- Fine-tuned and evaluated the hybrid model on downstream tasks, benchmarking against pure Transformer and pure Mamba baselines.
- Scaled training of the **Jamba Hybrid LLM** across multiple GPUs using **DeepSpeed** with **Pipeline Parallelism**, partitioning the model's hybrid layer stack across GPU stages.

## Technical Highlights

Pipeline Parallelism with hybrid architectures is non-trivial — Mamba's recurrent state doesn't partition the same way attention does. Managing the state boundary across pipeline stages required custom scheduling logic.
