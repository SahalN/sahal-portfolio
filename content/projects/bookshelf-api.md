---
title: "Book Shelf API deployed using GCP"
date: "2024-06-06"
image: "/images/bookshelf-api.svg"
---

<!-- @format -->

### Project Name

Bookshelf API

### Short Description

A RESTful API designed to manage bookshelves and their contents, deployed using Google Cloud Platform (GCP). This API allows users to create, read, update, and delete bookshelf and book records.

### Purpose and Background

Developed as part of the Bangkit program, this project demonstrates how to build and deploy a full-featured API using Google Cloud services. The API offers a platform for managing books and bookshelves, with focus on efficient backend design and cloud deployment.

### Technologies Used

- **Programming Language:** Node.js
- **Backend Framework:** Express.js
- **Database:** Google Cloud Firestore
- **Cloud Deployment:** Google Cloud Platform (GCP)
- **API Architecture:** RESTful
- **Authentication:** Firebase Authentication for secure user management
- **Hosting:** Firebase Hosting for API deployment

### Key Features

- CRUD operations for books and bookshelves, including filtering and sorting.
- User authentication via Firebase Authentication for secure access.
- Data is stored and managed in Google Cloud Firestore, ensuring scalability.
- API is fully documented and follows REST best practices.
- Deployed and managed using GCP, ensuring reliability and performance.

### Challenges and Solutions

- **Challenge:** Handling user authentication securely in the API.  
  **Solution:** Integrated Firebase Authentication to handle secure login and access control efficiently.

- **Challenge:** Ensuring scalable and reliable data storage.  
  **Solution:** Used Google Cloud Firestore to take advantage of its flexibility, scalability, and integration with other GCP services.

- **Challenge:** Optimizing API responses and performance under high traffic.  
  **Solution:** Applied proper indexing and optimized database queries in Firestore, combined with caching mechanisms for frequently accessed data.

### Roles and Responsibilities

- **Developer:** Muhammad Sahal Nurdin  
  Responsible for designing and implementing the API endpoints, managing database interactions, integrating user authentication, and deploying the API on GCP.

### Outcomes and Impact

- Delivered a fully functional, scalable API that allows users to manage books and bookshelves with secure access.
- Gained hands-on experience with cloud services, particularly Google Cloud Platform, Firebase, and Firestore.
- Demonstrated best practices in API design, cloud deployment, and backend management.

### Future Development

- Expanding the API to support additional features like book recommendations and user reviews.
- Adding additional authentication mechanisms such as OAuth for third-party login.
- Enhancing API security with rate-limiting and advanced encryption methods.
- Supporting additional cloud services for increased functionality and scalability.
- Adding analytics and monitoring to track API usage and performance.
