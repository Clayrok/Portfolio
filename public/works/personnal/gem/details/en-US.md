# Gem

## Project Overview
Gem is an experimental AI-assisted note-taking application developed in a single week. The project served as a research platform to explore "Vibecoding" workflows and optimize human-AI collaboration. Beyond traditional note-taking, Gem features local AI integration for contextual search and automated summaries.

## My Role: Lead Developer & Workflow Architect
I acted as both the UI designer and the orchestrator of an AI-driven development pipeline. My work involved:
* **UI/UX Strategy:** Manually designing initial mockups to serve as a visual "source of truth."
* **Vibecoding Guidelines:** Developed a rigorous set of guidelines to optimize AI context.
* **Process Automation:** Established a real-time modification tracking system and a dynamic TODO list.
* **Full-Stack Implementation:** Built the application using Vue.js and Prisma ORM, integrating local AI models via OpenRouter.

## Challenges & Solutions

### 1. Mastering a Rapidly Evolving AI Toolset
**Problem:** The sheer variety of AI coding tools made it difficult to identify which were most effective for specific full-stack tasks.
**Solution:** I conducted extensive benchmarking across various development contexts (frontend vs. backend vs. DB schema) to determine the optimal tool for each stage of the project.

### 2. Logic and Code Inconsistencies Between AI Agents
**Problem:** When switching between different AI agents or sessions, the code often drifted in style or logic, leading to "hallucinated" structures or redundant functions.
**Solution:** I implemented a strict tracking system and global guidelines. Every new agent added to the project was required to read a standardized state-of-play file, ensuring they understood the existing architecture and their current objectives before writing a single line of code.

### 3. Visual and UX Fragmentation
**Problem:** Different AI agents would often generate inconsistent UI elements, breaking the visual harmony of the application.
**Solution:** I created a "UI Showcase" HTML page at the start of the project featuring every input type and component style. Once perfected, I used this showcase to generate a "Visual Style Guide." By forcing every agent to reference these guidelines, I maintained a unified UX/UI design across the entire app.

### 4. Context Window Overload
**Problem:** As the codebase grew, feeding entire files to the AI consumed too much context, leading to slower responses and decreased accuracy.
**Solution:** I developed "Context Bridge" files—lightweight summaries of the file hierarchy and a chronological history of the latest modifications. This allowed agents to understand the project's state by reading only a few hundred tokens instead of the entire repository.

### 5. High Resource Cost of Local AI Features
**Problem:** Implementing local AI features like semantic search and summarization can be resource-intensive, potentially leading to performance bottlenecks or high API costs.
**Solution:** I implemented a "Request Cooldown" logic. By limiting the frequency of local AI calls, I ensured the application remained responsive while preventing unnecessary resource consumption.

## Technologies Used
<div class="techs">
    <div class="tag"><img src="/images/skills/vue-js.webp" alt=""><span>Vue.js</span></div>
    <div class="tag"><img src="/images/skills/sql.webp" alt=""><span>PostgreSQL</span></div>
    <div class="tag"><img src="/images/skills/prisma-orm.webp" alt=""><span>Prisma ORM</span></div>
    <div class="tag"><img src="/images/skills/kilocode.webp" alt=""><span>Kilocode</span></div>
    <div class="tag"><img src="/images/skills/openrouter.webp" alt=""><span>OpenRouter</span></div>
</div>

## Key Features
* **Contextual Search:** AI-powered search that understands user intent.
* **Automated Summarization:** Local AI integration to condense long notes.
* **Optimized AI Workflow:** A custom framework for AI prompting and modular context management.

## Screenshots
![Gem Interface](/works/personnal/gem/screenshots/1.jpg)
![Note Taking](/works/personnal/gem/screenshots/2.jpg)
![AI Integration](/works/personnal/gem/screenshots/3.jpg)


