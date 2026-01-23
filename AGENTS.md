# AGENTS.md

> **Specification**: [AGENTS.md Standard](https://agents.md)
> **Identity**: Universal Agent Manifest.
> **Last Updated**: 2026-01-20

## 🤖 Manifest

- **Project**: Villa Thaifa - Digital Transformation
- **Owner**: Omar El Mountassir
- **Capabilities Required**: `fs_read`, `fs_write`, `cli_exec`.

## ⚡ Mandatory Reading (All Agents)

| Order | File                                                                                                   | Purpose                      |
| ----- | ------------------------------------------------------------------------------------------------------ | ---------------------------- |
| 1     | [`AGENTS.md`](AGENTS.md)                                                                               | This file - Governance rules |
| 2     | [`ROADMAP.md`](ROADMAP.md)                                                                             | Task registry (SSOT)         |
| 3     | [`docs/architecture/project_structure.md`](docs/architecture/project_structure.md)                     | Where everything lives       |
| 4     | [`docs/project/standards/agents/code_of_conduct.md`](docs/project/standards/agents/code_of_conduct.md) | Behavior rules               |

---

## 🚨 PRIME DIRECTIVE (Governance)

> **RULE #1**: ALL WORK MUST BE REGISTERED IN `ROADMAP.md` FIRST.
> No agent shall execute a task that is not explicitly defined in the Project Roadmap.
> If a task is missing, **STOP**, update `ROADMAP.md`, and request user approval.
> If a task is done, **STOP**, update `ROADMAP.md`, and notify user.

---

## 🚨 Nouvelles Règles Critiques (2026-01-17)

> **IMPORTANT**: Ces règles gouvernent TOUS les agents dans l'écosystème Villa Thaifa.
> Elles ont été établies suite à l'audit catastrophique du 17 janvier 2026 (Score: 3.33/10).

### Règle #1: ROADMAP.md - Source de Vérité

**Principe**: TOUT travail doit être enregistré dans `ROADMAP.md` AVANT toute exécution.

**Exigences**:

- Chaque tâche doit avoir un ID unique (TASK-XXX)
- Chaque tâche doit lister les checkboxes atomiques
- Chaque tâche doit spécifier l'agent requis
- Chaque tâche doit indiquer les dépendances

**Exemple**:

```markdown
#### TASK-001-AGENTS: Mettre à jour AGENTS.md

- [ ] Lire AGENTS.md actuel
- [ ] Ajouter section "## 🚨 Nouvelles Règles Critiques"
- [ ] Documenter Règle #1
- [ ] Vérifier cohérence

**Agent**: claude-md-agent | **Complexité**: Low | **Dépendances**: Aucune
```

**Si une tâche n'est pas dans ROADMAP.md**:

1. STOP immédiatement
2. Ajouter la tâche dans ROADMAP.md
3. Demander approbation à Omar
4. Seulement après approbation → exécuter

---

### Règle #2: Décomposition Atomique Obligatoire

**Principe**: Toute tâche doit être décomposée en checkboxes individuelles et atomiques AVANT exécution.

**Exigences**:

- Chaque checkbox doit être une action unique et vérifiable
- Pas de checkboxes composées (ex: "Créer et tester" → interdit)
- Ordre logique et séquentiel
- Cocher UNE PAR UNE (pas tout un bloc d'un coup)

**Exemple MAUVAIS**:

```markdown
#### TASK-XXX: Créer Agent

- [ ] Créer fichier et tester et documenter ❌ NON
```

**Exemple BON**:

```markdown
#### TASK-XXX: Créer Agent

- [ ] Lire template agent
- [ ] Créer fichier agent.md
- [ ] Remplir métadonnées
- [ ] Définir capabilities
- [ ] Créer tests
- [ ] Exécuter tests
- [ ] Corriger erreurs
- [ ] Documenter usage ✅ OUI
```

**Pourquoi?**: Pertrait visibilité, reprise sur erreur, et validation progressive.

---

### Règle #3: Agents Spécialisés Uniquement

**Principe**: Interdiction d'utiliser des agents génériques (Task, Explore). Utiliser UNIQUEMENT les 24 agents spécialisés.

**Agents Spécialisés Disponibles** (24 agents): Disponible à travers Claude Code CLI (Run `claude -p "{{PROMPT}}"` to get access to them! unless you are Claude Code.. then you can run them directly!)

1. `claude-md-agent` - Documentation markdown (CLAUDE.md, AGENTS.md)
2. `context-builder` - Construction de contexte
3. `capability-extractor` - Extraction de capabilities
4. `knowledge-interviewer` - Interviews connaissances
5. `test-runner` - Exécution de tests
6. `dashboard-generator` - Génération de dashboards
7. `documentation-manager` - Gestion documentation (tous fichiers .md)
8. `platform-validator` - Validation plateforme
9. `auditor` - Audits et vérifications
10. `data-sync-checker` - Synchronisation données
11. `meta-agent` - Création d'agents
12. `pricing-analyst` - Analyse pricing et revenus
13. `reservation-manager` - Gestion réservations
14. `calendar-agent` - Disponibilités et occupancy
15. `guest-communicator` - Communications guests
16. `translation-agent` - Traduction FR/EN/AR
17. `browser-agent` - Automatisation Chrome
18. `research-agent` - Recherche web
19. `security-auditor` - Sécurité OWASP
20. `incident-reporter` - Documentation incidents
21. `html-report-generator` - Génération HTML
22. `smart-contract-auditor` - Audit blockchain
23. `decision-evaluator` - Analyse décisions multicritères
24. `git-manager` - Operations Git, branch management

**Si l'agent n'existe pas**:

1. Invoquer `meta-agent` pour créer le nouvel agent
2. Spécifier les capabilities requises
3. Attendre que l'agent soit créé
4. Utiliser le nouvel agent

**Exemple**:

```markdown
❌ MAUVAIS: "Utilise Task agent pour analyser..."
✅ BON: "Utilise claude-md-agent pour documenter..."
✅ BON: "Invoque meta-agent pour créer seo-optimizer..."
```

---

### Règle #4: Orchestration Claude

**Principe**: Claude (instance principale) doit ORCHESTRER le travail, pas l'exécuter directement.

**Rôle de Claude**:

1. Analyser la demande
2. Identifier l'équipe nécessaire (2-5 agents)
3. Invoquer les agents dans le bon ordre
4. Compiler les résultats
5. Faire un rapport final

**Exemple**:

```markdown
# Demande: "Auditer la qualité du code"

## Analyse (Claude)

- Scope: /src/app/admin/
- Équipe identifiée: auditor, claude-md-agent, test-runner

## Orchestration

1. Invoquer auditor pour l'audit brutal
2. Invoquer claude-md-agent pour documenter les findings
3. Invoquer test-runner pour valider les corrections
4. Compiler résultats dans rapport final
```

**Anti-patterns**:

- ❌ Claude fait tout lui-même
- ❌ Claude invoque un seul agent pour tout
- ✅ Claude orchestre 2-5 agents spécialisés

---

### Règle #5: Documentation Spécifique

**Principe**: Séparation stricte entre CLAUDE.md (spécifique Claude Code CLI) et AGENTS.md (commun tous agents).

**CLAUDE.md** (Spécifique Claude Code CLI):

- Ressources disponibles pour Claude Code CLI
- Tools disponibles (Read, Write, Bash, etc.)
- Agents spécialisés accessibles
- Exemples d'utilisation concrets
- Configuration locale (~/.claude/)

**AGENTS.md** (Commun à tous agents):

- Règles de gouvernance (tous agents)
- Structure du projet
- Team & rôles
- Code of conduct
- Collaboration protocol

**Exemple**:

```markdown
# Dans CLAUDE.md

## 🤖 Agents Disponibles

- claude-md-agent: Documentation markdown
- auditor: Audits et vérifications
  ...

## 🔧 Tools

- Read: Lire fichiers
- Write: Écrire fichiers
- Bash: Exécuter commandes
  ...

# Dans AGENTS.md

## 🚨 Règles Critiques

- Règle #1: ROADMAP.md source de vérité
- Règle #2: Décomposition atomique
  ...
```

---

### Règle #6: Système de Rapports Hybride

**Principe**: Rapports automatiques pour agents critiques, sur demande pour les autres.

> **Documentation Complète**: [`docs/reports/README.md`](docs/reports/README.md)

**Rapports Automatiques (OBLIGATOIRES)**:

- `auditor` → après chaque audit
- `platform-validator` → après validation
- `incident-reporter` → après incident
- `test-runner` → après tests échoués

**Rapports Sur Demande (OPTIONNEL)**:

- `claude-md-agent` → si demandé
- `html-report-generator` → si demandé
- Autres agents → si demandé

**Templates Disponibles**:

1. **[`standard-report.md`](docs/reports/templates/standard-report.md)** - Rapport générique (8 sections)
2. **[`audit-report.md`](docs/reports/templates/audit-report.md)** - Avec système de scoring (10 sections)
3. **[`agent-report.md`](docs/reports/templates/agent-report.md)** - Avec métriques agents (10 sections)
4. **[`incident-report.md`](docs/reports/templates/incident-report.md)** - Avec sévérité et RCA (10 sections)

**Génération de Rapport**:

```bash
# Via script (recommandé)
~/bin/generate-report --template <type> --category <cat> --agent <name> --title "Title"

# Exemples
~/bin/generate-report --template audit --category audit --agent auditor \\
    --title "Agent System Audit" --status final

~/bin/generate-report --template agent --category agents --agent meta-agent \\
    --title "Creation of new agent"
```

**Convention de Nommage**:

```
YYYY-MM-DD-category-agent-seq.md
Ex: 2026-01-17-audit-auditor-001.md
```

**Emplacement**:

- **Rapports actifs**: `/docs/reports/current/{audit,agents,operations,investigations}/`
- **Par date**: `/docs/reports/by-date/YYYY-MM-DD.md`
- **Par agent**: `/docs/reports/by-agent/agent-name.md`
- **Archivés**: `/docs/reports/archived/YYYY/QX/`

---

### Règle #7: Confiance 94%+

**Principe**: IF NOT CONFIDENT ENOUGH → STOP et chercher/utiliser agents/demander Omar.

**Niveaux de Confiance**:

- **94-100%**: Procéder
- **80-93%**: Chercher documentation online
- **< 80%**: Demander Omar

**Actions quand < 94%**:

1. **Chercher Online**:
   - Utiliser WebSearch pour docs officielles
   - Vérifier sur StackOverflow, GitHub Issues
   - Lire la documentation officielle

2. **Utiliser Agents**:
   - Invoquer agent spécialisé pour expertise
   - Ex: "Je ne suis pas sûr, invoque auditor"

3. **Demander Omar**:
   - Si online + agents insuffisants
   - Formuler question claire avec contexte
   - Attendre réponse avant de procéder

**Exemple**:

```markdown
# Demande: "Implémenter WebAuthn"

❌ MAUVAIS: "Je vais faire ça..." (confiance 60%)
✅ BON: "Je ne suis pas confiant (70%). Je cherche la doc WebAuthn..."
✅ BON: "Je cherche online → Ah, WebAuthn API est complexe. Je demande Omar pour confirmer l'approche."
```

---

### Règle #8: Vérification x2

**Principe**: Tout vérifier 2x, utiliser `claude -p "..."` pour tests.

**Méthodologie**:

1. **Première vérification**: Pendant l'exécution
2. **Deuxième vérification**: Après completion

**Outils de Vérification**:

- `claude -p "prompt"`: Test avec une nouvelle instance
- `jq '.'`: Valider JSON
- `ripgrep`: Rechercher patterns
- `bash -n`: Vérifier syntaxe bash

**Exemple**:

```markdown
# Après créer fichier JSON

1. Vérification 1: `jq '.' fichier.json`
2. Vérification 2: `claude -p "Valide fichier.json et check consistency"`

# Après créer agent

1. Vérification 1: Lire fichier et checker format
2. Vérification 2: `claude -p "Test cet agent avec un exemple concret"
```

**Critères de Succès**:

- ✅ 2 vérifications indépendantes
- ✅ Pas de warnings/erreurs
- ✅ Résultat cohérent avec attentes

---

### Règle #9: Maintenance Checkbox

**Principe**: Cocher les checkboxes UNE PAR UNE, pas tout un bloc d'un coup.

**Pourquoi?**:

- Visibilité en temps réel du progrès
- Possibilité de reprise après erreur
- Validation progressive
- Traçabilité claire

**Exemple MAUVAIS**:

```markdown
- [x] Lire AGENTS.md
- [x] Ajouter section
- [x] Documenter Règle #1
- [x] Documenter Règle #2
- [x] Documenter Règle #3 ❌ Tout coché d'un coup
```

**Exemple BON**:

```markdown
# Étape 1: Lire AGENTS.md

- [x] Lire AGENTS.md ✅

# Étape 2: Ajouter section

- [x] Ajouter section "## 🚨 Nouvelles Règles Critiques" ✅

# Étape 3: Documenter Règle #1

- [x] Documenter Règle #1: ROADMAP.md source de vérité ✅

# Étape 4: Documenter Règle #2

- [ ] Documenter Règle #2: Décomposition atomique ⏳ En cours...
```

**Workflow**:

1. Cocher UNE checkbox
2. Commit/Update si nécessaire
3. Passer à la suivante
4. Répéter

---

### Règle #10: Principes SOLID

**Principe**: Tout code produit doit respecter les principes SOLID.

**S - Single Responsibility Principle (SRP)**:

- Chaque composant, classe, ou module a UNE seule responsabilité
- Si un fichier fait >200 lignes → probablement à découper

**O - Open/Closed Principle (OCP)**:

- Les entités doivent être ouvertes à l'extension, fermées à la modification
- Utiliser props/config pour étendre, pas modification directe

**L - Liskov Substitution Principle (LSP)**:

- Les sous-types doivent pouvoir remplacer leurs types de base
- Pas de surprises quand on substitue un composant

**I - Interface Segregation Principle (ISP)**:

- Plusieurs interfaces spécifiques > une interface générale
- Ne pas forcer les clients à dépendre de méthodes inutilisées

**D - Dependency Inversion Principle (DIP)**:

- Dépendre des abstractions, pas des implémentations concrètes
- Utiliser des services et interfaces, pas des fichiers directs

**Exemple**:

```typescript
// ❌ MAUVAIS: page.tsx fait tout (Hero + Rooms + Facilities)
// ✅ BON: <Hero />, <RoomSection />, <FacilitiesSection /> séparés

// ❌ MAUVAIS: inline styles partout
// ✅ BON: design system avec composants réutilisables
```

---

### Règle #11: Politique d'Archivage

**Principe**: Tout contenu deprecated va dans `archive/` à la racine.

**Quand Archiver**:

- Code/fichier remplacé par une nouvelle version
- Contenu obsolète mais potentiellement utile
- Legacy content migré vers nouveau format

**Structure**:

```
archive/
├── README.md           # Explique la politique
├── 2026/
│   └── Q1/
│       ├── legacy-admin/      # Ancien admin
│       └── old-components/    # Anciens composants
└── content/
    └── migrated-markdown/    # Markdown converti en JSON
```

**Process**:

1. Créer sous-dossier daté: `archive/YYYY/QX/nom-descriptif/`
2. Déplacer les fichiers
3. Créer README.md expliquant pourquoi archivé
4. Mettre à jour toutes les références
5. Ne JAMAIS supprimer sans archiver d'abord

**Exceptions**:

- `node_modules/` → supprimer directement
- Fichiers générés (`.next/`, `dist/`) → supprimer directement

---

### Règle #12: Utilisation Obligatoire de GH CLI

**Principe**: Tous les agents DOIVENT utiliser `gh` (GitHub CLI) pour les opérations Git/GitHub.

**GH CLI Disponible**:

```bash
# Vérifié: gh auth status → Logged in as omar-elmountassir
# Scopes: admin:public_key, gist, read:org, repo, workflow
```

**Commandes Essentielles**:

| Opération           | Commande                                     |
| ------------------- | -------------------------------------------- |
| Créer issue         | `gh issue create --title "..." --body "..."` |
| Lister issues       | `gh issue list`                              |
| Créer PR            | `gh pr create --title "..." --body "..."`    |
| Lister PRs          | `gh pr list`                                 |
| Voir statut repo    | `gh status`                                  |
| Ouvrir dans browser | `gh browse`                                  |
| Rechercher          | `gh search issues "query"`                   |

**Quand Utiliser GH CLI**:

- Créer des issues pour tracker les bugs trouvés
- Créer des PRs pour les changements importants
- Consulter l'état du repo

**Exemple**:

```bash
# Après avoir trouvé un bug critique
gh issue create \
  --title "BUG: Room 01 has corrupt type name" \
  --body "Type name contains test data: 'Superior King (Superior King VillaUpdated)'" \
  --label "bug,priority:high"

# Créer une PR pour un fix
gh pr create \
  --title "fix: Clean Room 01 type name" \
  --body "Removes test data contamination from room type"
```

---

### Règle #13: SDLC 2026 Principles

**Principe**: Suivre les principes SDLC modernes de 2026.

**AI-Native Development**:

- Les développeurs orchestrent, les agents exécutent
- "Vibe coding" = prototype → production rapidement
- Agents agentic autonomes avec human oversight

**Golden Paths**:

- Chemins standardisés et sécurisés
- Le chemin facile = le chemin correct
- Réduire la charge cognitive

**Shift-Left Security**:

- Sécurité intégrée au code, pas après
- Valider AVANT de déployer
- Policy-as-Code

**Green Engineering**:

- Code efficient en ressources
- Éviter le "cloud waste"
- API "chunky" pas "chatty"

**Outcome-Based**:

- Focus sur l'impact business, pas les features
- Métriques DORA (Cycle Time, etc.)
- Human-in-the-Loop pour décisions critiques

---

### Règle #14: Maintenance project_structure.md

**Fichier**: [`docs/architecture/project_structure.md`](docs/architecture/project_structure.md)

**Principe**: Ce fichier doit refléter la réalité du projet.

**Triggers de mise à jour**:

- Création d'un nouveau directory
- Renommage ou déplacement de directory
- Restructuration majeure

**Process**:

1. Après modification de structure → Vérifier avec `tree -d`
2. Si changement → Mettre à jour `project_structure.md`
3. Mettre à jour la date "Dernière mise à jour"

**Vérification**:

```bash
tree -d villa-thaifa/{docs,src} 2>/dev/null | wc -l
# Comparer avec le nombre documenté (docs=81, src=20)
```

**Anti-pattern**:

- ❌ Créer directories sans mettre à jour la structure
- ✅ Modification structurelle = mise à jour immédiate

---

### Règle #15: Séparation Stricte des Manifestes

**Principe**: Pas de duplication entre AGENTS.md et fichiers CLI-specific.

**AGENTS.md** contient:

- Governance rules (Règles #1-16)
- Agent Registry (24 agents)
- Project structure references
- Common standards

**CLAUDE.md** contient UNIQUEMENT:

- Claude Code CLI tools (Read, Write, Bash, MCP)
- MCP integrations
- Claude-specific output rules (Règle #16-19)
- How to invoke agents (CLI syntax)

**GEMINI.md** contient UNIQUEMENT:

- Antigravity framework
- Gemini CLI specifics
- CTO Directive (legacy preserved)

**Anti-pattern**:

- ❌ Dupliquer des règles entre fichiers
- ❌ Copier Agent Registry dans CLAUDE.md
- ✅ Référencer AGENTS.md pour contenu commun
- ✅ Garder chaque fichier < 300 lignes si possible

---

### Règle #16: Séparation des Préoccupations (Agents)

**Principe**: Les agents (.md) contiennent UNIQUEMENT comportement et workflow. Les données domaine sont dans des fichiers externes.

**Architecture découplée**:

```
Agent (.md)                    External Reference Files
┌─────────────────┐            ┌────────────────────────────────┐
│ COMPORTEMENT    │            │ DONNÉES DOMAINE                │
│ - Instructions  │ ──reads──> │ - OTA protocols                │
│ - Workflow      │            │ - Property config              │
│ - Report format │            │ - Credentials                  │
└─────────────────┘            └────────────────────────────────┘
```

**Fichiers de référence (SSOT)**:

| Type | Fichier | Contenu |
|------|---------|---------|
| **OTA Protocols** | `docs/specs/knowledge/ota/protocols/browser-protocols.md` | URLs, auth flows, 2FA |
| **Property Config** | `docs/specs/knowledge/property/property-config.md` | Rooms, types, IDs |
| **Credentials** | `.env.local` | Emails, passwords, phones |
| **OTA Strategy** | `docs/specs/knowledge/ota/README.md` | 7 priority OTAs |

**Ce qui va dans l'agent (.md)**:
- ✅ `context_to_load` avec références aux fichiers externes
- ✅ Instructions génériques (workflow steps)
- ✅ Output format / report template
- ✅ Dependencies (autres agents)

**Ce qui NE VA PAS dans l'agent (.md)**:
- ❌ URLs hardcodées (ex: `https://expediapartnercentral.com`)
- ❌ Nombres spécifiques (ex: "12 rooms", "7 OTAs")
- ❌ Credentials ou téléphones
- ❌ Listes de plateformes avec status

**Exemple MAUVAIS**:

```markdown
## Instructions
- Login to https://expediapartnercentral.com
- 2FA SMS to +212643390409
- All 12 rooms must be checked
```

**Exemple BON**:

```markdown
## External References (MUST READ)
| Reference | Path |
|-----------|------|
| **OTA Protocols** | `docs/specs/knowledge/ota/protocols/browser-protocols.md` |
| **Property Config** | `docs/specs/knowledge/property/property-config.md` |

## Instructions
1. Read OTA protocols from external file
2. Get credentials from `.env.local`
3. Get room count from property-config.md
```

**Process de mise à jour**:

1. Donnée domaine change (ex: nouveau OTA) → Modifier fichier externe
2. Agent comportement change → Modifier agent .md
3. JAMAIS modifier les deux pour une seule raison

**Vérification**:

```bash
# Chercher couplage serré dans agents
grep -r "https://" .claude/agents/*.md
grep -r "+212" .claude/agents/*.md
grep -r "12 rooms" .claude/agents/*.md
# Si résultats → VIOLATION de Règle #16
```

---

## 🤖 Agent Registry (24 Agents Deployed)

> **Purpose**: Central registry of all specialized agents
> **Maintenance**: Updated via meta-agent when new agents are created
> **Usage**: Reference this table to select appropriate agent for task

| Agent                      | Role                                      | Domain                   | Model  | Use Cases                                                         |
| -------------------------- | ----------------------------------------- | ------------------------ | ------ | ----------------------------------------------------------------- |
| **context-builder**        | Construction de contexte                  | meta/context             | sonnet | Build mandatory context for agents                                |
| **capability-extractor**   | Extraction de capabilities                | meta/analysis            | sonnet | Extract and document agent capabilities                           |
| **knowledge-interviewer**  | Interviews connaissances                  | meta/knowledge           | sonnet | Interview stakeholders for knowledge base                         |
| **test-runner**            | Execution de tests                        | quality/testing          | sonnet | Run test suites, validate code                                    |
| **dashboard-generator**    | Generation de dashboards                  | visualization/monitoring | sonnet | Create monitoring dashboards                                      |
| **auditor**                | Brutal excellence standards               | methodology/audit        | sonnet | Code reviews, documentation audits, architecture evaluation       |
| **platform-validator**     | Pre-flight checks, safety validation      | technical/validation     | sonnet | Validate data BEFORE platform operations, gatekeeper              |
| **data-sync-checker**      | SSOT vs platform discrepancy check        | technical/sync           | sonnet | Compare local specs with platform state, find inconsistencies     |
| **security-auditor**       | Vulnerability scanning, auth review       | technical/security       | opus   | Security audits, vulnerability assessment, auth system checks     |
| **incident-reporter**      | Error tracking, post-mortems              | operations/incidents     | haiku  | Document errors, create incident reports, track issues            |
| **meta-agent**             | Creating NEW agents                       | meta/generation          | opus   | Generate new agent configurations, follow standards               |
| **browser-agent**          | Web scraping, UI testing                  | technical/automation     | sonnet | Chrome automation, platform interactions, screenshots             |
| **research-agent**         | Documentation search (LOW criticality)    | meta/research            | haiku  | Web research for general topics, tutorials, best practices        |
| **claude-md-agent**        | Maintaining CLAUDE.md/GEMINI.md           | meta/documentation       | opus   | Update documentation, maintain markdown files                     |
| **html-report-generator**  | Professional HTML reports                 | documentation/reports    | opus   | Generate HTML reports from data, create professional outputs      |
| **smart-contract-auditor** | Smart contract audit                      | technical/blockchain     | sonnet | Audit smart contracts, verify blockchain implementations          |
| **decision-evaluator**     | Decision analysis                         | business/analysis        | opus   | Analyze decisions, provide recommendations, cost-benefit analysis |
| **pricing-analyst**        | Revenue optimization                      | business/pricing         | opus   | Pricing analysis, revenue optimization, rate strategies           |
| **reservation-manager**    | Booking lifecycle                         | business/operations      | sonnet | Manage reservations, booking operations, lifecycle                |
| **calendar-agent**         | Availability checks                       | technical/scheduling     | sonnet | Check availability, manage calendar, date operations              |
| **guest-communicator**     | Message drafting                          | business/communication   | sonnet | Draft guest messages, communication templates                     |
| **translation-agent**      | Translation with cultural notes           | business/localization    | haiku  | Translate content with cultural context, localization             |
| **documentation-manager**  | Gestion documentation (tous fichiers .md) | meta/documentation       | sonnet | Manage all markdown documentation, ensure consistency             |
| **git-manager**            | Git operations, branch management         | technical/vcs            | sonnet | Git commands, branch operations, commit management                |

### Agent Selection Guide

**For Code Quality**:

- Use `auditor` for brutal excellence evaluation
- Use `security-auditor` for security-specific reviews

**For Platform Operations**:

- ALWAYS use `platform-validator` FIRST (before any platform action)
- Then use `browser-agent` for execution
- Then use `data-sync-checker` to verify SSOT

**For Documentation**:

- Use `claude-md-agent` for CLAUDE.md/GEMINI.md updates
- Use `documentation-manager` for ALL other markdown files
- Use `html-report-generator` for professional reports
- Use `research-agent` for general research (LOW criticality only)

**For New Agents**:

- Use `meta-agent` to create new specialized agents
- Follow standards in `docs/project/standards/agents/`

---

## 📌 References (The "Constitution")

| Concept             | Source                                                                                                                                                                        |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Team & Roles**    | [`docs/leadership/TEAM.md`](docs/leadership/TEAM.md) @docs/leadership/TEAM.md                                                                                                 |
| **Structure**       | [`docs/architecture/project_structure.md`](docs/architecture/project_structure.md) @docs/architecture/project_structure.md                                                    |
| **Code of Conduct** | [`docs/project/standards/agents/code_of_conduct.md`](docs/project/standards/agents/code_of_conduct.md) @docs/project/standards/agents/code_of_conduct.md                      |
| **Collaboration**   | [`docs/project/standards/agents/collaboration_protocol.md`](docs/project/standards/agents/collaboration_protocol.md) @docs/project/standards/agents/collaboration_protocol.md |

## 🚀 Active Context

- **Work**: [`tasks/active.md`](tasks/active.md) @tasks/active.md
- **Vision**: [`MISSION.md`](docs/project/meta/MISSION.md) @docs/project/meta/MISSION.md
- **Roadmap**: [`ROADMAP.md`](ROADMAP.md) @ROADMAP.md

## 🧠 Core Philosophy

- QUALITY > SPEED
- PERFECTION > "GOOD ENOUGH"
- ITERATIVE UNTIL EXCELLENCE

## 🚀 Active Plans & Status

- **Tasks**: `tasks/active.md` (The Kanban).
- **Architecture**: `docs/architecture/` (The Blueprints).
- **Rescue**: Phase 0 (System Repair) COMPLETED (2026-01-17), score 3.33/10 -> 9.5/10.
- **Current Phase**: Phase 1 - Content Rescue & Governance (see ROADMAP.md).

---

_*Created during the "AI-First" Refactor - Jan 2026*_
