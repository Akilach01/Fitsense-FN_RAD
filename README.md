# React + TypeScript + Vite

# 🏋️ FitSense – Fitness Plan Management System (MERN Stack)

FitSense is a full-stack fitness plan management web application built using the **MERN stack**.  
It allows users to create personalized fitness plans and submit them for approval, while an admin can manage users and approve or reject submitted plans.

The system supports **role-based access control**, secure authentication, and a modern responsive UI.

---

## 🚀 Features Overview

### 👤 User Features
- User registration and login
- Secure authentication using JWT
- User dashboard
- Create fitness plans (title, goal, duration)
- View own submitted plans
- Track plan approval status (Pending / Approved / Rejected)

### 🛠 Admin Features
- Admin login (single admin account)
- Admin dashboard
- View all users
- Delete non-admin users
- View all submitted fitness plans
- Approve or reject user plans

### 🔐 Security & Access Control
- Role-based routing (User / Admin)
- Protected routes using authentication guards
- Admin access restricted at both frontend and backend

---

## 🧰 Technologies & Tools Used

### Frontend
- **React** (with TypeScript)
- **Vite** (development & build tool)
- **React Router DOM** (routing)
- **Tailwind CSS** (UI styling)
- **Axios** (API requests)

### Backend
- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB** (Local or Atlas)
- **Mongoose** (ODM)
- **JWT (JSON Web Tokens)** for authentication
- **bcrypt** for password hashing
- **dotenv** for environment configuration

### Development Tools
- **MongoDB Compass**
- **Postman** (API testing)
- **VS Code**
- **Git & GitHub**
- 
## 📂 Project Structure

fitsense/
│
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── middleware/
│ │ └── index.ts
│ ├── .env
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── context/
│ │ ├── services/
│ │ └── routes/
│ ├── package.json
│ └── vite.config.ts
│
└── README.md

---
## ⚙️ Setup & Run Instructions

### 📌 Prerequisites
Make sure you have installed:
- Node.js (v18+ recommended)
- MongoDB (local) **OR** MongoDB Atlas
- Git

---
## 🖥 Backend Setup

### 1️⃣ Navigate to backend folder
```bash
cd backend
2️⃣ Install dependencies
npm install
3️⃣ Create .env file
PORT=5000
MONGO_URI=mongodb://localhost:27017/fitsense
JWT_SECRET=your_jwt_secret

You can replace MONGO_URI with MongoDB Atlas connection string when deploying.

4️⃣ Run backend server
npm run dev
Backend will run at:http://localhost:5000

🖥 Frontend Setup
1️⃣ Navigate to frontend folder
cd frontend

2️⃣ Install dependencies
npm install

3️⃣ Run frontend app
npm run dev
Frontend will run at:http://localhost:5173

👑 Creating Admin Account (Manual)

Since the system supports only one admin, the admin is created manually in MongoDB.

Steps:

Open MongoDB Compass

Connect to your database

Go to users collection

Insert a document:

{
  "email": "admin@fitsense.com",
  "password": "$2b$10$HASHED_PASSWORD",
  "role": "admin"
}

Password must be bcrypt-hashed.
Admin role is checked during login.

🌍 Deployment Ready
Frontend can be deployed on Vercel / Netlify
Backend can be deployed on Render / Railway
MongoDB Atlas can be used for cloud database
Environment variables are already supported




## 📂 Project Structure



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
