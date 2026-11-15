---
name: NexaFlow AI Design System
description: Modern Enterprise AI & Cloud Agency visual system with Indigo/Violet/Slate aesthetic
colors:
  primary: "#6366F1"
  primary-hover: "#4F46E5"
  primary-light: "#EEF2FF"
  primary-dark: "#312E81"
  accent: "#8B5CF6"
  accent-hover: "#7C3AED"
  accent-glow: "rgba(139, 92, 246, 0.15)"
  background-dark: "#0F172A"
  surface-dark: "#1E293B"
  surface-dark-border: "#334155"
  text-dark-primary: "#F8FAFC"
  text-dark-secondary: "#94A3B8"
  text-dark-muted: "#64748B"
  background-light: "#F8FAFC"
  surface-light: "#FFFFFF"
  surface-light-border: "#E2E8F0"
  text-light-primary: "#0F172A"
  text-light-secondary: "#475569"
  text-light-muted: "#94A3B8"
  success: "#10B981"
  error: "#EF4444"
typography:
  fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif"
  hero-title:
    fontSize: "3.5rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  section-title:
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  card-title:
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  container: "1280px"
---

# NexaFlow AI — Design Specification

## Overview
Visual system for NexaFlow AI: Next-generation Enterprise Cloud Infrastructure & AI Agent Agency.
Combines high-trust corporate credibility with bleeding-edge AI aesthetics, ensuring extreme legibility across both Dark Mode and Light Mode.

## Colors & Atmosphere
- **Brand Primary:** `#6366F1` (Indigo 500) — Represents deep cloud computation, stability, and intelligence.
- **Brand Accent:** `#8B5CF6` (Violet 500) — Represents dynamic AI synthesis and energy.
- **Dark Mode Surface:** `#0F172A` (Slate 900) base with `#1E293B` (Slate 800) elevated cards and `#334155` crisp borders.
- **Light Mode Surface:** `#F8FAFC` (Slate 50) base with `#FFFFFF` cards and `#E2E8F0` borders.
- **Status Indicators:** Emerald green (`#10B981`) for live availability and Rose (`#EF4444`) for form validation warnings.

## Typography
Clean modern sans-serif with strong hierarchy. Numeric stat figures use high-contrast bold weights (`font-black` / `tracking-tight`), and section eyebrow pills provide immediate category recognition.

## Layout & Components
- **Navbar:** Floating fixed navigation with dynamic backdrop blur and scroll transition when `scrollY > 50`.
- **Hero:** Punchy value proposition with high-converting CTAs and 4 key metric stat counters.
- **Service Catalog:** Instant filter tabs, responsive search, bookmarking toggles, and detailed modal triggers.
- **Service Modal:** Deep specification viewer with backdrop dismissal, body scroll-lock, and pre-filled inquiry CTA.
- **Saved Items Drawer:** Quick-access slide-out panel for review of bookmarked enterprise solutions.
- **FAQ Accordion:** Single-open accordion with smooth height animation and chevron rotation.
- **Contact Form:** High-conversion consultation form with live error clearing, client-side regex checks, 1.5s simulated async state, and success toast.
