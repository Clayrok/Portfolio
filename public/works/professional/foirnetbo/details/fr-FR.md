# FoirnetBO

## Aperçu du projet
FoirnetBO est une plateforme complète d'opérations commerciales internes conçue pour les magasins franchisés. L'application simplifie la gestion de la vente au détail en permettant aux franchisés de commander des stocks, de planifier des campagnes publicitaires à grande échelle et de gérer efficacement les programmes de fidélité des clients.

## Mon rôle : Développeur Full-Stack principal
En tant que développeur principal sur ce projet, j'étais responsable du cycle de vie de bout en bout de l'application, en me concentrant sur :
* **Modernisation :** Refonte de l'UI/UX héritée pour une expérience utilisateur plus contemporaine et efficace.
* **Optimisation :** Amélioration des performances de l'application et de la vitesse des requêtes de base de données.
* **Développement de fonctionnalités :** Implémentation de nouveaux modules sur l'ensemble de la stack, des interfaces frontend à la logique backend et à l'architecture de la base de données.
* **Gestion de base de données :** Conception et maintenance de structures SQL complexes, incluant des procédures stockées, des fonctions et des vues.

## Défis et solutions

### 1. Densité de l'interface et espace écran limité
**Problème :** À mesure que l'application grandissait, l'interface devenait encombrée, rendant difficile l'ajout de nouvelles fonctionnalités sans submerger l'utilisateur.
**Solution :** J'ai implémenté une logique de rendu conditionnel pour afficher ou masquer les éléments de l'interface utilisateur en fonction du contexte de la tâche actuelle. J'ai priorisé les données essentielles "toujours actives" tout en introduisant des options de personnalisation spécifiques à l'utilisateur, permettant aux franchisés de tailleur le tableau de bord à leurs besoins opérationnels spécifiques.

### 2. Bugs bloquants isolés et spécifiques au client
**Problème :** Nous avons rencontré des bugs critiques qui ne se déclenchaient que pour un seul environnement client, ce qui les rendait impossibles à reproduire dans des environnements de développement ou de staging standard.
**Solution :** J'ai développé des scripts de diagnostic temporaires et inséré des points de journalisation stratégiques à travers les couches de l'application et la base de données SQL. En simulant des états de données clients spécifiques via des commandes "fictives" et en analysant les journaux résultants, j'ai réussi à isoler les cas limites et à résoudre les problèmes.

### 3. Identité visuelle incohérente
**Problème :** Des années de mises à jour incrémentielles avaient conduit à un langage de conception fragmenté, provoquant la confusion des utilisateurs et une sensation de "patchwork".
**Solution :** J'ai effectué un audit complet de l'interface existante et établi un système de conception unifié. Après avoir corrigé les incohérences sur l'ensemble de la plateforme, j'ai rédigé une documentation détaillée pour garantir que tous les développements futurs respectent les nouvelles normes de marque et d'ergonomie.

## Technologies utilisées
<div class="techs">
    <div class="tag"><img src="/images/skills/html5.webp" alt=""><span>HTML5</span></div>
    <div class="tag"><img src="/images/skills/scss.webp" alt=""><span>CSS3</span></div>
    <div class="tag"><img src="/images/skills/javascript.webp" alt=""><span>JavaScript</span></div>
    <div class="tag"><img src="/images/skills/jquery.webp" alt=""><span>jQuery</span></div>
    <div class="tag"><img src="/images/skills/kendo-ui.webp" alt=""><span>Kendo UI</span></div>
    <div class="tag"><img src="/images/skills/c-sharp.webp" alt=""><span>C#</span></div>
    <div class="tag"><img src="/images/skills/asp-net.webp" alt=""><span>ASP.NET</span></div>
    <div class="tag"><img src="/images/skills/sql.webp" alt=""><span>SQL Server</span></div>
    <div class="tag"><img src="/images/skills/git.webp" alt=""><span>Git</span></div>
</div>

## Fonctionnalités clés
* **Inventaire et commande de stock :** Système de réapprovisionnement automatisé pour les franchisés.
* **Planificateur marketing :** Outils pour planifier et exécuter des opérations promotionnelles.
* **Gestion de la fidélité :** Fonctionnalités CRM complètes pour suivre et récompenser l'engagement des clients.
* **Traitement de données avancé :** Récupération de données haute performance à l'aide d'objets SQL Server optimisés.

## Captures d'écran
![Tableau de bord FoirnetBO](/works/professional/foirnetbo/screenshots/1.jpg)
