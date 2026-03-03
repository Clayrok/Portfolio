# Gem

## Aperçu du projet
Gem est une application expérimentale de prise de notes assistée par IA, développée en une seule semaine. Le projet a servi de plateforme de recherche pour explorer les flux de travail "Vibecoding" et optimiser la collaboration humain-IA. Au-delà de la prise de notes traditionnelle, Gem intègre une IA locale pour la recherche contextuelle et les résumés automatisés.

## Mon rôle : Développeur principal et architecte de workflow
J'ai agi à la fois comme designer UI et orchestrateur d'un pipeline de développement piloté par l'IA. Mon travail a consisté à :
* **Stratégie UI/UX :** Conception manuelle des maquettes initiales pour servir de "source de vérité" visuelle.
* **Directives de Vibecoding :** Développement d'un ensemble rigoureux de directives pour optimiser le contexte de l'IA.
* **Automatisation des processus :** Mise en place d'un système de suivi des modifications en temps réel et d'une liste de tâches dynamique.
* **Implémentation Full-Stack :** Construction de l'application avec Vue.js et Prisma ORM, en intégrant des modèles d'IA locaux via OpenRouter.

## Défis et solutions

### 1. Maîtriser un ensemble d'outils d'IA en évolution rapide
**Problème :** La grande variété d'outils de codage par IA rendait difficile l'identification des plus efficaces pour des tâches full-stack spécifiques.
**Solution :** J'ai mené des analyses comparatives approfondies dans divers contextes de développement (frontend vs backend vs schéma DB) pour déterminer l'outil optimal pour chaque étape du projet.

### 2. Incohérences de logique et de code entre les agents d'IA
**Problème :** Lors du passage d'un agent ou d'une session d'IA à l'autre, le code dérivait souvent en style ou en logique, menant à des structures "hallucinées" ou des fonctions redondantes.
**Solution :** J'ai mis en place un système de suivi strict et des directives globales. Chaque nouvel agent ajouté au projet devait lire un fichier d'état des lieux standardisé, garantissant qu'il comprenait l'architecture existante et ses objectifs actuels avant d'écrire une seule ligne de code.

### 3. Fragmentation visuelle et UX
**Problème :** Différents agents d'IA généraient souvent des éléments UI incohérents, brisant l'harmonie visuelle de l'application.
**Solution :** J'ai créé une page HTML "UI Showcase" au début du projet présentant chaque type d'entrée et style de composant. Une fois perfectionnée, j'ai utilisé cette vitrine pour générer un "Guide de style visuel". En forçant chaque agent à se référer à ces directives, j'ai maintenu un design UX/UI unifié dans toute l'application.

### 4. Surcharge de la fenêtre de contexte
**Problème :** À mesure que la base de code grandissait, fournir des fichiers entiers à l'IA consommait trop de contexte, ralentissant les réponses et diminuant la précision.
**Solution :** J'ai développé des fichiers "Context Bridge" — des résumés légers de la hiérarchie des fichiers et un historique chronologique des dernières modifications. Cela permettait aux agents de comprendre l'état du projet en ne lisant que quelques centaines de tokens au lieu de l'intégralité du dépôt.

### 5. Coût élevé en ressources des fonctionnalités d'IA locales
**Problème :** L'implémentation de fonctionnalités d'IA locales comme la recherche sémantique et la synthèse peut être gourmande en ressources, menant potentiellement à des goulots d'étranglement de performance ou des coûts d'API élevés.
**Solution :** J'ai mis en place une logique de "Request Cooldown". En limitant la fréquence des appels d'IA locaux, j'ai garanti que l'application restait réactive tout en évitant une consommation inutile de ressources.

## Technologies utilisées
<div class="techs">
    <div class="tag"><img src="/images/skills/vue-js.webp" alt=""><span>Vue.js</span></div>
    <div class="tag"><img src="/images/skills/sql.webp" alt=""><span>PostgreSQL</span></div>
    <div class="tag"><img src="/images/skills/prisma-orm.webp" alt=""><span>Prisma ORM</span></div>
    <div class="tag"><img src="/images/skills/kilocode.webp" alt=""><span>Kilocode</span></div>
    <div class="tag"><img src="/images/skills/openrouter.webp" alt=""><span>OpenRouter</span></div>
</div>

## Fonctionnalités clés
* **Recherche contextuelle :** Recherche alimentée par l'IA qui comprend l'intention de l'utilisateur.
* **Synthèse automatisée :** Intégration d'IA locale pour condenser les notes longues.
* **Workflow d'IA optimisé :** Un framework personnalisé pour le prompting d'IA et la gestion modulaire du contexte.

## Captures d'écran
![Interface Gem](/works/personnal/gem/screenshots/1.jpg)
![Prise de notes](/works/personnal/gem/screenshots/2.jpg)
![Intégration IA](/works/personnal/gem/screenshots/3.jpg)
