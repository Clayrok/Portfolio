# Mon Vieux Grimoire

## Project Overview
Developed as part of my OpenClassrooms "Web Developer" certification, Mon Vieux Grimoire is a robust backend solution for a book-rating social platform. Tasked with building a secure server from the ground up to support a pre-existing frontend, I implemented a full REST API that handles everything from user authentication to complex book-rating logic.

## My Role: Backend Developer
I architected the server-side logic and database integration, focusing on security and data integrity:
* **RESTful API Development:** Built a complete CRUD (Create, Read, Update, Delete) system to manage book entries, ratings, and user profiles.
* **Authentication & Security:** Implemented secure user authentication using JSON Web Tokens (JWT) and password hashing. I also integrated specialized libraries to protect the application against common vulnerabilities like brute-force attacks and SQL/NoSQL injections.
* **Middleware Engineering:** Developed custom middleware to handle file uploads, image optimization, and user authorization levels, ensuring that only book owners can modify their entries.
* **Database Architecture:** Designed and managed data schemas using Mongoose (for MongoDB) and PostgreSQL to ensure scalable and efficient data storage.

## Technologies Used
![Node.js](/images/placeholder.webp)
![Express](/images/placeholder.webp)
![JWT](/images/placeholder.webp)
![Mongoose](/images/placeholder.webp)
![PostgreSQL](/images/placeholder.webp)

## Key Features
* **Secure Auth System:** Encrypted password storage and token-based session management.
* **Dynamic Rating System:** Logic to calculate and update average book ratings in real-time.
* **Automated Image Processing:** Middleware to resize and optimize uploaded book covers for better performance.
* **Security Hardening:** Implementation of security headers and rate-limiting to ensure API stability.

## Screenshots
![API Documentation Snippet](/images/placeholder.webp)
![Database Schema Design](/images/placeholder.webp)