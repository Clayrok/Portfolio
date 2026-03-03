# Hytrade

<a href="https://github.com/clayrok/Hytrade" target="_blank" class="tag repo-link">
    <img src="/images/skills/git.webp" alt="" class="repo-icon">
    <span>Voir le dépôt</span>
    <img src="/images/external-link.svg" alt="" class="external-icon">
</a>

## Aperçu du projet
Hytrade est une modification de trading spécialisée pour le jeu Hytale, développée immédiatement après la sortie du jeu. Créé dans un environnement sans aucune documentation officielle, le projet a nécessité une analyse technique approfondie de l'architecture du jeu pour fournir un système d'échange sécurisé et médiatisé par le serveur.

## Mon rôle : Développeur principal et ingénieur en reverse engineering
J'ai dirigé le développement technique et la conception du mod, en me concentrant sur la sécurité et la compatibilité entre les mods :
* **Reverse Engineering :** Décompilation des fichiers serveur du jeu pour cartographier la logique interne.
* **Logique de transaction sécurisée :** Conception d'un système de "Middleman" pour prévenir la fraude.
* **Intégration de l'écosystème :** Développement de couches de compatibilité pour les mods d'économie tiers.
* **Conception graphique :** Création de toutes les icônes UI personnalisées et des actifs visuels dans Figma.

## Défis et solutions

### 1. Zéro documentation et base de code inconnue
**Problème :** Lancer un mod pour un tout nouveau jeu signifiait qu'il n'y avait pas de tutoriels, d'API ou de documentation officielle disponible pour comprendre comment le jeu gérait les entités ou l'UI.
**Solution :** J'ai effectué une décompilation complète du fichier `HytaleServer.jar`. En analysant le code source Java brut, j'ai pu cartographier l'Entity Component System (ECS) du jeu et identifier les hooks spécifiques nécessaires pour injecter mes interfaces de trading personnalisées et ma logique d'interaction.

### 2. Compatibilité entre les mods et chevauchement d'ID
**Problème :** À mesure que la scène du modding grandissait, de nombreux joueurs signalaient des plantages ou des bugs causés par des conflits entre Hytrade et d'autres modifications créées par la communauté.
**Solution :** J'ai mené des tests d'intégration intensifs et mis en place une convention de nommage stricte utilisant des identifiants uniques (UUID) pour tous les actifs et objets internes. Cela a garanti que les données de Hytrade ne chevaucheraient jamais ou n'écraseraient jamais les données d'autres mods installés.

### 3. Mise à l'échelle du support économique pour les mods tiers
**Problème :** Les utilisateurs demandaient constamment le support de divers mods de monnaie en jeu. Ajouter manuellement le support pour chaque nouveau mod d'économie devenait une charge de maintenance insoutenable.
**Solution :** Au lieu de construire des ponts individuels, j'ai intégré un mod "Economy API" tiers populaire qui agit comme un pont universel vers des dizaines d'autres systèmes de monnaie. En choisissant un pont maintenu par un développeur réputé avec une longue histoire dans la communauté, j'ai assuré une compatibilité à long terme pour mes utilisateurs tout en réduisant considérablement ma propre charge de travail de mise à jour manuelle.

## Technologies utilisées
<div class="techs">
    <div class="tag"><img src="/images/skills/java.webp" alt=""><span>Java</span></div>
    <div class="tag"><img src="/images/skills/figma.webp" alt=""><span>Figma</span></div>
    <div class="tag"><img src="/images/skills/git.webp" alt=""><span>Git</span></div>
</div>

## Fonctionnalités clés
* **Interface de trade sécurisée :** Une GUI personnalisée pour des échanges sûrs d'objet contre objet et d'objet contre monnaie.
* **Support des mods d'économie :** Intégration native avec les systèmes de monnaie côté serveur populaires.
* **Développement sans documentation :** Construit entièrement par l'analyse indépendante du code source décompilé.

## Captures d'écran
![Interface de trading Hytrade](/works/personnal/hytrade/screenshots/1.jpg)
![Icônes personnalisées dans Figma](/works/personnal/hytrade/screenshots/2.jpg)
![Interaction en jeu](/works/personnal/hytrade/screenshots/3.jpg)
![Logs serveur](/works/personnal/hytrade/screenshots/4.jpg)
