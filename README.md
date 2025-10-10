
## 📚 Library Management System

A full-stack **MERN web application** that allows users to **register, log in, and manage books** efficiently.
Built with **React, Node.js, Express, and MongoDB**, and deployed using **Netlify** and **Render**.

---

### 🚀 Live Demo

* **Frontend (React + Netlify):** [https://library05.netlify.app](https://library05.netlify.app)
* **Backend (Express + Render):** [https://library-management-1-vnap.onrender.com](https://library-management-1-vnap.onrender.com)

---

### 🧠 Features

✅ User Authentication (Register / Login)
✅ JWT-based Authorization
✅ Add, View, and Manage Books
✅ Responsive UI (works on all devices)
✅ Secure API Integration (frontend ↔ backend)
✅ Error handling and validation

---

### 🏗️ Tech Stack

**Frontend:**

* React (Vite)
* Axios
* React Router
* CSS 

**Backend:**

* Node.js
* Express.js
* MongoDB (with Mongoose)
* JWT Authentication

**Deployment:**

* Frontend → [Netlify](https://www.netlify.com)
* Backend → [Render](https://render.com)

---

### ⚙️ Installation & Setup (Local)

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/library-management.git
   cd library-management
   ```

2. **Setup Backend**

   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend folder:

   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

   Start the backend server:

   ```bash
   npm run start
   ```

3. **Setup Frontend**

   ```bash
   cd ../frontend
   npm install
   ```

   Create a `.env` file in the frontend folder:

   ```
   VITE_API_URL=https://library-management-1-vnap.onrender.com
   ```

   Run the app locally:

   ```bash
   npm run dev
   ```


---

### 🌐 Deployment Info

* `_redirects` file added to handle React routes on Netlify:

  ```
  /*    /index.html   200
  ```
* CORS enabled in backend for Netlify domain.
* Environment variables securely stored in Render and Netlify.

