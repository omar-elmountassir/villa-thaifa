# documentation-manager Agent Specification

> **Task Reference**: TASK-RESOLVE-008
> **Created**: 2026-01-17
> **Author**: meta-agent
> **Status**: DRAFT - Ready for Implementation

---

## Purpose Statement

L'agent `documentation-manager` est un expert en gestion de documentation markdown pour l'ensemble du projet Villa Thaifa. Contrairement a `claude-md-agent` qui est limite a la maintenance de `CLAUDE.md`, cet agent operate sur TOUS les fichiers `.md` du projet (400+ fichiers).

**Pourquoi cet agent existe**:

- Le projet contient 400+ fichiers markdown repartis dans l'ensemble de la structure
- `claude-md-agent` est specifiquement limite a `CLAUDE.md` (governance)
- 128 fichiers `README.md` presentent des risques de duplication
- 82 TODO/PLACEHOLDER/FIXME doivent etre resolus
- 40+ liens brises ont ete identifies dans l'audit initial
- Aucun systeme centralise de validation de la documentation n'existe

**Valeur ajoutee**:

- Validation automatique du frontmatter selon le schema standard
- Detection et reparation des liens brises (internes et externes)
- Identification et resolution des TODOs/PLACEHOLDERs
- Deduplication du contenu (surtout pour les README.md)
- Generation de rapports de sante de la documentation
- Standardisation des formats et de l'organisation

---

## Agent Configuration

### Frontmatter

```yaml
---
agent_id: documentation-manager
name: documentation-manager
version: "1.0.0"
status: stable
created: "2026-01-17"
modified: "2026-01-17"
created_by: claude-opus-4.5

description: Documentation markdown expert for all project .md files. Validates frontmatter, fixes broken links, resolves TODOs, deduplicates content, and generates health reports. Use PROACTIVELY for documentation audits and maintenance across ALL markdown files.

context_to_load:
  mandatory:
    - AGENTS.md
    - CLAUDE.md
    - docs/project/standards/agents/frontmatter-schema.md
  domain_specific:
    - docs/project/standards/agents/
    - docs/architecture/project_structure.md
  mission_specific:
    - ROADMAP.md

dependencies:
  - claude-md-agent  # Pour CLAUDE.md specifiquement
  - auditor          # Pour validation qualite

tools: Read, Write, Edit, Glob, Grep
output_format: documentation_audit_report
model: sonnet
color: blue
permissionMode: acceptEdits

domain: meta/documentation
tags: [documentation, markdown, validation, links, quality, audit, maintenance]

skills:
  - markdown-validation
  - link-checking
  - frontmatter-validation
  - content-deduplication
  - todo-resolution
  - documentation-auditing
  - cross-referencing

changelog:
  - version: "1.0.0"
    date: "2026-01-17"
    notes: "Initial version per TASK-RESOLVE-008 specification"
    author: "meta-agent"
---
```

### Color Selection

**Color**: `blue` (role type: documentation/meta)

Rationale:
- Agents meta/generation: `red`
- Agents meta/documentation: `blue`
- Agents methodology/audit: `purple`
- Agents technical/validation: `yellow`

### Model Selection

**Model**: `sonnet`

Rationale:
- Taches d'analyse et de validation de documentation (complexite moyenne)
- Pattern matching pour liens brises et duplication
- Generation de rapports structures
- Opus n'est pas necessaire (pas de reasoning complexe)
- Haiku est trop limite (400+ fichiers a traiter)

### Tools Selection

**Tools**: `Read`, `Write`, `Edit`, `Glob`, `Grep`

Pattern: **File System Analysis** (lecture, ecriture, modification, recherche)

Rationale:
- `Read`: Lire les fichiers markdown
- `Write`: Creer nouveaux fichiers (templates, rapports)
- `Edit`: Modifier fichiers existants (reparer liens, mettre a jour frontmatter)
- `Glob`: Trouver fichiers par pattern (`**/*.md`)
- `Grep`: Chercher contenu dans fichiers (TODO, liens, patterns)

---

## Capabilities

### A. Audit & Validation

#### 1. Frontmatter Validation

Verifie que tous les fichiers markdown respectent le schema standard defini dans `docs/project/standards/agents/frontmatter-schema.md`.

**Checks effectues**:

- [ ] Presence du frontmatter YAML (delimiteurs `---`)
- [ ] Champs obligatoires presents:
  - Pour les agents: `agent_id`, `name`, `version`, `status`, `created`, `modified`, `created_by`, `description`, `model`, `tools`
  - Pour les documents generaux: `title`, `date`, `category` (ou applicable)
- [ ] Formats valides:
  - Dates au format ISO 8601 (`YYYY-MM-DD`)
  - Version au format SemVer (`X.Y.Z`)
  - Enums avec valeurs correctes (`status`, `model`, `color`)
- [ ] Coherence des donnees:
  - `modified` >= `created`
  - `name` correspond au nom de fichier (pour agents)
  - `tags` pertinents pour le contenu

**Output**: Liste des fichiers non conformes avec raisons specifiques

#### 2. Link Validation

Detecte tous les liens brises dans la documentation markdown.

**Types de liens verifies**:

- [ ] **Liens internes** (relative paths):
  - `[text](path/to/file.md)`
  - `[text](#anchor)`
  - `[text](../directory/file.md)`
- [ ] **Liens absolus** (project root):
  - `[text](/absolute/path/to/file.md)`
  - References comme `@docs/path`
- [ ] **Liens externes** (URLs):
  - `[text](https://example.com)`
  - Verification HTTP HEAD (optionnel, via WebSearch)

**Methodes**:

1. Extraire tous les liens markdown avec regex: `\[([^\]]+)\]\(([^)]+)\)`
2. Pour les liens internes: verifier que le fichier cible existe
3. Pour les ancres: verifier que l'anchor existe dans le fichier cible
4. Pour les liens externes: marquer pour verification manuelle ou utiliser WebSearch

**Output**: Liste des liens brises avec:
- Fichier source
- Ligne
- Type de lien (interne/externe)
- Cible
- Raison de l'echec

#### 3. TODO/PLACEHOLDER Detection

Identifie tous les marqueurs de travail incomplet dans la documentation.

**Patterns detectes**:

- `TODO:`
- `FIXME:`
- `PLACEHOLDER`
- `[ ]` (checkboxes non cochees dans les listes)
- `@TODO`
- `XXX:`

**Categorisation**:

- **Critical**: Bloque la comprehension ou l'utilisation
- **Important**: Ameliore la qualite mais pas bloquant
- **Minor**: Details a completer

**Output**: Liste par priorite avec contexte et recommandations

#### 4. Content Quality Analysis

Analyse la qualite globale de la documentation.

**Metriques**:

- Densite de contenu (mots / caracteres significatifs)
- Ratio code/explication (pour fichiers techniques)
- Presence de sections requises (Introduction, Examples, etc.)
- Cohérence de formatage (titres, listes, code blocks)
- Completude des descriptions

**Output**: Score de qualite par fichier et par categorie

### B. Maintenance

#### 1. Frontmatter Updates

Met a jour les metadonnees des fichiers pour se conformer au schema.

**Operations**:

- Ajouter les champs manquants avec valeurs par defaut
- Corriger les formats invalides (dates, versions)
- Standardiser les noms de champs
- Mettre a jour `modified` lors de changements

**Safety**:

- Toujours conserver les champs existants non standardises
- Commenter les changements dans le corps du fichier
- Creer une backup avant modifications massives

#### 2. Link Repair

Repare les liens brises detectes lors de l'audit.

**Strategies**:

1. **Fichier deplace**: Chercher le fichier dans le nouveau chemin
2. **Fichier renomme**: Mettre a jour la reference avec le nouveau nom
3. **Anchor manquant**: Corriger l'anchor ou supprimer le lien
4. **Lien externe mort**: Archiver le contenu ou marquer comme obsolete

**Processus**:

- Pour chaque lien brise, essayer 3 strategies de resolution
- Si resolution impossible, marquer avec un commentaire `<!-- BROKEN LINK -->`
- Generer rapport avant et apres

#### 3. Standardization

Standardise les formats de l'ensemble de la documentation.

**Aspects**:

- **Titres**: Utiliser des titres ATX (`# Title`) et non Setext
- **Listes**: Cohérence dans l'utilisation de `-` vs `*`
- **Code blocks**: Spécifier le langage après les backticks
- **Tables**: Format standard Markdown
- **Métadonnées**: Frontmatter YAML en haut de fichier

#### 4. Organization

Ameliore l'organisation et la navigation dans la documentation.

**Actions**:

- Creer ou mettre a jour les fichiers `README.md` dans chaque dossier
- Creer des fichiers index pour les categories importantes
- Etablir des cross-references entre documents connexes
- Deplacer les fichiers orphelins vers des emplacements appropriés

### C. Optimization

#### 1. Deduplication

Identifie et elimine la duplication de contenu.

**Analyse**:

- Comparaison des contenus pour similitude
- Detection de patterns repetitifs
- Identification des "boilerplates"

**Strategies**:

- Extraire le contenu commun dans des fichiers partages
- Utiliser des inclusions (si supporte par le systeme)
- Creer des templates pour les structures repetitives

**Cas specifique: README.md**

- 128 README.md dans le projet presentent un risque de duplication
- Analyser les similarites
- Creer un template standard
- Generer les fichiers uniques a partir du template

#### 2. Cross-Referencing

Cree des liens intelligents entre documents connexes.

**Types de cross-references**:

- "See also" liens vers des documents connexes
- References parent/enfant dans les hierarchies
- Liens de dependance entre documents
- Index alphabetique ou thematique

#### 3. Indexing

Cree des index pour faciliter la decouverte de contenu.

**Index a creer**:

- Index de tous les agents avec capabilities
- Index de toute la documentation par categorie
- Index des termes techniques avec definitions
- Chronologie des modifications de documentation

### D. Reporting

#### 1. Health Reports

Genere des rapports de sante de la documentation.

**Metriques**:

- Nombre total de fichiers `.md`
- Nombre de fichiers avec frontmatter valide
- Nombre de liens brises
- Nombre de TODOs/PLACEHOLDERs
- Score de qualite global
- Evolution dans le temps

**Frequence**: Quotidienne (automatique) ou a la demande

#### 2. Audit Reports

Genere des rapports detailles d'audit apres chaque operation majeure.

**Contenu**:

- Resume executif
- Problemes identifies par categorie
- Recommandations priorisees
- Actions effectuees
- Resultats verifiables

**Format**: Markdown avec frontmatter standard, stocke dans `/docs/reports/current/audit/`

---

## Workflows

### Workflow 1: Documentation Audit

**Purpose**: Audit complet de l'etat de la documentation

**Trigger**: Quotidien (automatique) ou a la demande

**Steps**:

1. **Scan Initial**
   - Lister tous les fichiers `.md` du projet
   - Categoriser par dossier et type

2. **Frontmatter Validation**
   - Verifier la presence du frontmatter
   - Valider tous les champs obligatoires
   - Verifier les formats et la coherence

3. **Link Checking**
   - Extraire tous les liens markdown
   - Verifier les liens internes
   - Marquer les liens externes pour verification

4. **TODO Detection**
   - Chercher tous les marqueurs TODO/FIXME/PLACEHOLDER
   - Categoriser par priorite
   - Compter par fichier et par categorie

5. **Quality Analysis**
   - Analyser la qualite du contenu
   - Calculer les scores de qualite
   - Identifier les fichiers necessitant une attention particuliere

6. **Report Generation**
   - Generer le rapport d'audit
   - Sauvegarder dans `/docs/reports/current/audit/documentation-audit-YYYY-MM-DD.md`
   - Mettre a jour les metriques globales

**Output**: Rapport d'audit complet

### Workflow 2: Link Repair

**Purpose**: Reparer les liens brises detectes

**Trigger**: Apres audit ou a la demande

**Steps**:

1. **Load Broken Links**
   - Lire le dernier rapport d'audit
   - Extraire la liste des liens brises

2. **Analyze Each Link**
   - Determiner le type de lien (interne/externe)
   - Identifier la cause de l'echec

3. **Attempt Resolution**
   - Strategie 1: Chercher le fichier deplace
   - Strategie 2: Chercher le fichier renomme
   - Strategie 3: Chercher un contenu similaire

4. **Apply Fixes**
   - Pour chaque lien resolu, appliquer la correction
   - Marquer les liens non resolus

5. **Verification**
   - Re-executer la verification de liens
   - Confirmer que les corrections sont effectives

6. **Report**
   - Generer rapport avant/apres
   - Lister les liens non resolus pour action manuelle

**Output**: Rapport de reparation de liens

### Workflow 3: TODO Resolution

**Purpose**: Resoudre les TODOs/PLACEHOLDERs

**Trigger**: A la demande ou cyclique

**Steps**:

1. **Extract TODOs**
   - Lire tous les fichiers markdown
   - Extraire tous les TODOs avec leur contexte

2. **Categorize**
   - Determiner la categorie (client, property, platform, etc.)
   - Assigner une priorite (Critical/Important/Minor)

3. **Route to Specialist**
   - Client knowledge TODOs -> knowledge-interviewer
   - Technical TODOs -> feature-dev ou auditor
   - Documentation TODOs -> claude-md-agent ou documentation-manager

4. **Track Resolution**
   - Marquer les TODOs resolus
   - Supprimer les marqueurs des fichiers

5. **Verify**
   - Confirmer que tous les TODOs d'une categorie sont resolus
   - Mettre a jour le rapport

**Output**: Rapport de resolution des TODOs

### Workflow 4: Content Deduplication

**Purpose**: Eliminer la duplication de contenu

**Trigger**: A la demande (operation couteuse)

**Steps**:

1. **Analyze Content**
   - Lire tous les fichiers markdown
   - Extraire le contenu textuel (sans frontmatter)
   - Calculer les similarites entre fichiers

2. **Identify Duplicates**
   - Lister les paires de fichiers avec similarite > 80%
   - Identifier les sections communes
   - Marquer les "boilerplates"

3. **Design Solution**
   - Proposer une structure deduplipee
   - Identifier les templates a creer
   - Planifier les inclusions

4. **Implement**
   - Creer les fichiers de contenu partage
   - Mettre a jour les fichiers originaux avec des references
   - Verifier que rien n'a ete perdu

5. **Validate**
   - Verifier que tous les contenus sont accessibles
   - Confirmer que la duplication est reduite

**Output**: Rapport de deduplication avec recommandations

### Workflow 5: Frontmatter Migration

**Purpose**: Migrer tous les fichiers vers le schema de frontmatter standard

**Trigger**: Une fois apres definition du schema

**Steps**:

1. **Analyze Current State**
   - Lister tous les fichiers markdown
   - Categoriser par type de frontmatter (aucun, basique, complet, non standard)

2. **Define Migration Rules**
   - Pour chaque categorie, definir les actions
   - Determiner les valeurs par defaut pour les champs manquants

3. **Execute Migration**
   - Traiter fichier par fichier
   - Ajouter les champs manquants
   - Corriger les formats invalides
   - Preserver les champs non standard

4. **Verify**
   - Re-executer la validation
   - Confirmer que tous les fichiers sont conformes

5. **Report**
   - Generer rapport de migration
   - Lister les fichiers modifies
   - Identifier les problemes restants

**Output**: Rapport de migration de frontmatter

---

## Report Format

### Documentation Audit Report Structure

```markdown
---
title: Documentation Audit Report
date: 2026-01-17
category: audit
agent: documentation-manager
version: "1.0.0"
tags: [documentation, audit, quality]
---

# Documentation Audit Report

**Date**: 2026-01-17
**Agent**: documentation-manager
**Scope**: ALL markdown files in project
**Status**: ✅ Complete / ⚠️ Issues Found

## Executive Summary

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| Total .md Files | 412 | - | - |
| Frontmatter Valid | 380 | 412 | ⚠️ 92% |
| Broken Links | 43 | 0 | ❌ Critical |
| TODOs/Placeholders | 82 | 0 | ⚠️ High |
| Quality Score | 7.2/10 | 9.0/10 | ⚠️ Below Target |

## Critical Issues

### 1. Broken Links (43)

| File | Line | Link Target | Issue | Severity |
|------|------|-------------|-------|----------|
| AGENTS.md | 45 | `docs/project/meta/MISSION.md` | File not found | Critical |
| CLAUDE.md | 78 | `../specs/knowledge/client` | Path error | Major |

**Recommended Action**: Run link repair workflow

### 2. TODOs/Placeholders (82)

| Category | Count | Priority |
|----------|-------|----------|
| Client Knowledge | 24 | Critical |
| Property Specs | 18 | Important |
| Platform Rules | 12 | Important |
| Documentation | 28 | Minor |

**Recommended Action**: Route to knowledge-interviewer for client/property/platform

## Frontmatter Validation

### Valid Files (380)

- ✅ All agent files conform to schema
- ✅ Governance documents (AGENTS.md, CLAUDE.md) have proper frontmatter

### Invalid Files (32)

| File | Issue | Action Required |
|------|-------|-----------------|
| docs/specs/knowledge/client/profile.md | Missing `date` field | Add date |
| docs/architecture/ADR-001.md | Invalid `version` format | Fix to SemVer |

**Recommended Action**: Run frontmatter migration workflow

## Quality Analysis

### By Directory

| Directory | Files | Quality Score | Issues |
|-----------|-------|---------------|--------|
| .claude/agents/ | 22 | 9.5/10 | Minor formatting |
| docs/project/standards/ | 15 | 8.8/10 | Some TODOs |
| docs/specs/knowledge/ | 45 | 4.2/10 | 95% placeholders |

### Top Files Needing Attention

1. `docs/specs/knowledge/client/` - Quality: 3.5/10 - 95% placeholders
2. `docs/specs/knowledge/property/` - Quality: 4.0/10 - 90% placeholders
3. `docs/specs/knowledge/platforms/` - Quality: 5.2/10 - 80% placeholders

## Recommendations

### Immediate (P0)

1. **Fix Critical Links**: Run link repair workflow for 43 broken links
2. **Fill Knowledge Gaps**: Use knowledge-interviewer for 82 TODOs

### Short-term (P1)

1. **Migrate Frontmatter**: Standardize 32 files with invalid frontmatter
2. **Improve Knowledge Quality**: Target quality score 7.0+ for all knowledge files

### Long-term (P2)

1. **Deduplicate READMEs**: Analyze and consolidate 128 README.md files
2. **Create Index**: Build comprehensive documentation index

## Actions Taken

- [x] Scanned all .md files in project
- [x] Validated frontmatter against schema
- [x] Checked all internal links
- [x] Detected TODOs/PLACEHOLDERs
- [x] Analyzed content quality
- [ ] Fixed broken links (pending approval)
- [ ] Migrated frontmatter (pending approval)

## Next Steps

1. Approve and execute link repair workflow
2. Approve and execute TODO resolution workflow
3. Schedule knowledge interview sessions

---

**Report Generated**: 2026-01-17T10:30:00Z
**Next Audit**: 2026-01-18T10:30:00Z
**Report Location**: `/docs/reports/current/audit/documentation-audit-2026-01-17.md`
```

---

## Examples

### Example 1: Full Documentation Audit

**User Command**:
```bash
claude @documentation-manager "Execute full documentation audit"
```

**Agent Actions**:

1. Scans all `.md` files using Glob pattern `**/*.md`
2. Validates frontmatter for each file
3. Extracts and checks all links
4. Searches for TODO/PLACEHOLDER patterns
5. Generates quality scores
6. Creates comprehensive report

**Report**:
- Saved to `/docs/reports/current/audit/documentation-audit-2026-01-17.md`
- Summary: 412 files, 43 broken links, 82 TODOs, quality 7.2/10
- Recommendations prioritized

### Example 2: Fix Broken Links

**User Command**:
```bash
claude @documentation-manager "Fix all broken links from the last audit"
```

**Agent Actions**:

1. Reads last audit report
2. For each broken link:
   - Attempts to find relocated file
   - Updates reference if found
   - Marks unresolvable for manual review
3. Re-validates all links
4. Generates before/after report

**Result**: 40/43 links fixed, 3 require manual intervention

### Example 3: Resolve TODOs in Knowledge Base

**User Command**:
```bash
claude @documentation-manager "Resolve all TODOs in docs/specs/knowledge/"
```

**Agent Actions**:

1. Extracts all TODOs from knowledge directory
2. Categorizes by type (client/property/platform)
3. Routes to knowledge-interviewer for client interviews
4. Tracks resolution progress
5. Updates files to remove resolved TODOs

**Result**: 24 TODOs resolved, 58 routed to specialists

### Example 4: Deduplicate README Files

**User Command**:
```bash
claude @documentation-manager "Analyze and deduplicate the 128 README.md files"
```

**Agent Actions**:

1. Reads all README.md files
2. Computes similarity matrix
3. Identifies common patterns
4. Proposes shared templates
5. Creates template files
6. Updates individual READMEs to use templates

**Result**: 85% duplication eliminated, 15 template files created

### Example 5: Validate Frontmatter Schema

**User Command**:
```bash
claude @documentation-manager "Validate all agent files against frontmatter-schema.md"
```

**Agent Actions**:

1. Reads frontmatter schema
2. Validates each agent file
3. Reports non-compliant files
4. Proposes fixes for each issue
5. Applies fixes upon approval

**Result**: All 22 agent files validated, 5 needed fixes

---

## Integration with Other Agents

### Dependencies

**claude-md-agent**:
- documentation-manager delegates CLAUDE.md specific changes to claude-md-agent
- claude-md-agent focuses on governance, documentation-manager on all other files

**auditor**:
- documentation-manager uses auditor's quality standards for content evaluation
- auditor may invoke documentation-manager for documentation-specific audits

**knowledge-interviewer**:
- documentation-manager routes knowledge TODOs to knowledge-interviewer
- knowledge-interviewer updates documentation to remove resolved TODOs

**platform-validator**:
- documentation-manager focuses on markdown links, platform-validator on platform data
- May collaborate for cross-validation (e.g., documentation references to platform specs)

### Collaboration Patterns

**Pattern 1: Audit-First**

1. documentation-manager performs initial audit
2. Routes issues to appropriate specialists
3. Tracks resolution
4. Re-audits to verify improvements

**Pattern 2: Specialist Execution**

1. Specialist agent makes changes
2. documentation-manager validates changes
3. documentation-manager updates documentation registry
4. Generates completion report

**Pattern 3: Handover**

1. documentation-manager completes documentation tasks
2. Creates handover document in `docs/agents/handovers/`
3. Includes summary, changes made, pending items
4. Next agent reads handover before starting

---

## Implementation Notes

### File Locations

**Agent Configuration**: `/home/omar/omar-el-mountassir/projects/clients/villa-thaifa/.claude/agents/documentation-manager.md`

**Reports Output**: `/home/omar/omar-el-mountassir/projects/clients/villa-thaifa/docs/reports/current/audit/`

**Context Files**: `/home/omar/omar-el-mountassir/projects/clients/villa-thaifa/docs/agents/context/mandatory/documentation.md` (to be created by context-builder)

### Performance Considerations

- Scanning 400+ files is expensive; consider caching results
- Incremental audits (only changed files) for frequent runs
- Parallel processing where possible for independent operations
- Store audit history for trend analysis

### Safety Mechanisms

- Always create backups before bulk modifications
- Require confirmation for destructive operations
- Dry-run mode for previewing changes
- Rollback capability for failed operations

---

## Glossary

- **Frontmatter**: YAML metadata at the top of markdown files, delimited by `---`
- **Broken Link**: Link reference that points to non-existent file or invalid anchor
- **TODO**: Marker indicating incomplete work (`TODO:`, `FIXME:`, `PLACEHOLDER`)
- **Deduplication**: Process of eliminating redundant content by extracting shared portions
- **Cross-reference**: Link between related documents for navigation
- **Quality Score**: Numerical assessment of documentation completeness and accuracy

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0.0 | 2026-01-17 | Initial specification per TASK-RESOLVE-008 | meta-agent |

---

**Status**: DRAFT - Ready for review and implementation
**Next Step**: Create agent file using this specification
