# Social Panel

<a href="https://github.com/Clayrok/SocialMenu" target="_blank" class="tag repo-link">
    <img src="/images/skills/git.webp" alt="" class="repo-icon">
    <span>Voir le dépôt</span>
    <img src="/images/external-link.svg" alt="" class="external-icon">
</a>

## Aperçu du projet
Social Panel est un mod utilitaire hautement personnalisable pour Hytale, conçu pour simplifier les interactions entre joueurs. Initialement conçu pour faciliter l'utilisation de mon mod *Hytrade*, il a évolué vers un framework polyvalent qui permet aux administrateurs de serveurs de créer des menus radiaux ou en liste dynamiques et interactifs qui déclenchent des commandes serveur spécifiques.

## Mon rôle : Développeur principal et designer UI
J'ai conçu et implémenté l'ensemble du framework, en me concentrant sur la flexibilité administrative et l'interaction conviviale :
* **Moteur de menu dynamique :** Développement d'un système permettant aux administrateurs de serveurs de définir des boutons personnalisés liés à n'importe quelle commande côté serveur.
* **Analyse intelligente des commandes :** Conception d'un système qui détecte les arguments de commande et génère des modales de saisie.
* **Simulation côté serveur :** Implémentation d'une logique qui simule de manière sécurisée les commandes envoyées par les joueurs.
* **Identité visuelle :** Conception de tous les composants de l'interface et de l'iconographie dans Figma.

## Défis et solutions

### 1. Limitations du moteur sur l'interception des entrées
**Problème :** Le moteur Hytale ne permet pas aux développeurs d'intercepter directement les pressions de touches brutes. Les moddeurs ne peuvent écouter que des actions de jeu prédéfinies spécifiques (interaction, attaque, mouvement, etc.), ce qui rendait difficile le déclenchement d'un panneau UI personnalisé.
**Solution :** J'ai contourné cela en interceptant les paquets envoyés du client au serveur. J'ai spécifiquement ciblé l'action "Pick Block" (par défaut) et l'action "Interact" (optionnelle via config). En vérifiant si l'entité ciblée était un joueur au moment de la transmission du paquet, je pouvais déclencher de manière fiable le Social Panel sans avoir besoin d'un raccourci clavier dédié.

### 2. Évolutivité de la mise en page UI
**Problème :** Permettre aux administrateurs d'ajouter un nombre illimité de boutons personnalisés risquait de créer un menu qui dépasserait la hauteur de l'écran, conduisant à une interface cassée ou inutilisable.
**Solution :** J'ai développé un système de pagination automatisé. L'interface utilisateur calcule l'espace vertical maximum disponible et, si le nombre de boutons configurés dépasse cette limite, elle génère automatiquement plusieurs pages. Cela garantit que le panneau reste ergonomique et visuellement cohérent quel que soit le nombre de commandes actives.

### 3. Gestion des arguments de commande dynamiques
**Problème :** De nombreuses commandes serveur nécessitent une saisie manuelle (par exemple, une commande `/msg` nécessite un corps de texte). Cliquer simplement sur un bouton ne suffit pas si la syntaxe de la commande nécessite des données variables.
**Solution :** J'ai implémenté un analyseur de configuration personnalisé qui identifie les "balises de modèle" dans les chaînes de commande (par exemple, `{Message_Content:string}`). Lorsque le mod détecte ces balises, il génère dynamiquement une fenêtre modale. Cela force l'interface utilisateur à demander au joueur les informations requises, qui sont ensuite injectées dans la commande finale avant qu'elle ne soit envoyée au serveur.

## Technologies utilisées
<div class="techs">
    <div class="tag"><img src="/images/skills/java.webp" alt=""><span>Java</span></div>
    <div class="tag"><img src="/images/skills/figma.webp" alt=""><span>Figma</span></div>
    <div class="tag"><img src="/images/skills/git.webp" alt=""><span>Git</span></div>
</div>

## Fonctionnalités clés
* **Génération automatique de modales :** Création d'interface utilisateur dynamique basée sur les exigences de la commande.
* **UI configurable par l'administrateur :** Contrôle total sur le nombre de boutons, les icônes et les actions liées.
* **Mis en avant sur CurseForge :** Reconnu par les plateformes de mods leaders de l'industrie pour sa qualité et son utilité.

## Captures d'écran
![Menu d'interaction Social Panel](/works/personnal/social_panel/screenshots/1.jpg)
![Modale d'argument dynamique](/works/personnal/social_panel/screenshots/2.jpg)
