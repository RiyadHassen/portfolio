---
title: "InstructNeRF2NeRF"
subtitle: "Text-driven 3D scene editing with NeRFs"
tags: ["NeRF", "Stable Diffusion", "Computer Vision", "3D"]
image: ""
github: ""
demo: ""
featured: false
order: 4

description: >
  Re-implementation and improvement of InstructNeRF2NeRF for text-driven
  3D scene editing using Stable Diffusion with Neural Radiance Fields.
---

## Overview

InstructNeRF2NeRF enables text-driven editing of 3D scenes represented as NeRFs — e.g. "make it winter" applied to a full 3D scene captured from multiple views.

## What We Did

- Re-implemented the InstructNeRF2NeRF pipeline from scratch, combining **InstructPix2Pix** (Stable Diffusion-based image editor) with **NeRF** rendering.
- Identified and addressed the core inconsistency problem: editing individual views independently causes multi-view inconsistency when the edited images are used to update the NeRF.
- Improved consistency by **modifying the iterative dataset update schedule** — selectively updating views based on edit confidence and spatial overlap, reducing flickering and geometric drift.

## Key Insight

The original paper's dataset update strategy treats all views equally. Our modification weights updates by edit stability across nearby viewpoints, significantly reducing visible seams in synthesized novel views.
