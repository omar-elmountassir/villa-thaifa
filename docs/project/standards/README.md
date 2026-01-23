# 📚 Standards Techniques — Villa Thaifa

> **Authority** : Défini par [`AGENTS.md`](../../AGENTS.md) (Master Manifest).
> **Scope** : Référentiel central pour tous les standards techniques du projet.
> **Last Updated** : 2026-01-17

---

## 🎯 Objectif

Ce répertoire `standards/` contient tous les standards techniques, guidelines et systèmes d'audit qui gouvernent le développement au sein du projet Villa Thaifa.

**Philosophie** : *Maniacal Detail or Nothing*

**Distinction Clé** :
- [`AGENTS.md`](../../AGENTS.md) (racine) = **Manifeste** (gouvernance, vision, directives)
- `standards/` (ce répertoire) = **Implémentation** (règles techniques, critères, protocoles)

---

## 📂 Structure du Répertoire

```
docs/project/standards/
├── 📄 README.md (ce fichier)
├── 📋 agent-capabilities.md     # Capacités avancées des agents
├── 📋 agent-cheatsheet.md        # Référence ultra-rapide
├── 🔢 scoring-system.json        # Système d'audit strict
└── agents/
    ├── 🚨 code_of_conduct.md          # Règles cognitives "Red Lines"
    ├── 🤝 collaboration_protocol.md   # Protocole de travail d'équipe (ACP-001)
    └── 📋 registry.md                 # Inventaire des 23 agents spécialisés
```

---

## 📋 Catalogue des Fichiers

| Fichier | Description | Audience | Quand Consulter |
|---------|-------------|----------|-----------------|
| **[`agent-capabilities.md`](agent-capabilities.md)** | Capacités avancées des agents : Browser Agent, Artifacts, Workflows complexes, patterns d'orchestration | Tous les agents | Tâches complexes nécessitant orchestration multi-étapes |
| **[`agent-cheatsheet.md`](agent-cheatsheet.md)** | Référence ultra-rapide : syntaxe vitale, règles essentielles, commandes clés en format condensé | Tous les agents | Recherche rapide ("lookup") pendant travail actif |
| **[`scoring-system.json`](scoring-system.json)** | Système d'audit strict : 5 critères pondérés (architecture 30%, code 20%, docs 20%, data 20%, UX 10%) avec échelle de notation 0-100 | Agents d'audit, Omar | Évaluation qualité, revues de code, audits périodiques |
| **[`agents/code_of_conduct.md`](agents/code_of_conduct.md)** | **OBLIGATOIRE** : Règles cognitives "Red Lines" (MVC strict, JSON-first, pas de fichiers orphelins, pas d'échecs silencieux) | **TOUS les agents** (sans exception) | **Avant TOUT travail** - lecture obligatoire |
| **[`agents/collaboration_protocol.md`](agents/collaboration_protocol.md)** | Protocole ACP-001 : Mémoire partagée, handovers entre sessions, patterns de communication inter-agents | Tous les agents | Travail d'équipe, sessions multiples, transferts de contexte |
| **[`agents/registry.md`](agents/registry.md)** | Inventaire des 23 agents spécialisés avec compétences, rôles, use cases et patterns d'utilisation | Antigravity, Omar, Claude | Attribution de tâches aux bons agents, sélection d'expertise |

---

## 🎯 Guides d'Utilisation

### Parcours 1 : Onboarding Nouvel Agent

**Pour** : Première connexion d'un nouvel agent au projet
**Durée** : 10-15 minutes
**Objectif** : Comprendre les règles fondamentales et le contexte

**Ordre de Lecture** :

1. **[`agents/code_of_conduct.md`](agents/code_of_conduct.md)** - Règles "Red Lines" (**OBLIGATOIRE**)
   - Comprendre les 4 règles non-négociables
   - Internaliser les 4 guidelines cognitives

2. **[`AGENTS.md`](../../AGENTS.md)** - Manifeste Master (racine du projet)
   - Comprendre la Prime Directive
   - Vérifier les références ("Constitution")

3. **[`agent-cheatsheet.md`](agent-cheatsheet.md)** - Référence rapide
   - Syntaxe essentielle
   - Commandes vitales

4. **[`agents/collaboration_protocol.md`](agents/collaboration_protocol.md)** - Travail d'équipe
   - Protocole de handover
   - Communication inter-agents

---

### Parcours 2 : Tâche Complexe

**Pour** : Tâches multi-fichiers, refactors architecturaux, changements complexes
**Durée** : Référence continue pendant la tâche
**Objectif** : Garantir la qualité et l'adhérence aux standards

**Ordre de Consultation** :

1. **[`agents/code_of_conduct.md`](agents/code_of_conduct.md)** - Vérifier les "Red Lines"
   - MVC strict respecté ?
   - JSON-first appliqué ?
   - Pas d'imports directs inter-controllers ?

2. **[`agent-capabilities.md`](agent-capabilities.md)** - Capacités disponibles
   - Quels outils/patterns utiliser ?
   - Browser Agent nécessaire ?
   - Artifacts appropriés ?

3. **[`scoring-system.json`](scoring-system.json)** - Critères de qualité
   - Architecture (30%)
   - Code quality (20%)
   - Documentation (20%)
   - Data integrity (20%)
   - UX/UI (10%)

4. **[`agents/registry.md`](agents/registry.md)** - Trouver l'agent spécialisé approprié
   - Audit agent disponible ?
   - Security agent nécessaire ?
   - Calendar agent requis ?

---

### Parcours 3 : Référence Rapide

**Pour** : Lookup pendant travail actif, syntaxe oubliée, règle à vérifier
**Durée** : 30 secondes maximum
**Objectif** : Retrouver l'information vitale sans interrompre le flux

**Ordre** :

1. **[`agent-cheatsheet.md`](agent-cheatsheet.md)** - Syntaxe essentielle
   - Lire la section pertinente
   - Retour immédiat au travail

2. Si pas trouvé → vérifier [`agent-capabilities.md`](agent-capabilities.md)

3. Si toujours pas → demander à l'utilisateur (pas deviner)

---

## 🧠 Principes Clés

Ces standards sont gouvernés par les principes fondamentaux du projet Villa Thaifa :

- **QUALITY > SPEED** - La qualité prime toujours sur la vitesse
- **PERFECTION > "GOOD ENOUGH"** - Rien n'est jamais "assez bon"
- **ITERATIVE UNTIL EXCELLENCE** - Itérer jusqu'à l'excellence
- **NO SILENT FAILURES** - Rapporter TOUTE erreur immédiatement
- **MANIACAL DETAIL OR NOTHING** - Détail maniaque ou rien du tout

Pour le système d'audit complet, voir [`scoring-system.json`](scoring-system.json).

---

## 🔗 Documents Connexes

Ce répertoire `standards/` fait partie d'un écosystème de documentation plus large au sein du projet Villa Thaifa.

| Document | Rôle | Lien |
|----------|------|------|
| **AGENTS.md** | Manifeste Master (gouvernance tous agents) | [`../../../AGENTS.md`](../../../AGENTS.md) |
| **GEMINI.md** | Vision Stratégique & Contexte Antigravity | [`../../../GEMINI.md`](../../../GEMINI.md) |
| **ROADMAP.md** | Roadmap du Projet & Phases actives | [`../../../ROADMAP.md`](../../../ROADMAP.md) |
| **MISSION.md** | Mission du Projet & Objectifs | [`../meta/MISSION.md`](../meta/MISSION.md) |
| **Structure Technique** | Architecture complète du projet | [`../../architecture/project_structure.md`](../../architecture/project_structure.md) |
| **ADR-001** | Structure & Organisation du projet | [`../../architecture/ADR-001-structure.md`](../../architecture/ADR-001-structure.md) |
| **Équipe** | Rôles, Contacts & Responsabilités | [`../../leadership/TEAM.md`](../../leadership/TEAM.md) |
| **Tâches Actives** | Kanban des tâches en cours | [`../../../tasks/active.md`](../../../tasks/active.md) |

---

## 🔧 Maintenance

### Métadonnées

**Version** : 1.0
**Last Updated** : 2026-01-17
**Maintainer** : Omar El Mountassir
**Status** : Actif

### Procédures de Mise à Jour

#### 1. Ajout d'un Nouveau Standard

Lors de l'ajout d'un nouveau fichier de standard :

1. Créer le fichier dans le sous-répertoire approprié (`agents/` ou racine)
2. Ajouter une entrée dans le **Catalogue des Fichiers** (section ci-dessus)
3. Mettre à jour l'**Structure du Répertoire** (arborescence ASCII)
4. Ajouter une entrée dans le **Changelog** (section ci-dessous)
5. Incrémenter la version de ce README.md

#### 2. Modification d'un Standard Existant

Lors de la modification d'un standard existant :

1. Incrémenter la version du fichier modifié
2. Mettre à jour la date "Last Updated" du fichier modifié
3. Si changement significatif → documenter dans le **Changelog** ci-dessous
4. Vérifier que tous les liens vers ce fichier fonctionnent toujours

#### 3. Audit Périodique

Maintenir la qualité des standards :

- **Fréquence** : Mensuelle (recommandée)
- **Responsable** : Omar ou agent désigné
- **Outil** : Utiliser [`scoring-system.json`](scoring-system.json) pour vérifier l'adhérence
- **Action** : Corriger les incohérences, mettre à jour les obsolètes

### Changelog

- **2026-01-17** : Création initiale du README.md (v1.0)
  - Hub central pour tous les standards techniques
  - 3 parcours de lecture documentés
  - Catalogue complet des 6 fichiers de standards
  - Liens vers écosystème de documentation

---

## 🚀 Navigation Rapide

### Retour aux Documents Principaux

- [📖 Retour à AGENTS.md (Manifeste)](../../AGENTS.md)
- [🧠 Voir GEMINI.md (Vision)](../../GEMINI.md)
- [🗺️ Voir ROADMAP.md (Plan)](../../ROADMAP.md)
- [👥 Voir l'Équipe (TEAM.md)](../../docs/leadership/TEAM.md)

### Accès Rapide aux Standards

- [🚨 Code of Conduct (OBLIGATOIRE)](agents/code_of_conduct.md)
- [🤝 Collaboration Protocol](agents/collaboration_protocol.md)
- [📋 Agent Registry](agents/registry.md)
- [⚡ Agent Capabilities](agent-capabilities.md)
- [📄 Cheatsheet](agent-cheatsheet.md)
- [🔢 Scoring System](scoring-system.json)

---

**Standards Techniques Villa Thaifa** • _Maniacal Detail or Nothing_

_For questions or updates, contact Omar El Mountassir or refer to [`AGENTS.md`](../../AGENTS.md)._
