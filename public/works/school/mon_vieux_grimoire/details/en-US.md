# Mon Vieux Grimoire

<a href="https://github.com/clayrok/MonVieuxGrimoire" target="_blank" class="tag repo-link">
    <img src="/images/skills/git.webp" alt="" class="repo-icon">
    <span>View Repository</span>
    <img src="/images/external-link.svg" alt="" class="external-icon">
</a>

## Project Overview
Developed as part of my OpenClassrooms "Web Developer" certification, Mon Vieux Grimoire is a robust backend solution for a book-rating social platform. Tasked with building a secure server from the ground up to support a pre-existing frontend, I implemented a full REST API that handles everything from user authentication to complex book-rating logic.

## My Role: Backend Developer
I architected the server-side logic and database integration, focusing on security and data integrity:
* **RESTful API Development:** Built a complete CRUD system to manage book entries, ratings, and user profiles.
* **Authentication & Security:** Implemented secure user authentication using JSON Web Tokens (JWT) and password hashing.
* **Middleware Engineering:** Developed custom middleware to handle file uploads, image optimization, and user authorization levels.

## Challenges & Solutions

### 1. Architectural Scalability and Code Complexity
**Problem:** As the API grew to include authentication, image processing, and data validation, a purely functional approach became difficult to manage and prone to "spaghetti code."
**Solution:** I transitioned the architecture to a middleware-based pattern. By intercepting requests and processing them one discrete step at a time (Authentication -> Validation -> Processing -> Storage), I created a modular pipeline that made the codebase easier to debug and extend.



### 2. Critical Security and Data Integrity
**Problem:** The application needed to handle sensitive user data (passwords) and be resilient against common web vulnerabilities like automated login attempts and malicious database queries.
**Solution:** I implemented a multi-layered security strategy. I used `bcrypt` for high-level password encryption and protected the database against NoSQL injections. To prevent brute-force attacks, I integrated rate-limiting libraries and secured all protected routes with JSON Web Tokens (JWT) to ensure that only authenticated users could interact with specific resources.

## Technologies Used
<div class="techs">
    <div class="tag"><img src="/images/skills/node-js.webp" alt=""><span>Node.js</span></div>
    <div class="tag"><img src="/images/skills/express.webp" alt=""><span>Express</span></div>
    <div class="tag"><img src="/images/skills/jwt.webp" alt=""><span>JWT</span></div>
    <div class="tag"><img src="/images/skills/mongoose.webp" alt=""><span>Mongoose</span></div>
    <div class="tag"><img src="/images/skills/sql.webp" alt=""><span>PostgreSQL</span></div>
    <div class="tag"><img src="/images/skills/git.webp" alt=""><span>Git</span></div>
</div>

## Key Features
* **Secure Auth System:** Encrypted password storage and token-based session management.
* **Dynamic Rating System:** Logic to calculate and update average book ratings in real-time.
* **Automated Image Processing:** Middleware to resize and optimize uploaded book covers for better performance.
* **Security Hardening:** Implementation of security headers and rate-limiting to ensure API stability.

## Screenshots
![Mon Vieux Grimoire Homepage](/works/school/mon_vieux_grimoire/screenshots/1.jpg)
![Book Details](/works/school/mon_vieux_grimoire/screenshots/2.jpg)
![Add Book Form](/works/school/mon_vieux_grimoire/screenshots/3.jpg)


