# FoirnetBO

## Project Overview
FoirnetBO is a comprehensive internal business operations platform designed for franchised stores. The application streamlines retail management by allowing franchisees to order inventory, plan large-scale advertising campaigns, and manage customer loyalty programs effectively.

## My Role: Lead Full-Stack Developer
As the primary developer on this project, I was responsible for the end-to-end lifecycle of the application, focusing on:
* **Modernization:** Overhauling the legacy UI/UX for a more contemporary and efficient user experience.
* **Optimization:** Improving application performance and database query speeds.
* **Feature Development:** Implementing new modules across the entire stack, from frontend interfaces to backend logic and database architecture.
* **Database Management:** Designing and maintaining complex SQL structures, including Stored Procedures, Functions, and Views.

## Challenges & Solutions

### 1. UI Density and Limited Screen Real Estate
**Problem:** As the application grew, the interface became cluttered, making it difficult to add new features without overwhelming the user.
**Solution:** I implemented conditional rendering logic to show or hide UI elements based on the current task context. I prioritized "always-on" essential data while introducing user-specific customization options, allowing franchisees to tailor the dashboard to their specific operational needs.

### 2. Isolated, Client-Specific Blocking Bugs
**Problem:** We encountered critical bugs that only triggered for a single client environment, making them impossible to replicate in standard dev/staging environments.
**Solution:** I developed temporary diagnostic scripts and inserted strategic logging points across the application layers and the SQL database. By simulating specific client data states through "dummy" commands and analyzing the resulting logs, I successfully isolated the edge cases and resolved the issues.

### 3. Inconsistent Visual Identity
**Problem:** Years of incremental updates had led to a fragmented design language, causing user confusion and a "patchwork" feel.
**Solution:** I performed a full audit of the existing interface and established a unified design system. After correcting inconsistencies across the entire platform, I authored detailed documentation to ensure all future developments adhere to the new brand and ergonomic standards.

## Technologies Used
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

## Key Features
* **Inventory & Stock Ordering:** Automated replenishment system for franchisees.
* **Marketing Planner:** Tools for scheduling and executing promotional operations.
* **Loyalty Management:** Comprehensive CRM features to track and reward customer engagement.
* **Advanced Data Processing:** High-performance data retrieval using optimized SQL Server objects.

## Screenshots
![FoirnetBO Dashboard](/works/professional/foirnetbo/screenshots/1.jpg)


