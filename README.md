# React Login + Registration App (React + Vite)

A simple login and registration system built using **React** as part of my fullstack learning journey. This project is focused on **understanding React components, state, form handling, routing, and session-based login logic** — not on fancy UI.

## 🔧 Features

- Login and Register pages with basic form validation
- Session-based user login using `sessionStorage`
- Page routing with `react-router-dom`
- Welcome page after login with logout option
- Protected routes that redirect if not logged in

## Folder Structure 📁

```text
📦 src/
├── 📂 assets/
│   └── 📜 style.css
├── 📂 components/
├── 📂 pages/
│   ├── 📜 LoginPage.jsx
│   ├── 📜 RegisterPage.jsx
│   └── 📜 WelcomePage.jsx
├── 📜 App.css
├── 📜 App.jsx
├── 📜 index.css
└── 📜 main.jsx
```

> This is frontend-only for now. Backend (Node.js + Express + MongoDB) will be added later.

## 🚀 Getting Started

```bash
git clone https://github.com/jaysreeb/login-auth-react.git
cd login-auth-react
npm install
npm run dev

Open your browser at http://localhost:5173/
```
## Why I Built This

-This is part of my fullstack learning roadmap. The goal is to:

    --Understand React basics through real use cases
    --Learn client-side routing and session logic
    --Eventually add backend with JWT-based authentication

## 🔮 Coming Soon

    -Backend with Express + MongoDB
    -API-based login/register
    -Token-based authentication (JWT)
    -Form error handling and success feedback
    -Proper redirect + route guards

## 🧑‍💻 Author
    Built with ❤️ by JB
