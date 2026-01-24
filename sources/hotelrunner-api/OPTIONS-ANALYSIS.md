# HotelRunner Integration - Options Analysis

> **Status**: 📋 En analyse - Décision en attente
> **Date**: 2026-01-24
> **Context**: Analyse approfondie nécessaire avant engagement

## 🎯 Objectif

Automatiser la gestion de Villa Thaifa en accédant aux données de réservations, chambres, et calendrier depuis HotelRunner.

## ⚠️ Réflexion Critique

**Ce qu'on a fait** : On s'est lancés directement dans la création d'une Custom App API sans analyser toutes les options.

**Problème** : Approche "à l'arrache" non professionnelle - nous devons d'abord comprendre :
- Toutes les méthodes d'accès aux données HotelRunner
- Les avantages/inconvénients de chaque approche
- Les implications techniques et de maintenance
- Les limites et contraintes de chaque option

## 📊 Options Identifiées

### Option 1 : HotelRunner Custom App API (REST - HR-v1)

**Ce qu'on a exploré jusqu'ici**

**Description** :
- Créer une Custom App de type PMS dans le dashboard HotelRunner
- Obtenir TOKEN et HR_ID pour authentification
- Utiliser l'API REST HR-v1 (JSON)

**Avantages** :
- ✅ API REST moderne (JSON)
- ✅ Accès programmatique complet
- ✅ Documentation officielle disponible
- ✅ Support des webhooks temps réel
- ✅ Idéal pour automatisation IA

**Inconvénients** :
- ❌ Rate limits stricts (250 req/jour, 5 req/min)
- ❌ Nécessite callback URL valide (HTTPS public)
- ❌ Configuration initiale complexe
- ❌ Dépendance à l'API HotelRunner

**Rate Limits** :
- 250 requêtes par jour maximum
- 5 requêtes par minute maximum

**Setup découvert** :
1. Dashboard → Custom Apps → Créez votre app
2. Type : PMS
3. Integration : HR-v1 ou OTA-2015b
4. Permissions : Configurable (rooms, reservations, calendar, webhooks)
5. Callback URL : Requis (doit être HTTPS valide)

**Blocage actuel** :
- Callback URL refusé (`https://localhost/...` invalide)
- Solutions temporaires : webhook.site ou example.com
- Mais cela pose la question : avons-nous vraiment besoin des webhooks ?

---

### Option 2 : HotelRunner Custom App API (XML - OTA-2015b)

**Description** :
- Même processus que Option 1
- Utilise standard OpenTravel Alliance (OTA) 2015b
- Format SOAP/XML au lieu de REST/JSON

**Avantages** :
- ✅ Standard industriel établi
- ✅ Compatible avec systèmes PMS traditionnels
- ✅ Mêmes capabilities que HR-v1

**Inconvénients** :
- ❌ XML/SOAP (plus complexe que JSON)
- ❌ Moins adapté pour automatisation moderne
- ❌ Mêmes rate limits que HR-v1
- ❌ Même contrainte de callback URL

**Évaluation** :
- Moins adapté pour notre use case (AI automation)
- HR-v1 (REST/JSON) préférable si on choisit cette voie

---

### Option 3 : Browser Automation (agent-browser)

**Description** :
- Utiliser agent-browser pour automatiser le dashboard HotelRunner
- Scraping des données directement depuis l'interface web
- Pas d'API, simulation utilisateur humain

**Avantages** :
- ✅ Aucune configuration API nécessaire
- ✅ Pas de rate limits API
- ✅ Accès à toutes les fonctionnalités visibles
- ✅ Outil déjà installé et opérationnel
- ✅ Contourne reCAPTCHA une fois authentifié

**Inconvénients** :
- ❌ Fragile (changements UI cassent l'automatisation)
- ❌ Plus lent que API
- ❌ Nécessite maintenir la session active
- ❌ Pas de webhooks temps réel
- ❌ Doit gérer authentification (credentials dans .env.local)

**Évaluation** :
- Bon pour extraction ponctuelle
- Moins fiable pour automatisation continue
- Alternative si API trop limitée

---

### Option 4 : Export Manuel + Processing

**Description** :
- Exporter manuellement les données depuis HotelRunner (CSV, Excel)
- Traiter les fichiers avec scripts Python
- Upload périodique des exports

**Avantages** :
- ✅ Aucune configuration technique
- ✅ Aucun rate limit
- ✅ Simple à implémenter
- ✅ Contrôle total sur les données

**Inconvénients** :
- ❌ Process manuel (pas d'automatisation)
- ❌ Pas de données temps réel
- ❌ Erreurs humaines possibles
- ❌ Ne scale pas

**Évaluation** :
- Bon pour phase de test/POC
- Non viable long terme pour automatisation

---

### Option 5 : Intégration via Channel Manager Features

**Description** :
- Utiliser les intégrations natives HotelRunner → autres outils
- Exemple : Zapier, Make.com, ou autres connecteurs
- Données transitent via plateforme tierce

**Avantages** :
- ✅ Configuration visuelle (no-code/low-code)
- ✅ Connecteurs pré-faits possibles
- ✅ Gestion d'erreurs incluse

**Inconvénients** :
- ❌ Coût mensuel potentiel
- ❌ Dépendance à plateforme tierce
- ❌ Limite de customisation
- ❌ Besoin de rechercher disponibilité

**Évaluation** :
- ⏳ À explorer - non investigué encore
- Pourrait être solution intermédiaire

---

### Option 6 : Accès Direct Database (si disponible)

**Description** :
- Connexion directe à la base de données HotelRunner
- Lecture seule via credentials DB

**Avantages** :
- ✅ Accès complet aux données
- ✅ Pas de rate limits
- ✅ Performance maximale

**Inconvénients** :
- ❌ Probablement non disponible (SaaS)
- ❌ Risques de sécurité
- ❌ Non supporté officiellement

**Évaluation** :
- ❌ Non applicable (HotelRunner est SaaS)
- Mentionné pour exhaustivité

---

## 🔍 Questions Critiques à Répondre

### 1. Besoins Réels
- [ ] Quelles données exactes avons-nous besoin ?
  - Réservations (historique ? temps réel ?)
  - Disponibilités chambres
  - Tarifs
  - Informations clients
- [ ] À quelle fréquence avons-nous besoin de ces données ?
  - Temps réel (webhooks nécessaires)
  - Horaire (polling API)
  - Quotidien (export manuel OK)
- [ ] Opérations en écriture nécessaires ?
  - Modifier disponibilités
  - Changer tarifs
  - Ou seulement lecture ?

### 2. Contraintes Techniques
- [ ] Avons-nous un domaine HTTPS pour webhooks ?
  - Si oui : API viable
  - Si non : Browser automation ou polling uniquement
- [ ] 250 requêtes/jour suffisant pour notre usage ?
  - Calculer le besoin réel
  - Si insuffisant : Browser automation meilleure option
- [ ] Besoin de notifications temps réel ?
  - Si oui : Webhooks obligatoires (Option 1)
  - Si non : Polling ou browser automation OK

### 3. Maintenance et Fiabilité
- [ ] Qui maintient cette intégration ?
- [ ] Budget disponible pour outils tiers (Zapier, etc.) ?
- [ ] Tolérance aux pannes ?
- [ ] Backup plan si méthode principale échoue ?

### 4. Alternatives Externes
- [ ] Rechercher intégrations HotelRunner existantes
- [ ] Vérifier si Zapier/Make.com ont connecteur HotelRunner
- [ ] Explorer autres Channel Managers possibles

## 📋 Prochaines Étapes Recommandées

### Phase 1 : Analyse des Besoins (À FAIRE D'ABORD)
1. [ ] Documenter cas d'usage précis Villa Thaifa
2. [ ] Lister données nécessaires exactes
3. [ ] Définir fréquence requise
4. [ ] Évaluer si lecture seule ou lecture/écriture

### Phase 2 : Recherche Complémentaire
1. [ ] Rechercher intégrations HotelRunner tierces (Zapier, Make, etc.)
2. [ ] Vérifier disponibilité domaine HTTPS Villa Thaifa
3. [ ] Calculer volume de requêtes estimé
4. [ ] Investiguer coûts outils tiers si applicable

### Phase 3 : Décision Éclairée
1. [ ] Comparer options avec critères objectifs
2. [ ] Matrice de décision (coût, complexité, maintenance, fiabilité)
3. [ ] Valider choix avec Omar
4. [ ] Documenter rationale de la décision

### Phase 4 : Implémentation (SEULEMENT APRÈS Phase 1-3)
1. [ ] Implémenter solution choisie
2. [ ] Tester en environnement contrôlé
3. [ ] Documenter setup
4. [ ] Créer backup plan

## 🎯 Décision en Attente

**Status actuel** : ⏸️ **PAUSE - Analyse requise**

**Raison** : Approche initiale trop précipitée. Besoin d'analyse professionnelle complète avant engagement.

**Prochaine action** : Compléter Phase 1 (Analyse des Besoins) avant toute implémentation.

## 📝 Notes de Session 2026-01-24

### Ce qu'on a appris
- ✅ Location section API : Custom Apps
- ✅ Types d'intégration : HR-v1 (REST) vs OTA-2015b (XML)
- ✅ Configuration requise : Nom, email, callback URL, permissions
- ✅ Callback URL doit être HTTPS valide (localhost refusé)
- ✅ Rate limits : 250/jour, 5/min

### Ce qu'on a créé
- ✅ Dossier `/sources/hotelrunner-api/` avec structure complète
- ✅ Documentation guide.md, README.md, SETUP.md
- ✅ Mise à jour AGENTS.md, CLAUDE.md, INDEX.md

### Ce qu'on N'A PAS fait (volontairement)
- ❌ Créer l'app HotelRunner (en attente décision)
- ❌ Obtenir credentials TOKEN/HR_ID
- ❌ Tester l'API

### Rationale
**Approche professionnelle** : Analyser toutes les options avant de s'engager dans une solution qui pourrait ne pas être optimale pour notre cas d'usage.

---

**Document vivant** - À mettre à jour au fur et à mesure de l'analyse.
