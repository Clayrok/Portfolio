# RockyTown VR

## Aperçu du projet
RockyTown VR est une expérience collaborative de réalité virtuelle développée sur une période de 2 mois. Le projet présentait une grande équipe multidisciplinaire de 6 programmeurs et 8 artistes/designers. Le jeu était structuré comme une collection de mini-jeux, nécessitant un framework de base robuste pour supporter diverses mécaniques de gameplay au sein d'un environnement VR partagé.

## Mon rôle : Programmeur Systèmes de base et R&D
J'étais responsable de l'architecture technique fondamentale et d'un système spécialisé de reconnaissance de gestes :
* **Développement du framework de base :** Conception du framework VR essentiel (3Cs : Character, Controls, Camera) utilisé par toute l'équipe.
* **Algorithme de reconnaissance de gestes :** Recherche et développement d'un algorithme personnalisé pour un mini-jeu basé sur la magie.
* **Intégration technique :** Facilitation du travail des autres groupes de mini-jeux en fournissant un code de base stable et documenté.
* **Optimisation :** Réglage fin des contrôleurs de base pour maintenir des taux de rafraîchissement élevés et constants pour le confort VR.

## Défis et solutions

### 1. Architecturer les "3Cs" pour une équipe à grande échelle
**Problème :** J'étais chargé de créer la fondation Character, Controls, et Camera (3C) sur laquelle les cinq autres programmeurs s'appuieraient. Livrer un système trop complexe trop tôt bloquerait leur progression, tandis qu'un système trop simple ne répondrait pas aux besoins finaux du projet.
**Solution :** J'ai adopté une méthode de développement itérative. J'ai initialement déployé un framework fonctionnel "minimal" pour que mes collègues puissent commencer leur travail immédiatement. J'ai ensuite ajouté de la complexité en fonction de leurs besoins spécifiques. Pour accélérer davantage le flux de travail de l'équipe, j'ai développé des outils de débogage VR personnalisés, incluant la simulation de mouvement de tête et de contrôleur (permettant le développement sans casque) et des commandes de téléportation instantanée.

### 2. Reconnaissance algorithmique de gestes dans l'espace 3D
**Problème :** Pour le mini-jeu de magie, le système devait reconnaître des symboles dessinés à la main dans l'espace 3D et les faire correspondre à une base de données de sorts en temps réel.
**Solution :** J'ai conçu un algorithme de correspondance de motifs basé sur les vecteurs. Le système suivait le mouvement de la main du joueur et générait un nouveau vecteur de direction chaque fois que le mouvement déviait de plus d'un seuil de degré spécifique. Ces entrées étaient ensuite normalisées à un nombre fixe de vecteurs et comparées à un dictionnaire de "modèles" de gestes à l'aide d'un score de similarité. Cela a permis un lancement de sorts fiable même avec la variance naturelle du mouvement humain.

## Technologies utilisées
<div class="techs">
    <div class="tag"><img src="/images/skills/unreal-engine-4-5.webp" alt=""><span>Unreal Engine 4</span></div>
    <div class="tag"><img src="/images/skills/c-plus-plus.webp" alt=""><span>C++</span></div>
    <div class="tag"><img src="/images/skills/blueprints.webp" alt=""><span>Blueprints</span></div>
    <div class="tag"><img src="/images/skills/p4v.webp" alt=""><span>P4V</span></div>
</div>

## Fonctionnalités clés
* **Moteur de gestes personnalisé :** Une approche axée sur la R&D pour traduire le mouvement spatial en actions de gameplay.
* **Architecture de base VR :** Un système de base modulaire conçu pour supporter plusieurs mini-jeux indépendants.
* **Outillage développeur :** Outils de simulation intégrés pour simplifier le développement VR sur des postes de travail standard.

## Captures d'écran
![Reconnaissance de gestes VR](/works/school/rocky_town_vr/screenshots/1.jpg)
![Environnement RockyTown](/works/school/rocky_town_vr/screenshots/2.jpg)
![Interaction VR](/works/school/rocky_town_vr/screenshots/3.jpg)
![Outils de débogage](/works/school/rocky_town_vr/screenshots/4.jpg)
