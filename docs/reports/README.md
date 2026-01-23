# 📊 Système de Rapports - Villa Thaifa

> **Version**: 1.0.0
> **Last Updated**: 2026-01-17
> **Status**: ✅ Operational
> **Location**: `/docs/reports/`

---

## 📋 Vue d'Ensemble

Le système de rapports Villa Thaifa fournit une structure centralisée pour documenter toutes les opérations, audits, et incidents. Ce système garantit la traçabilité, facilite les handovers entre agents, et maintient un historique complet des décisions et actions.

### Objectifs

1. **Traçabilité**: Toute action importante est documentée
2. **Handoffs**: Transitions fluides entre agents et sessions
3. **Apprentissage**: Historique pour analyser les patterns et améliorer
4. **Responsabilité**: Qui a fait quoi, quand, et pourquoi

### Principes

- **Automatique**: Les agents critiques génèrent des rapports automatiquement
- **Sur Demande**: Tous les agents peuvent générer des rapports quand nécessaire
- **Standardisé**: Templates cohérents pour tous les types de rapports
- **Accessible**: Structure claire et navigable

---

## 📁 Structure des Répertoires

```
docs/reports/
├── README.md                     # Ce fichier - Index central
├── current/                      # Rapports actifs (récent)
│   ├── audit/                    # Rapports d'audit (automatiques)
│   │   ├── agent-audit-2026-01-17.md
│   │   └── code-audit-2026-01-17.md
│   ├── agents/                   # Rapports d'opérations agents
│   │   ├── meta-agent-creation-2026-01-17.md
│   │   └── feature-dev-execution-2026-01-17.md
│   ├── operations/               # Rapports opérationnels
│   │   ├── data-sync-2026-01-17.md
│   │   └── platform-validation-2026-01-17.md
│   └── investigations/           # Rapports d'incidents
│       ├── incident-INC-20260117-001.md
│       └── root-cause-analysis-2026-01-17.md
├── by-date/                      # Index par date
│   ├── 2026-01-17.md             # Tous les rapports du 2026-01-17
│   └── 2026-01-18.md             # Tous les rapports du 2026-01-18
├── by-agent/                     # Index par agent
│   ├── auditor.md                # Tous les rapports de l'auditor
│   ├── meta-agent.md             # Tous les rapports du meta-agent
│   └── platform-validator.md     # Tous les rapports du platform-validator
├── templates/                    # Templates de rapports
│   ├── standard-report.md        # Template général
│   ├── audit-report.md           # Template pour audits
│   ├── agent-report.md           # Template pour opérations agents
│   └── incident-report.md        # Template pour incidents
└── archived/                     # Rapports archivés (par trimestre)
    └── 2026/
        └── Q1/                   # Janvier-Mars 2026
            ├── 2026-01-*
            └── 2026-02-*
```

### Légende

- **`current/`**: Rapports récents (< 3 mois). Organisés par type.
- **`by-date/`**: Index chronologique de tous les rapports.
- **`by-agent/`**: Index par agent pour voir l'historique d'un agent.
- **`templates/`**: Templates standardisés pour créer des rapports.
- **`archived/`**: Rapports vieux de 3+ mois, organisés par trimestre.

---

## 📝 Convention de Nommage

### Format Standard

```
YYYY-MM-DD-category-agent-seq.ext
```

### Composants

| Composant | Format | Description | Exemple |
|-----------|--------|-------------|---------|
| **Date** | YYYY-MM-DD | Date du rapport | 2026-01-17 |
| **Category** | audit|agents|operations|investigations | Type de rapport | audit |
| **Agent** | agent-name | Agent qui a généré le rapport | auditor |
| **Seq** | 001|002|003... | Numéro séquentiel du jour | 001 |
| **Ext** | md | Format du fichier | md |

### Exemples Complets

```
2026-01-17-audit-auditor-001.md          # Audit du système par l'auditor
2026-01-17-agents-meta-agent-001.md      # Création d'agent par meta-agent
2026-01-17-operations-platform-validator-001.md  # Validation par platform-validator
2026-01-17-investigations-incident-001.md # Incident par incident-reporter
```

### Cas Spéciaux

**Incidents**: Utiliser l'ID d'incident dans le nom
```
2026-01-17-investigations-INC-20260117-001.md
```

**Rapports Multiples le Même Jour**: Incrémenter le numéro séquentiel
```
2026-01-17-audit-auditor-001.md  # Premier audit du jour
2026-01-17-audit-auditor-002.md  # Deuxième audit du jour
```

---

## 📋 Types de Rapports

### 1. Audit Reports (`audit/`)

**Purpose**: Évaluer la qualité, la conformité, et identifier les problèmes

**Quand Utiliser**:
- Évaluation de la qualité du code
- Audit de documentation
- Vérification de conformité aux standards
- Review d'architecture

**Agents Concernés**:
- **auditor** (automatique): Brutal excellence standards
- **security-auditor**: Sécurité, vulnérabilités
- **platform-validator**: Validation avant opérations
- **test-runner**: Résultats de tests

**Template**: [`templates/audit-report.md`](templates/audit-report.md)

**Exemples**:
```
2026-01-17-audit-auditor-001.md          # Audit système agents
2026-01-17-audit-security-auditor-001.md # Audit sécurité OWASP
2026-01-17-audit-platform-validator-001.md # Validation données réservation
```

---

### 2. Agent Operation Reports (`agents/`)

**Purpose**: Documenter les opérations exécutées par les agents

**Quand Utiliser**:
- Création ou modification d'agent
- Exécution de workflow complexe
- Handover entre agents
- Documentation de capacité

**Agents Concernés**: Tous les agents (sur demande)

**Template**: [`templates/agent-report.md`](templates/agent-report.md)

**Exemples**:
```
2026-01-17-agents-meta-agent-001.md      # Création nouvel agent
2026-01-17-agents-feature-dev-001.md     # Développement feature
2026-01-17-agents-browser-agent-001.md   # Scraping HotelRunner
```

---

### 3. Operational Reports (`operations/`)

**Purpose**: Documenter les opérations métier et techniques

**Quand Utiliser**:
- Synchronisation de données
- Validation de plateforme
- Mises à jour de configuration
- Tests d'intégration

**Agents Concernés**:
- **platform-validator** (automatique): Après validation
- **test-runner** (automatique): Après tests échoués
- **data-sync-checker**: Vérifications sync
- **reservation-manager**, **calendar-agent**: Opérations métier

**Template**: [`templates/standard-report.md`](templates/standard-report.md)

**Exemples**:
```
2026-01-17-operations-data-sync-checker-001.md  # Sync rooms.json
2026-01-17-operations-test-runner-001.md        # Tests échoués
2026-01-17-operations-reservation-manager-001.md # Réservation effectuée
```

---

### 4. Incident Reports (`investigations/`)

**Purpose**: Documenter les erreurs, incidents, et problèmes

**Quand Utiliser**:
- Erreur critique ou crash
- Data corruption ou perte
- Problème de sécurité
- Performance degradation

**Agents Concernés**:
- **incident-reporter** (automatique): Tout incident
- Tous les agents: Quand ils rencontrent une erreur

**Template**: [`templates/incident-report.md`](templates/incident-report.md)

**Exemples**:
```
2026-01-17-investigations-INC-20260117-001.md # Corruption données
2026-01-17-investigations-INC-20260117-002.md # Crash application
```

---

## 🤖 Rapports Automatiques vs Sur Demande

### Rapports Automatiques (OBLIGATOIRES)

Certains agents DOIVENT générer des rapports automatiquement après chaque opération:

| Agent | Type de Rapport | Trigger | Emplacement |
|-------|----------------|---------|-------------|
| **auditor** | Audit Report | Après chaque audit | `current/audit/` |
| **platform-validator** | Operational Report | Après validation | `current/operations/` |
| **incident-reporter** | Incident Report | Après incident | `current/investigations/` |
| **test-runner** | Operational Report | Après tests échoués | `current/operations/` |

**Règle**: Si l'opération est significative, un rapport DOIT être généré.

---

### Rapports Sur Demande (OPTIONNELS)

Tous les agents PEUVENT générer des rapports quand demandés:

**Quand Générer**:
- Utilisateur demande explicitement "Génère un rapport"
- Opération complexe ou inhabituelle
- Décision importante à documenter
- Handover nécessaire

**Comment Générer**:
```bash
claude @agent-name "Génère un rapport sur [opération]"
```

---

## 📖 Comment Générer un Rapport

### Méthode 1: Via Template (Recommandné)

1. **Copier le template** approprié:
   ```bash
   cp docs/reports/templates/audit-report.md \
      docs/reports/current/audit/YYYY-MM-DD-audit-agent-001.md
   ```

2. **Remplir le frontmatter**:
   ```yaml
   ---
   title: "Audit Report: [Title]"
   author: "agent-name"
   date: "YYYY-MM-DD"
   version: "1.0.0"
   category: "audit"
   tags: ["tag1", "tag2"]
   status: "final"
   ---
   ```

3. **Remplir chaque section** avec le contenu réel

4. **Supprimer les exemples** et instructions

5. **Vérifier la cohérence** avant de sauvegarder

---

### Méthode 2: Via Agent (Automatique)

Pour les agents avec génération automatique:

```bash
claude @auditor "Audit /src/app/admin/ et génère un rapport"
# Le rapport sera automatiquement créé dans:
# docs/reports/current/audit/YYYY-MM-DD-audit-auditor-001.md
```

---

### Méthode 3: Manuel (Simple)

Pour les rapports rapides ou simples:

1. Créer un nouveau fichier dans la catégorie appropriée
2. Utiliser la structure minimale:
   ```markdown
   # Report Title

   **Date**: YYYY-MM-DD
   **Agent**: agent-name
   **Status**: ✅ Success

   ## Résumé
   [Brief summary]

   ## Actions
   - [x] Action 1
   - [x] Action 2

   ## Résultats
   [Outcomes]
   ```
3. Sauvegarder avec le nom correct

---

## 🗂️ Indexation des Rapports

### Index par Date (`by-date/`)

Chaque jour, créer un index dans `by-date/YYYY-MM-DD.md`:

```markdown
# Reports: YYYY-MM-DD

## Audit Reports

- [Agent Audit](../current/audit/YYYY-MM-DD-audit-agent-001.md)
- [Security Audit](../current/audit/YYYY-MM-DD-audit-security-001.md)

## Agent Reports

- [Meta-Agent Creation](../current/agents/YYYY-MM-DD-agents-meta-001.md)

## Operational Reports

- [Platform Validation](../current/operations/YYYY-MM-DD-operations-platform-001.md)

## Incident Reports

- [INC-YYYYMMDD-XXX](../current/investigations/YYYY-MM-DD-investigations-INC-XXX.md)
```

---

### Index par Agent (`by-agent/`)

Créer un index par agent dans `by-agent/agent-name.md`:

```markdown
# Reports: agent-name

## 2026-01-17

- [Audit System](../current/audit/2026-01-17-audit-agent-name-001.md)
- [Code Review](../current/audit/2026-01-17-audit-agent-name-002.md)

## 2026-01-16

- [Previous Operation](../current/audit/2026-01-16-audit-agent-name-001.md)

## Summary

- **Total Reports**: 3
- **Last Report**: 2026-01-17
- **Average Rating**: 8.5/10
```

---

## 📊 Métadonnées et Frontmatter

### Frontmatter Standard

Tous les rapports DOIVENT inclure ce frontmatter minimal:

```yaml
---
title: "Report Title: Description"
author: "agent-name"
date: "YYYY-MM-DD"
version: "1.0.0"
category: "audit|agents|operations|investigations"
tags: ["tag1", "tag2", "tag3"]
status: "draft|final"
---
```

### Champs Optionnels

```yaml
---
duration: "X minutes"
related_tasks:
  - "TASK-XXX"
  - "TASK-YYY"
related_reports:
  - "path/to/related-report.md"
next_actions:
  - "Action 1"
  - "Action 2"
---
```

---

## 🔍 Recherche et Découverte

### Trouver un Rapport Spécifique

**Par Date**:
```bash
find docs/reports/current -name "2026-01-17-*.md"
```

**Par Agent**:
```bash
find docs/reports/current -name "*-auditor-*.md"
```

**Par Type**:
```bash
find docs/reports/current/audit -name "*.md"
```

**Par Mot-Clé**:
```bash
grep -r "keyword" docs/reports/current/
```

### Utiliser les Index

1. **Index Chronologique**: Voir `by-date/YYYY-MM-DD.md`
2. **Index par Agent**: Voir `by-agent/agent-name.md`
3. **README**: Ce fichier pour la structure globale

---

## 📚 Templates Référence

### Template: Standard Report

**Emplacement**: [`templates/standard-report.md`](templates/standard-report.md)
**Usage**: Rapports généraux, opérations simples
**Sections**: 8 sections de base

### Template: Audit Report

**Emplacement**: [`templates/audit-report.md`](templates/audit-report.md)
**Usage**: Audits de qualité, sécurité, conformité
**Sections**: 10 sections avec scoring détaillé

### Template: Agent Report

**Emplacement**: [`templates/agent-report.md`](templates/agent-report.md)
**Usage**: Opérations d'agents, handoffs
**Sections**: 10 sections avec handoff info

### Template: Incident Report

**Emplacement**: [`templates/incident-report.md`](templates/incident-report.md)
**Usage**: Incidents, erreurs, problèmes
**Sections**: 10 sections avec timeline et RCA

---

## 🔄 Archivage et Maintenance

### Politique d'Archivage

**Fréquence**: Trimestrielle (tous les 3 mois)

**Processus**:
1. Créer répertoire `archived/YYYY/QX/`
2. Déplacer les rapports de plus de 3 mois
3. Mettre à jour les index (`by-date/`, `by-agent/`)
4. Créer index trimestriel dans le dossier archivé

**Example**:
```
archived/2026/Q1/
├── README.md (index du trimestre)
├── 2026-01-*
├── 2026-02-*
└── 2026-03-*
```

### Maintenance des Index

**Mise à jour Quotidienne**:
- Ajouter les rapports du jour à `by-date/YYYY-MM-DD.md`
- Mettre à jour `by-agent/agent-name.md` si nécessaire

**Mise à Jour Mensuelle**:
- Vérifier que tous les rapports sont indexés
- Nettoyer les rapports en double
- Archiver les rapports vieux de 3+ mois

---

## 🎯 Intégration avec AGENTS.md

Ce système de rapports est référencé dans **AGENTS.md Règle #6**:

### Règle #6: Système de Rapports Hybride

**Principe**: Rapports automatiques pour agents critiques, sur demande pour les autres.

**Agents avec Rapports Automatiques**:
- `auditor` → `current/audit/`
- `platform-validator` → `current/operations/`
- `incident-reporter` → `current/investigations/`
- `test-runner` → `current/operations/`

**Tous les Agents**:
- Peuvent générer des rapports sur demande
- Utilisent les templates dans `templates/`
- Suivent la convention de nommage

---

## 📈 Métriques et Statistiques

### Statistiques par Type

À la fin de chaque mois, générer des statistiques:

```markdown
# Monthly Report Statistics: YYYY-MM

## Reports Generated

| Type | Count | Trend |
|------|-------|-------|
| Audit | 15 | ↑ +3 |
| Agents | 8 | → same |
| Operations | 22 | ↓ -2 |
| Investigations | 3 | ↑ +1 |

## Top Agents

| Agent | Reports | Avg Quality |
|-------|---------|-------------|
| auditor | 12 | 9.2/10 |
| platform-validator | 8 | 8.8/10 |
| meta-agent | 5 | 9.5/10 |

## Incident Summary

- **Total Incidents**: 3
- **Resolved**: 3 (100%)
- **Avg Resolution Time**: 2h 15m
```

---

## 💡 Bonnes Pratiques

### 1. Rapports Automatiques

✅ **À FAIRE**:
- Générer automatiquement après chaque opération significative
- Inclure tous les détails pertinents
- Utiliser le template approprié

❌ **À ÉVITER**:
- Oublier de générer un rapport après une opération importante
- Inclure des informations sensibles (passwords, tokens)
- Créer des rapports trop longs ( > 50 lignes de résumé)

---

### 2. Rapports Sur Demande

✅ **À FAIRE**:
- Demander un rapport quand une opération est complexe
- Utiliser pour documenter des décisions importantes
- Créer pour les handoffs entre agents

❌ **À ÉVITER**:
- Créer des rapports pour des opérations triviales
- Dupliquer des informations déjà dans d'autres rapports
- Générer des rapports inutilement

---

### 3. Indexation

✅ **À FAIRE**:
- Mettre à jour les index quotidiennement
- Créer des index par date et par agent
- Archiver les vieux rapports trimestriellement

❌ **À ÉVITER**:
- Oublier de mettre à jour les index
- Laisser des rapports orphelins (non indexés)
- Archiver sans mettre à jour les références

---

## 🔗 Références

### Documentation Connexe

- **AGENTS.md**: Règle #6 (Système de Rapports Hybride)
- **CLAUDE.md**: Section sur les rapports automatiques
- **frontmatter-schema.md**: Standard de métadonnées

### Templates

- [Standard Report Template](templates/standard-report.md)
- [Audit Report Template](templates/audit-report.md)
- [Agent Report Template](templates/agent-report.md)
- [Incident Report Template](templates/incident-report.md)

### Outils

- **Grep**: Pour chercher dans les rapports
- **Find**: Pour localiser des rapports
- **Git**: Pour l'historique des modifications

---

## 📞 Support et Questions

**Pour toute question sur le système de rapports**:

1. Vérifier ce README d'abord
2. Consulter les templates pour des exemples
3. Demander à `claude-md-agent` pour des clarifications
4. Créer une issue si le système doit être amélioré

---

**Documentation Version**: 1.0.0
**Last Updated**: 2026-01-17
**Maintained By**: claude-md-agent
**Next Review**: 2026-02-17 (monthly review)

---

**END OF README**
