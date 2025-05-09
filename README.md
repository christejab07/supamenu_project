# SupaMenu Project

This project is organized as a monorepo containing:

- `backend` – Node.js + Express backend (MongoDB, JWT)
- `mobile` – React Native app using Expo
- `desktop` – Desktop UI with Next js (React Framework)

---

## 🔁 Cloning the Repo

### Clone only the main branch:
```bash
git clone https://github.com/christejab07/supamenu_project.git
```

### Clone all branches:

```bash
git clone --mirror https://github.com/christejab07/supamenu_project.git
```

> Or to get all branches normally:

```bash
git clone https://github.com/christejab07/supamenu_project.git
cd supamenu_project
git fetch --all
```

---

## ⚙️ Environment Variables for Backend

Create a `.env` file inside the `supamenu_backend/` folder with the following content:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/supamenu
JWT_SECRET=your_jwt_secret_here
```

---

## 📦 Installing Dependencies

### 1. Backend

```bash
cd supamenu_backend
npm install
```

### 2. Mobile (Expo / React Native)

```bash
cd supamenu_mobile
npm install
npx expo install
```

### 3. Desktop

```bash
cd supamenu_desktop
npm install
```

---

## 🏃 Running Each App

### Backend

```bash
npm start
```

### Mobile (Expo)

```bash
npx expo start
```

### Desktop

```bash
npm run dev
```



## 📌 Branches Overview

| Branch    | Description                  |
| --------- | ---------------------------- |
| `main`    | Contain all folders          |
| `backend` | Contains backend API code    |
| `mobile`  | Contains Expo mobile app     |
| `desktop` | Contains desktop app         |

---
