# Social Panel

<a href="https://github.com/Clayrok/SocialMenu" target="_blank" class="tag repo-link">
    <img src="/images/skills/git.webp" alt="" class="repo-icon">
    <span>View Repository</span>
    <img src="/images/external-link.svg" alt="" class="external-icon">
</a>

## Project Overview
Social Panel is a highly customizable utility mod for Hytale, designed to streamline player-to-player interactions. Originally conceived to simplify the use of my *Hytrade* mod, it evolved into a versatile framework that allows server administrators to create dynamic, interactive radial or list menus that trigger specific server commands.

## My Role: Lead Developer & UI Designer
I designed and implemented the entire framework, focusing on administrative flexibility and user-friendly interaction:
* **Dynamic Menu Engine:** Developed a system allowing server admins to define custom buttons linked to any server-side command.
* **Smart Command Parsing:** Engineered a system that detects command arguments and generates input modals.
* **Server-Side Simulation:** Implemented logic that securely simulates player-sent commands.
* **Visual Identity:** Designed all interface components and iconography in Figma.

## Challenges & Solutions

### 1. Engine Limitations on Input Interception
**Problem:** The Hytale engine does not allow developers to intercept raw key presses directly. Modders can only listen for specific predefined game actions (interaction, attack, movement, etc.), which made triggering a custom UI panel difficult.
**Solution:** I bypassed this by intercepting the packets sent from the client to the server. I specifically targeted the "Pick Block" action (default) and the "Interact" action (optional via config). By verifying if the targeted entity was a player at the moment of the packet transmission, I could reliably trigger the Social Panel without needing a dedicated hotkey.

### 2. UI Layout Scalability
**Problem:** Allowing administrators to add an unlimited number of custom buttons risked creating a menu that would exceed the screen height, leading to a broken or unusable interface.
**Solution:** I developed an automated pagination system. The UI calculates the maximum available vertical space and, if the number of configured buttons exceeds that limit, it automatically generates multiple pages. This ensures the panel remains ergonomic and visually consistent regardless of the number of active commands.

### 3. Handling Dynamic Command Arguments
**Problem:** Many server commands require manual input (e.g., a `/msg` command needs a text body). Simply clicking a button isn't enough if the command syntax requires variable data.
**Solution:** I implemented a custom configuration parser that identifies "template tags" within the command strings (e.g., `{Message_Content:string}`). When the mod detects these tags, it dynamically generates a modal popup. This forces the UI to prompt the player for the required information, which is then injected into the final command before it is sent to the server.

## Technologies Used
<div class="techs">
    <div class="tag"><img src="/images/skills/java.webp" alt=""><span>Java</span></div>
    <div class="tag"><img src="/images/skills/figma.webp" alt=""><span>Figma</span></div>
    <div class="tag"><img src="/images/skills/git.webp" alt=""><span>Git</span></div>
</div>

## Key Features
* **Automated Modal Generation:** Dynamic UI creation based on command requirements.
* **Admin-Configurable UI:** Full control over button count, icons, and linked actions.
* **CurseForge Featured:** Recognized by industry-leading mod platforms for quality and utility.

## Screenshots
![Social Panel Interaction Menu](/works/personnal/social_panel/screenshots/1.jpg)
![Dynamic Argument Modal](/works/personnal/social_panel/screenshots/2.jpg)


