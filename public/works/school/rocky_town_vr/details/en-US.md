# RockyTown VR

## Project Overview
RockyTown VR is a collaborative virtual reality experience developed over a 2-month period. The project featured a large multidisciplinary team of 6 programmers and 8 artists/designers. The game was structured as a collection of mini-games, requiring a robust core framework to support diverse gameplay mechanics within a shared VR environment.

## My Role: Core Systems & R&D Programmer
I was responsible for the foundational technical architecture and a specialized gesture-recognition system:
* **Base Framework Development:** Engineered the essential VR framework (3Cs: Character, Controls, Camera) used by the entire team.
* **Gesture Recognition Algorithm:** Researched and developed a custom algorithm for a magic-based mini-game.
* **Technical Integration:** Facilitated the work of other mini-game groups by providing a stable and documented base code.
* **Optimization:** Fine-tuned the core controllers to maintain high, consistent framerates for VR comfort.

## Challenges & Solutions

### 1. Architecting the "3Cs" for a Large-Scale Team
**Problem:** I was tasked with creating the Character, Controls, and Camera (3C) foundation that the other five programmers would rely on. Delivering a system that was too complex too early would block their progress, while a system that was too simple wouldn't meet the project's final needs.
**Solution:** I adopted an iterative development method. I initially deployed a "barebones" functional framework so my colleagues could begin their work immediately. I then layered in complexity based on their specific needs. To further accelerate the team's workflow, I developed custom VR debug tools, including head-movement and controller simulation (allowing development without a headset) and instant teleportation commands.

### 2. Algorithmic Gesture Recognition in 3D Space
**Problem:** For the magic mini-game, the system needed to recognize hand-drawn symbols in 3D space and match them against a database of spells in real-time.
**Solution:** I engineered a vector-based pattern matching algorithm. The system tracked the player's hand movement and generated a new direction vector whenever the movement deviated by more than a specific degree threshold. These inputs were then normalized to a fixed number of vectors and compared against a dictionary of gesture "templates" using a similarity score. This allowed for reliable spell-casting even with the natural variance of human motion.



## Technologies Used
<div class="techs">
    <div class="tag"><img src="/images/skills/unreal-engine-4-5.webp" alt=""><span>Unreal Engine 4</span></div>
    <div class="tag"><img src="/images/skills/c-plus-plus.webp" alt=""><span>C++</span></div>
    <div class="tag"><img src="/images/skills/blueprints.webp" alt=""><span>Blueprints</span></div>
    <div class="tag"><img src="/images/skills/p4v.webp" alt=""><span>P4V</span></div>
</div>

## Key Features
* **Custom Gesture Engine:** An R&D-focused approach to translating spatial movement into gameplay actions.
* **VR Core Architecture:** A modular base system designed to support multiple independent mini-games.
* **Developer Tooling:** Built-in simulation tools to streamline VR development on standard workstations.

## Screenshots
![VR Gesture Recognition](/works/school/rocky_town_vr/screenshots/1.jpg)
![RockyTown Environment](/works/school/rocky_town_vr/screenshots/2.jpg)
![VR Interaction](/works/school/rocky_town_vr/screenshots/3.jpg)
![Debug Tools](/works/school/rocky_town_vr/screenshots/4.jpg)


