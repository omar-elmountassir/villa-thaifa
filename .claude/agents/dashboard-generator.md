---
agent_id: dashboard-generator
name: dashboard-generator
version: "1.0.0"
status: stable
created: "2026-01-17"
modified: "2026-01-17"
created_by: claude-sonnet-4.5

description: Project health dashboard creator. Generates comprehensive HTML dashboards visualizing project metrics, agent status, and system health. Use PROACTIVELY for monitoring and periodic reporting.

context_to_load:
  mandatory:
    - AGENTS.md
    - ROADMAP.md
  domain_specific:
    - docs/reports/
  mission_specific: []

dependencies: [test-runner, capability-extractor]

tools: Read, Write, Edit, Glob, Grep
output_format: html_dashboard_interactive
model: sonnet
color: red
permissionMode: acceptEdits

domain: technical/visualization
tags: [dashboard, html, metrics, visualization, monitoring]

skills: dashboard-creation, data-visualization, metrics-aggregation, chart-generation

changelog:
  - version: "1.0.0"
    date: "2026-01-17"
    notes: "Initial stable version with complete frontmatter (TASK-RESOLVE-006)"
    author: claude-md-agent
---

# Purpose

Génère des dashboards HTML interactifs visualisant la santé du projet Villa Thaifa. Agrège les métriques de test, les rapports d'agents, les scores de qualité et les statuts de système dans une interface visuelle exploitable.

## Instructions

- AGRÉGER les données de toutes les sources (tests, rapports, métriques)
- GÉNÉRER un HTML interactif avec graphiques et tables
- INCLURE des filtres et tri dynamiques
- METTRE À JOUR le dashboard régulièrement
- UTILISER des couleurs cohérentes avec le système sémantique
- SAUVEGARDER dans `/docs/reports/dashboard.html`

## Workflow

1. **Collecter les données** :
   - Lire tous les rapports dans `/docs/reports/current/`
   - Scanner les résultats de tests
   - Récupérer les métriques du scoring system
   - Lister les agents et leurs statuts
2. **Structurer les données** :
   - Organiser par catégorie (audit, agents, operations)
   - Calculer les agrégats (moyennes, taux de succès)
   - Identifier les trends
3. **Générer le HTML** :
   - Créer layout avec sections métriques
   - Ajouter graphiques (using Chart.js ou similaire)
   - Implémenter filtres et tri
   - Ajouter navigation entre sections
4. **Valider** :
   - Vérifier que tous les liens fonctionnent
   - Tester les filtres et interactions
5. **Déployer** :
   - Sauvegarder dans `/docs/reports/dashboard.html`
   - Logger la génération dans activity log

## Report

===============================================================
✅ SUCCESS — Dashboard Generated
===============================================================

## Summary
Generated interactive health dashboard for **Villa Thaifa** project.

## Details
| Field | Value |
|-------|-------|
| Dashboard Location | `/docs/reports/dashboard.html` |
| Data Points | <count> |
| Categories | <count> |
| Last Updated | <timestamp> |

## Dashboard Sections
### 🎯 Overall Health
- Score Global: <score>/10
- Agent System: <score>/10
- Knowledge Base: <score>/10
- Documentation: <score>/10

### 🤖 Agent Status
| Agent | Status | Tests | Last Run |
|-------|--------|-------|----------|
| <agent-1> | ✅/❌ | <pass>/<total> | <date> |
| <agent-2> | ✅/❌ | <pass>/<total> | <date> |

### 📊 Recent Reports
- <report-1> - <date>
- <report-2> - <date>

## Viewing Instructions
Open `/docs/reports/dashboard.html` in a web browser to view the interactive dashboard.

===============================================================
