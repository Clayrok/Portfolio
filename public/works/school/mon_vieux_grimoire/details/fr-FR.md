# Mon Vieux Grimoire

<a href="https://github.com/clayrok/MonVieuxGrimoire" target="_blank" class="tag repo-link">
    <img src="/images/skills/git.webp" alt="" class="repo-icon">
    <span>Voir le dépôt</span>
    <img src="/images/external-link.svg" alt="" class="external-icon">
</a>

## Aperçu du projet
Développé dans le cadre de ma certification OpenClassrooms "Développeur Web", Mon Vieux Grimoire est une solution backend robuste pour une plateforme sociale de notation de livres. Chargé de construire un serveur sécurisé à partir de zéro pour supporter un frontend préexistant, j'ai implémenté une API REST complète qui gère tout, de l'authentification des utilisateurs à la logique complexe de notation des livres.

## Mon rôle : Développeur Backend
J'ai architecturé la logique côté serveur et l'intégration de la base de données, en me concentrant sur la sécurité et l'intégrité des données :
* **Développement d'API RESTful :** Construction d'un système CRUD complet pour gérer les entrées de livres, les notes et les profils d'utilisateurs.
* **Authentification et sécurité :** Implémentation d'une authentification utilisateur sécurisée à l'aide de JSON Web Tokens (JWT) et du hachage de mots de passe.
* **Ingénierie de middleware :** Développement de middleware personnalisés pour gérer les téléchargements de fichiers, l'optimisation des images et les niveaux d'autorisation des utilisateurs.

## Défis et solutions

### 1. Évolutivité architecturale et complexité du code
**Problème :** À mesure que l'API grandissait pour inclure l'authentification, le traitement d'images et la validation de données, une approche purement fonctionnelle devenait difficile à gérer et sujette au "code spaghetti".
**Solution :** J'ai fait évoluer l'architecture vers un modèle basé sur les middleware. En interceptant les requêtes et en les traitant une étape discrète à la fois (Authentification -> Validation -> Traitement -> Stockage), j'ai créé un pipeline modulaire qui a rendu la base de code plus facile à déboguer et à étendre.

### 2. Sécurité critique et intégrité des données
**Problème :** L'application devait gérer des données utilisateur sensibles (mots de passe) et être résiliente face aux vulnérabilités web courantes comme les tentatives de connexion automatisées et les requêtes de base de données malveillantes.
**Solution :** J'ai mis en place une stratégie de sécurité multicouche. J'ai utilisé `bcrypt` pour le cryptage de haut niveau des mots de passe et protégé la base de données contre les injections NoSQL. Pour prévenir les attaques par force brute, j'ai intégré des bibliothèques de limitation de débit et sécurisé toutes les routes protégées avec des JSON Web Tokens (JWT) pour garantir que seuls les utilisateurs authentifiés puissent interagir avec des ressources spécifiques.

## Technologies utilisées
<div class="techs">
    <div class="tag"><img src="/images/skills/node-js.webp" alt=""><span>Node.js</span></div>
    <div class="tag"><img src="/images/skills/express.webp" alt=""><span>Express</span></div>
    <div class="tag"><img src="/images/skills/jwt.webp" alt=""><span>JWT</span></div>
    <div class="tag"><img src="/images/skills/mongoose.webp" alt=""><span>Mongoose</span></div>
    <div class="tag"><img src="/images/skills/sql.webp" alt=""><span>PostgreSQL</span></div>
    <div class="tag"><img src="/images/skills/git.webp" alt=""><span>Git</span></div>
</div>

## Fonctionnalités clés
* **Système d'authentification sécurisé :** Stockage crypté des mots de passe et gestion de session basée sur des jetons.
* **Système de notation dynamique :** Logique pour calculer et mettre à jour les notes moyennes des livres en temps réel.
* **Traitement d'image automatisé :** Middleware pour redimensionner et optimiser les couvertures de livres téléchargées pour de meilleures performances.
* **Renforcement de la sécurité :** Implémentation d'en-têtes de sécurité et de limitation de débit pour garantir la stabilité de l'API.

## Captures d'écran
![Page d'accueil Mon Vieux Grimoire](/works/school/mon_vieux_grimoire/screenshots/1.jpg)
![Détails du livre](/works/school/mon_vieux_grimoire/screenshots/2.jpg)
![Formulaire d'ajout de livre](/works/school/mon_vieux_grimoire/screenshots/3.jpg)
