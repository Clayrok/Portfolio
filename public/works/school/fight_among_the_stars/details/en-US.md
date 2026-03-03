# Fight Among the Stars

## Project Overview
Fight Among the Stars is a mobile Real-Time Strategy (RTS) game developed over a rapid 2-month production cycle. Created by a core team of two programmers and two artists, the game challenges players to manage supply lines and energy networks while engaging in tactical planetary conquest.

## My Role: Gameplay & Systems Programmer
As one of the two developers on the project, I was responsible for the core mechanics and technical polish, including:
* **Core Gameplay Systems:** Programmed the unit generation, movement, and base capture logic.
* **Energy Network Logic:** Implemented the "Power Grid" system.
* **AI Integration:** Developed the opponent's behavior.
* **Audio Implementation:** Managed the integration of sound effects and ambient music.
* **Mobile Optimization:** Optimized scripts and assets for high performance.

## Challenges & Solutions

### 1. Mobile Performance with Large Unit Counts
**Problem:** Rendering and updating dozens of active units simultaneously caused significant frame drops on mid-range mobile devices, which is a common bottleneck for mobile RTS games.
**Solution:** I implemented a custom Level of Detail (LOD) system for both the 3D models and the animation logic. Additionally, I optimized the gameplay logic by using a slower "tick" rate for non-essential background calculations (like economy and AI decision-making), ensuring the main render loop remained smooth and responsive.

### 2. Complex Electricity Propagation Logic
**Problem:** The game required a system where bases would lose power if disconnected from the main source. Calculating these connections in real-time for every node was potentially expensive and prone to logic errors.
**Solution:** I modeled the energy network as a Tree data structure, where the main base acts as the root. I implemented a Tree Traversal algorithm to manage the state of the network. When a base is captured or a path is destroyed, the system sends a "power-down" signal through the affected branch, instantly updating all child nodes. This ensured that the power grid logic was both logically sound and highly performant.



## Technologies Used
<div class="techs">
    <div class="tag"><img src="/images/skills/unity-3d.webp" alt=""><span>Unity 3D</span></div>
    <div class="tag"><img src="/images/skills/c-sharp.webp" alt=""><span>C#</span></div>
</div>

## Key Features
* **Dynamic Supply Lines:** A unique electricity-based mechanic where disconnecting a base from the network halts its military production.
* **Unit Swarming:** Tactical deployment system allowing players to choose the volume of units sent for targeted strikes.
* **Strategic AI:** An automated opponent that prioritizes breaking the player's energy chain.

## Screenshots
![Gameplay Overview](/works/school/fight_among_the_stars/screenshots/1.gif)
![Energy Network Visuals](/works/school/fight_among_the_stars/screenshots/2.jpg)


