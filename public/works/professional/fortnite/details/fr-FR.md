# Fortnite

## Aperçu du projet
J'ai contribué au développement et à la maintenance de Fortnite, travaillant au sein de l'écosystème Unreal Engine pour améliorer l'expérience des joueurs sur plusieurs plateformes. Mon travail s'est concentré sur le développement de l'interface utilisateur, l'implémentation de fonctionnalités et l'optimisation du système.

## Mon rôle : Développeur UI et Gameplay
Travaillant à la fois avec C++ et Blueprints, j'étais responsable de la livraison d'interfaces utilisateur et de fonctionnalités de gameplay de haute qualité, incluant :
* **Développement UI :** Création et animation d'interfaces complexes à l'aide de l'éditeur UMG (Unreal Motion Graphics) pour l'interface en jeu et la boutique d'objets.
* **Systèmes mobiles :** Développement de fonctionnalités spécifiques au mobile, incluant des barres de progression de téléchargement de données et des notifications système.
* **Expansion de fonctionnalités :** Intégration de nouvelles logiques dans les systèmes existants tels que les bannières d'actualités, les mécaniques de défonçage de porte et les visualiseurs sonores.
* **Collaboration :** Conception de structures de nœuds Blueprint flexibles pour permettre aux designers et aux collègues développeurs de personnaliser facilement les comportements et les animations de l'interface utilisateur.
* **Correction de bugs :** Identification et résolution de bugs critiques de gameplay et d'interface pour garantir une expérience utilisateur soignée.

## Défis et solutions

### 1. Développement parallèle et dépendances backend
**Problème :** J'avais fréquemment besoin de construire des systèmes d'interface utilisateur complexes avant que la fonctionnalité backend correspondante ne soit entièrement développée, ce qui entraînait un flux de travail "bloqué".
**Solution :** J'ai initié des synchronisations régulières entre les départements avec l'équipe backend pour définir et convenir d'une liste de "hooks backend" et de structures d'API à l'avance. Cela m'a permis de construire la logique frontend en utilisant ces stubs, garantissant une intégration transparente une fois le code backend poussé.

### 2. Problèmes d'héritage hérités dans des milliers d'actifs
**Problème :** Le projet contenait des milliers de Blueprints avec des affectations de classes parentes obsolètes ou incorrectes, rendant les mises à jour globales ou les optimisations presque impossibles à gérer manuellement.
**Solution :** J'ai développé un script d'automatisation qui permettait le changement de classe parente par lot des actifs sélectionnés. Cela a considérablement réduit le travail manuel et éliminé l'erreur humaine associée à la mise à jour de la hiérarchie d'héritage sur une base de code aussi vaste.

### 3. Synchronisation avec une main-d'œuvre mondiale massive
**Problème :** Travailler dans un environnement de studio avec des milliers d'employés répartis sur différents fuseaux horaires rendait difficile le maintien d'une direction unifiée et l'évitement du travail redondant.
**Solution :** J'ai aidé à établir et à maintenir des tableaux numériques partagés et une documentation de synthèse pour nos sous-groupes. En participant à plusieurs réunions de "synchronisation" quotidiennes, j'ai veillé à ce que notre équipe reste alignée sur la feuille de route mondiale et que toutes les dépendances techniques soient synchronisées en temps réel.

## Technologies utilisées
<div class="techs">
    <div class="tag"><img src="/images/skills/unreal-engine-4-5.webp" alt=""><span>Unreal Engine 4 & 5</span></div>
    <div class="tag"><img src="/images/skills/c-plus-plus.webp" alt=""><span>C++</span></div>
    <div class="tag"><img src="/images/skills/blueprints.webp" alt=""><span>Blueprints</span></div>
    <div class="tag"><img src="/images/skills/p4v.webp" alt=""><span>P4V</span></div>
</div>

## Fonctionnalités clés
* **Animation et mise en page UMG :** Composants d'interface utilisateur haute fidélité avec animations intégrées.
* **Optimisation multiplateforme :** Fonctionnalités adaptées pour la performance et l'utilisabilité mobile.
* **Intégration système :** Ajout transparent de fonctionnalités aux mécaniques de base du jeu établies.

## Captures d'écran
![Élément UI Fortnite](/works/professional/fortnite/screenshots/1.jpg)
![Systèmes en jeu](/works/professional/fortnite/screenshots/2.jpg)
![Fonctionnalités mobiles](/works/professional/fortnite/screenshots/3.jpg)
![Logique Blueprint](/works/professional/fortnite/screenshots/4.jpg)
