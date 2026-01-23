# Agent Frontmatter Schema

> **Standard**: Tous les agents Villa Thaifa doivent suivre ce schema
> **Version**: 1.0.0
> **Last Updated**: 2026-01-17
> **Authority**: AGENTS.md Rgle #13 (Standardiser Frontmatter)

---

## Purpose

Ce document definit le schema standard de frontmatter YAML pour TOUS les agents du projet Villa Thaifa. Un frontmatter cohrent permet:

- La decouverte automatique des agents
- La generation automatique de registres
- La validation des configurations
- L'interoprabilit entre agents

---

## Mandatory Fields

Ces champs sont OBLIGATOIRES pour tout agent.

### `agent_id`

- **Type**: String
- **Format**: kebab-case (minuscules, tirets uniquement)
- **Required**: Yes
- **Unique**: Yes (doit etre unique dans `.claude/agents/`)
- **Example**: `auditor`, `claude-md-agent`, `context-builder`
- **Validation**:
  - Pas d'espaces
  - Pas de camelCase ou PascalCase
  - Prefere des noms courts et descriptifs

### `name`

- **Type**: String
- **Format**: Identique `agent_id` (kebab-case)
- **Required**: Yes
- **Example**: `auditor`, `claude-md-agent`
- **Note**: Doit correspondre au nom du fichier (ex: `auditor.md`)

### `version`

- **Type**: String
- **Format**: SemVer (`MAJOR.MINOR.PATCH`)
- **Required**: Yes
- **Example**: `"1.0.0"`, `"0.1.0"`, `"2.3.1"`
- **SemVer Rules**:
  - **MAJOR**: Changements breaking aux capabilities ou interface
  - **MINOR**: Nouvelles fonctionnalites (backwards compatible)
  - **PATCH**: Corrections de bugs, documentation

### `status`

- **Type**: String
- **Format**: Enum
- **Required**: Yes
- **Values**:
  - `stable`: Agent production-ready, teste et valide
  - `beta**: Agent fonctionnel mais en cours de test
  - `alpha`: Agent en developpement早期
  - `experimental`: Agent experimental, usage limite
  - `deprecated`: Agent obsolete, ne plus utiliser
- **Example**: `stable`

### `created`

- **Type**: String (Date ISO 8601)
- **Format**: `YYYY-MM-DD`
- **Required**: Yes
- **Example**: `"2026-01-15"`
- **Validation**: Date de creation initiale de l'agent

### `modified`

- **Type**: String (Date ISO 8601)
- **Format**: `YYYY-MM-DD`
- **Required**: Yes
- **Example**: `"2026-01-17"`
- **Validation**: Derniere modification significative

### `created_by`

- **Type**: String
- **Format**: Model identifier
- **Required**: Yes
- **Example**: `claude-sonnet-4.5`, `claude-opus-4.5`, `human`
- **Values**: Identifiant de l'entite qui a cree l'agent

### `description`

- **Type**: String (multiligne autorise)
- **Required**: Yes
- **Format**: Une phrase descriptive complete
- **Example**:
  ```yaml
  description: Expert Auditor for brutal excellence standards. Grades code, documentation, and architecture with uncompromising standards.
  ```
- **Guidelines**:
  - Commencer par le role principal
  - Indiquer le domaine d'application
  - Mentionner les cas d'usage principaux
  - Une seule phrase (ou deux maximum)

### `model`

- **Type**: String
- **Format**: Enum (nom court du modele)
- **Required**: Yes
- **Values**:
  - `opus`: Claude Opus (taches complexes, reasoning)
  - `sonnet`: Claude Sonnet (taches standard, equilibre)
  - `haiku`: Claude Haiku (taches simples, rapide)
- **Selection Guide**:
  - **opus**: Audit, architecture, decisions complexes
  - **sonnet**: Developpement, validation, operations
  - **haiku**: Recherche, traduction, logging

### `tools`

- **Type**: String (comma-separated) ou Array
- **Required**: Yes
- **Format**: Liste des outils necessaires
- **Values disponibles**: `Read`, `Write`, `Edit`, `Glob`, `Grep`, `Bash`, `WebSearch`, `mcp__*`
- **Example**:
  ```yaml
  tools: Read, Write, Edit, Glob, Grep
  # ou
  tools: [Read, Write, Bash]
  ```
- **Guideline**: N'inclure que les outils NECESSAIRES (principe de moindre privilege)

---

## Optional Fields

Ces champs sont RECOMMANDES mais pas obligatoires.

### `context_to_load`

- **Type**: Object (map)
- **Required**: No (recommande pour agents complexes)
- **Structure**:
  ```yaml
  context_to_load:
    mandatory:
      - $DOCS/agents/context/mandatory/
    domain_specific:
      - $DOCS/agents/context/domain/meta/
    mission_specific:
      - $DOCS/agents/context/mission/
  ```
- **Variables**:
  - `$DOCS`: Resolu vers `docs/`
  - `$ROOT`: Resolu vers racine du projet
- **Purpose**: Definit les fichiers de contexte a charger automatiquement

### `dependencies`

- **Type**: Array of strings
- **Required**: No
- **Example**:
  ```yaml
  dependencies:
    - test-runner
    - auditor
  ```
- **Purpose**: Liste les agents dont cet agent depend (ordre d'execution)

### `output_format`

- **Type**: String
- **Required**: No
- **Example**: `audit_report_with_verdict`, `html_dashboard`, `json_structured`
- **Purpose**: Definit le format de sortie standard de l'agent

### `color`

- **Type**: String
- **Required**: No (recommande pour identification visuelle)
- **Values**: `purple`, `red`, `blue`, `green`, `yellow`, `pink`, `white`, `orange`, `cyan`, `gray`
- **Purpose**: Identification visuelle et categorisation par type de role

### `type`

- **Type**: String
- **Required**: No
- **Values**: `protocol`, `tool`, `orchestrator`, `specialist`
- **Example**: `protocol` (pour agents definissant un protocole/standard)

### `domain`

- **Type**: String
- **Format**: `category/subcategory`
- **Required**: No (recommande)
- **Examples**:
  - `methodology/audit`
  - `technical/validation`
  - `business/operations`
  - `meta/generation`
- **Purpose**: Categorisation fonctionnelle

### `tags`

- **Type**: Array of strings
- **Required**: No
- **Example**:
  ```yaml
  tags: [audit, standards, brutal-excellence, s-tier, methodology]
  ```
- **Purpose**: Mots-cles pour recherche et filtrage

### `permissionMode` ou `permission_mode`

- **Type**: String
- **Required**: No (default: `default`)
- **Values**:
  - `default`: Permissions standard (Read + Write dans `.claude/`)
  - `acceptEdits`: Peut accepter des edits suggeres
  - `privileged`: Acces etendu (usage rare)
- **Note**: Les deux conventions sont acceptees (camelCase ou snake_case)

### `skills`

- **Type**: Array of strings
- **Required**: No
- **Example**:
  ```yaml
  skills: [audit, code-review, documentation-analysis, grading]
  ```
- **Purpose**: Liste des competences specifiques de l'agent

---

## Changelog Field

### `changelog`

- **Type**: Array of objects
- **Required**: No (fortement recommande)
- **Structure**:
  ```yaml
  changelog:
    - version: "0.1.0"
      date: "2026-01-15"
      notes: "Initial version with standardized frontmatter"
      author: "claude-sonnet-4.5"
    - version: "0.2.0"
      date: "2026-01-17"
      notes: "Added context_to_load support"
      breaking: true
  ```
- **Fields par entree**:
  - `version`: Version SemVer de cette entree
  - `date`: Date ISO 8601
  - `notes`: Description des changements
  - `author`: (Optionnel) Auteur du changement
  - `breaking`: (Optionnel) `true` si breaking change

---

## Complete Example

```yaml
---
agent_id: auditor
name: auditor
version: "1.0.0"
status: stable
created: "2026-01-15"
modified: "2026-01-17"
created_by: claude-sonnet-4.5

description: Expert Auditor for brutal excellence standards. Grades code, documentation, and architecture with uncompromising standards.

context_to_load:
  mandatory:
    - $DOCS/agents/context/mandatory/
  domain_specific:
    - $DOCS/agents/context/domain/meta/
  mission_specific:
    - $DOCS/agents/context/mission/

dependencies: []

tools: Read, Write
output_format: audit_report_with_verdict
model: sonnet
color: purple
type: protocol

domain: methodology/audit
tags: [audit, standards, brutal-excellence, s-tier, methodology]

changelog:
  - version: "0.1.0"
    date: "2026-01-15"
    notes: "Initial version with standardized frontmatter"
  - version: "1.0.0"
    date: "2026-01-17"
    notes: "Added changelog, promoted to stable"
    author: "meta-agent"
---
```

---

## Minimal Example (Basic Agent)

```yaml
---
name: my-agent
description: Brief description of what this agent does.
tools: Read, Write
model: sonnet
color: blue
permissionMode: default
skills: [skill1, skill2]
---
```

---

## Validation Checklist

Utiliser cette checklist pour valider un frontmatter d'agent:

### Identity
- [ ] `agent_id` est present et en kebab-case
- [ ] `name` est present et correspond au fichier
- [ ] `version` suit SemVer (X.Y.Z)
- [ ] `status` est une valeur valide (stable/beta/alpha/experimental/deprecated)

### Dates
- [ ] `created` est au format YYYY-MM-DD
- [ ] `modified` est au format YYYY-MM-DD et >= created
- [ ] `created_by` identifie le createur

### Description
- [ ] `description` est present et comprehensible
- [ ] Decrit le role et les cas d'usage

### Technical
- [ ] `model` est une valeur valide (opus/sonnet/haiku)
- [ ] `tools` ne contient que des outils valides
- [ ] `tools` est minimal (principe de moindre privilege)

### Optional
- [ ] `context_to_load` utilise les variables correctes ($DOCS, $ROOT)
- [ ] `dependencies` reference des agents existants
- [ ] `color` est une valeur valide
- [ ] `tags` sont pertinents pour la recherche

### Changelog
- [ ] `changelog` est trie par version (du plus recent au plus ancien)
- [ ] Chaque entree a version, date, et notes

---

## Migration Guide

### Pour les agents avec frontmatter basique

Les 5 nouveaux agents crees utilisent un format basique:

```yaml
---
name: context-builder
description: Agent context file generator...
tools: Read, Write, Edit, Glob, Grep
model: sonnet
color: red
permissionMode: default
skills: context-generation, documentation-analysis
---
```

**Pour migrer vers le schema complet**, ajouter:

1. Champs obligatoires manquants:
   - `agent_id` (si different de `name`)
   - `version`
   - `status`
   - `created`
   - `modified`
   - `created_by`

2. Champs optionnels recommandes:
   - `context_to_load` (si applicable)
   - `dependencies` (si applicable)
   - `domain` et `tags` (pour decouverte)
   - `changelog` (pour traçabilite)

### Exemple de migration

**Before (basic)**:
```yaml
---
name: context-builder
description: Agent context file generator...
tools: Read, Write, Edit, Glob, Grep
model: sonnet
color: red
permissionMode: default
skills: context-generation
---
```

**After (complete)**:
```yaml
---
agent_id: context-builder
name: context-builder
version: "1.0.0"
status: stable
created: "2026-01-17"
modified: "2026-01-17"
created_by: meta-agent

description: Agent context file generator. Creates mandatory context files for agents from project documentation.

context_to_load:
  mandatory:
    - $DOCS/agents/context/mandatory/

dependencies: []

tools: Read, Write, Edit, Glob, Grep
model: sonnet
color: red
domain: meta/context
tags: [context, documentation, generation]

skills: context-generation, documentation-analysis, file-creation

changelog:
  - version: "1.0.0"
    date: "2026-01-17"
    notes: "Initial stable version with complete frontmatter"
---
```

---

## References

- **AGENTS.md**: Règle #13 - Principes SOLID, Standardiser Frontmatter
- **Registry**: `docs/project/standards/agents/registry.md`
- **Example Complet**: `.claude/agents/auditor.md`

---

**Version**: 1.0.0
**Created**: 2026-01-17
**Author**: meta-agent
**Status**: STABLE
