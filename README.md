# Employee Management App

A full-stack CRUD app built with **React (Vite)**, **Express.js**, and **MySQL (AWS RDS)** for MIS 372T Lab 6.

## Features
- Context API greeting: *“Welcome [Name] to Codecraft Intranet”*
- Employee Management with full CRUD (Add, Edit, Delete, View)
- Material UI styling with dark background + light sections
- Connected to AWS RDS MySQL database

## Setup
```bash
1. Clone repo
2. Install dependencies:
   npm install
   cd server && npm install express mysql2 cors
3. Configure DB in server/db.js
4. Run backend in terminal:
   node server/server.js
5. Open new terminal and run frontend:
   npm run dev
