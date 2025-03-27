# Brookettes Project 3

## Purpose of the Application
The purpose of this application is to manage and track maintenance tasks across various sites, to reduce the instances of multiple sites being down at once and causing system vulnerabilites. It provides features for viewing, adding, editing, and deleting maintenance records, as well as identifying conflicts in maintenance schedules.

## 📌 Features
- View a list of sites and their details.
- Manage maintenance tasks, including adding, editing, deleting, and approving maintenance task.
- Filter and sort maintenance records by site, condition, and other attributes.
- Identify conflicts in maintenance schedules using a calendar view.
- Submit new maintenance requests.
- Interactive UI built with React and backend powered by Express and Knex.

---

## 🛠️ How to Install and Run All Parts of the Application

### Prerequisites
- Docker and Docker Compose installed on your machine.
- Node.js installed (if running locally without Docker).
- The following npm packages:
  - `create-vite@latest`
  - `react-router-dom`
  - `express`
  - `knex`
  - `pg`
  - `cors`

### ⚡ Steps to Run the Application
1. Clone the repository:
   ```sh
   git clone https://github.com/harman1gidda/brookettes-proj3.git
   cd brookettes-proj3

2. Start the application using Docker Compose:
    ```sh 
    docker-compose up --build
    ```
    
     This will:
   - Start a PostgreSQL database container.
   - Build and run the backend API server.
   - Build and run the frontend React application.

3. Access the application:
   - Frontend: 🌍 [http://localhost:5173](http://localhost:5173)
   - Backend API: 🌍 [http://localhost:8081](http://localhost:8081)

---

## 🚀 Running Locally Without Docker
1. **Backend (API)**:
   - Navigate to the api folder:
     ```sh
     cd api
     ```
   - Install dependencies:
     ```sh
     npm install
     ```
   - Run database migrations and seeds:
     ```sh
     npm run migrate:latest
     npm run seed:run
     ```
   - Start the server:
     ```sh
     npm start
     ```

2. **Frontend (UI)**:
   - Navigate to the ui folder:
     ```sh
     cd ui
     ```
   - Install dependencies:
     ```sh
     npm install
     ```
   - Start the development server:
     ```sh
     npm run dev
     ```

## 🎨 Using the application

## UI Paths
- / - use home page to navigate to other paths. or use you arrows and enter 'up, up, down, down, left, right, left right'
- /maintenance - View, manage, and edit maintenance task.
- /sites - View list of sites and navigate to specific site for details.
- /sites/:id - Dislplay site maintenance details.
- /conflicts - Displays maintenance schedule on calendar with conflicts highlighted.
- /submit - Submit maintenance.

### API Endpoints
- / - Displays if the application is running.
- /sites - Retrieve all sites.
- /sites/:id - Retrieve a specific site by ID.
- /maintenance - Retrieve all maintenance tasks.
- /maintenance/:id - Retrieve a specific maintenance task by ID.
- /joined - Retrieve joined data from sites and maintenance.


---
## 🐛 Running Tests

### API Test
- Install the following npm packages:
  - `npm install --save-dev supertest`
  - `npm install --save-dev jest`

  **ensure the devDependencies section is updated in your package.json

- Run `npx jest` in api folder

### UI Test
- Install the following npm packages:
  - `npm install --save-dev supertest`
  - `npm install --save-dev jest`

  **ensure the devDependencies section is updated in your package.json

- Run `npx jest` in api folder

---

## 🔗 Entity-Relationship Diagram (ERD)

[ERD](https://miro.com/app/board/uXjVINC1t1w=/)

## 🔗 Kanban Board

[Trello](https://trello.com/b/Ew2KvGoP/project-3)

---

## 🤝 Contributing

Feel free to fork this repository and create pull requests. For major changes, please open an issue first to discuss what you would like to change.

## 🧑‍💻 Authors
- Brooke Sharpenski
- Harman Gidda
- Kiersten Morrow
- Andrew Stamps
- Marques Johnson
- Damon Hayes

---

## 📄 License
This project is licensed under the MIT License.
