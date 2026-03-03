# Hytrade

<a href="https://github.com/clayrok/Hytrade" target="_blank" class="tag repo-link">
    <img src="/images/skills/git.webp" alt="" class="repo-icon">
    <span>View Repository</span>
    <img src="/images/external-link.svg" alt="" class="external-icon">
</a>

## Project Overview
Hytrade is a specialized trading modification for the game Hytale, developed immediately upon the game's release. Created in an environment with zero official documentation, the project required deep technical analysis of the game's architecture to provide a secure, server-mediated exchange system.

## My Role: Lead Developer & Reverse Engineer
I spearheaded the technical development and design of the mod, focusing on security and cross-mod compatibility:
* **Reverse Engineering:** Decompiled the game's server files to map out internal logic.
* **Secure Transaction Logic:** Engineered a "Middleman" system to prevent fraud.
* **Ecosystem Integration:** Developed compatibility layers for third-party economy mods.
* **Graphic Design:** Created all custom UI icons and visual assets within Figma.

## Challenges & Solutions

### 1. Zero Documentation and Unknown Codebase
**Problem:** Launching a mod for a brand-new game meant there were no tutorials, APIs, or official documentation available to understand how the game handled entities or UI.
**Solution:** I performed a full decompilation of the `HytaleServer.jar` file. By analyzing the raw Java source code, I was able to map out the game's Entity Component System (ECS) and identify the specific hooks needed to inject my custom trading interfaces and interaction logic.

### 2. Cross-Mod Compatibility and ID Overlapping
**Problem:** As the modding scene grew, many players reported crashes or glitches caused by Hytrade conflicting with other community-made modifications.
**Solution:** I conducted intensive integration testing and implemented a strict naming convention using unique identifiers (UUIDs) for all assets and internal objects. This ensured that Hytrade’s data would never overlap or "clobber" the data of other installed mods.

### 3. Scaling Economy Support for Third-Party Mods
**Problem:** Users constantly requested support for various in-game currency mods. Manually adding support for every new economy mod was becoming an unsustainable maintenance burden.
**Solution:** Instead of building individual bridges, I integrated a popular third-party "Economy API" mod that acts as a universal bridge to dozens of other currency systems. By choosing a bridge maintained by a reputable developer with a long history in the community, I ensured long-term compatibility for my users while significantly reducing my own manual update workload.

## Technologies Used
<div class="techs">
    <div class="tag"><img src="/images/skills/java.webp" alt=""><span>Java</span></div>
    <div class="tag"><img src="/images/skills/figma.webp" alt=""><span>Figma</span></div>
    <div class="tag"><img src="/images/skills/git.webp" alt=""><span>Git</span></div>
</div>

## Key Features
* **Secure Trade Interface:** A custom GUI for safe item-for-item and item-for-currency exchanges.
* **Economy Mod Support:** Native integration with popular server-side currency systems.
* **Zero-Doc Development:** Built entirely through independent analysis of decompiled source code.

## Screenshots
![Hytrade Trading UI](/works/personnal/hytrade/screenshots/1.jpg)
![Custom Icons in Figma](/works/personnal/hytrade/screenshots/2.jpg)
![In-game interaction](/works/personnal/hytrade/screenshots/3.jpg)
![Server logs](/works/personnal/hytrade/screenshots/4.jpg)


