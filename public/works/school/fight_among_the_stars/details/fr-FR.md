# Fight Among the Stars

## Aperçu du projet
Fight Among the Stars est un jeu de stratégie en temps réel (RTS) mobile développé sur un cycle de production rapide de 2 mois. Créé par une équipe de base de deux programmeurs et deux artistes, le jeu met les joueurs au défi de gérer des lignes de ravitaillement et des réseaux énergétiques tout en s'engageant dans une conquête planétaire tactique.

## Mon rôle : Programmeur Gameplay et Systèmes
En tant que l'un des deux développeurs sur le projet, j'étais responsable des mécaniques de base et du polissage technique, incluant :
* **Systèmes de gameplay de base :** Programmation de la génération d'unités, du mouvement et de la logique de capture de base.
* **Logique de réseau énergétique :** Implémentation du système de "Power Grid".
* **Intégration de l'IA :** Développement du comportement de l'adversaire.
* **Implémentation audio :** Gestion de l'intégration des effets sonores et de la musique d'ambiance.
* **Optimisation mobile :** Optimisation des scripts et des actifs pour une haute performance.

## Défis et solutions

### 1. Performance mobile avec un grand nombre d'unités
**Problème :** Le rendu et la mise à jour de dizaines d'unités actives simultanément provoquaient des chutes de framerate significatives sur les appareils mobiles de milieu de gamme, ce qui est un goulot d'étranglement courant pour les jeux RTS mobiles.
**Solution :** J'ai implémenté un système de niveau de détail (LOD) personnalisé pour les modèles 3D et la logique d'animation. De plus, j'ai optimisé la logique de gameplay en utilisant un taux de "tick" plus lent pour les calculs d'arrière-plan non essentiels (comme l'économie et la prise de décision de l'IA), garantissant que la boucle de rendu principale reste fluide et réactive.

### 2. Logique complexe de propagation de l'électricité
**Problème :** Le jeu nécessitait un système où les bases perdraient de la puissance si elles étaient déconnectées de la source principale. Calculer ces connexions en temps réel pour chaque nœud était potentiellement coûteux et sujet à des erreurs logiques.
**Solution :** J'ai modélisé le réseau énergétique comme une structure de données en Arbre, où la base principale agit comme la racine. J'ai implémenté un algorithme de parcours d'arbre pour gérer l'état du réseau. Lorsqu'une base est capturée ou qu'un chemin est détruit, le système envoie un signal de "mise hors tension" à travers la branche affectée, mettant instantanément à jour tous les nœuds enfants. Cela a garanti que la logique de la grille énergétique était à la fois logiquement saine et hautement performante.

## Technologies utilisées
<div class="techs">
    <div class="tag"><img src="/images/skills/unity-3d.webp" alt=""><span>Unity 3D</span></div>
    <div class="tag"><img src="/images/skills/c-sharp.webp" alt=""><span>C#</span></div>
</div>

## Fonctionnalités clés
* **Lignes de ravitaillement dynamiques :** Une mécanique unique basée sur l'électricité où la déconnexion d'une base du réseau interrompt sa production militaire.
* **Essaimage d'unités :** Système de déploiement tactique permettant aux joueurs de choisir le volume d'unités envoyées pour des frappes ciblées.
* **IA stratégique :** Un adversaire automatisé qui priorise la rupture de la chaîne énergétique du joueur.

## Captures d'écran
![Aperçu du gameplay](/works/school/fight_among_the_stars/screenshots/1.gif)
![Visuels du réseau énergétique](/works/school/fight_among_the_stars/screenshots/2.jpg)
