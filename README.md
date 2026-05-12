# 🚦 React Router Guide (Beginner to Intermediate)

A clean and practical guide to understanding **client-side routing in React** using `react-router-dom`.
This guide covers **core concepts, hooks, and advanced routing patterns** used in real-world applications.

---

## 📌 What is React Routing?

React Routing enables navigation between different components (pages) **without reloading the browser**, making your app faster and smoother.

### Example Routes

* `/` → Home Page
* `/about` → About Page
* `/contact` → Contact Page

---

## 📦 Installation

```bash
npm install react-router-dom
```

---

## 📚 Core Modules

```js
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
  Navigate
} from "react-router-dom";
```

---

## 🧠 Core Concepts Explained

### 1️⃣ BrowserRouter

* Wraps your entire application
* Enables routing using browser history API

```js
<BrowserRouter>
  <App />
</BrowserRouter>
```

---

### 2️⃣ Routes

* Container for all route definitions
* Ensures only the matching route renders

```js
<Routes>
  ...
</Routes>
```

---

### 3️⃣ Route

* Maps a URL path to a component

```js
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
```

---

### 4️⃣ Link

* Used for navigation **without page reload**
* Replaces traditional `<a>` tag

```js
<Link to="/about">About</Link>
```

---

### 5️⃣ useNavigate (Hook)

* Used for **programmatic navigation**

```js
const navigate = useNavigate();
navigate("/home");
```

---

### 6️⃣ useParams (Hook)

* Access dynamic values from URL

```js
<Route path="/user/:id" element={<User />} />
```

```js
const { id } = useParams();
```

---

## 🏗️ Basic Example

```js
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

## 🔥 Advanced Routing Concepts

### 🔹 Nested Routes

Used for rendering child components inside a parent layout.

```js
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
</Route>
```

---

### 🔹 Layout Routes

Useful for shared UI like navbar/footer.

```js
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
</Route>
```

---

### 🔹 Protected Routes (Authentication)

```js
const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
```

---

### 🔹 404 Not Found Page

```js
<Route path="*" element={<NotFound />} />
```

---

## 🧩 Recommended Folder Structure

```
src/
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
│
├── components/
│   └── Navbar.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── App.jsx
└── main.jsx
```

---

## 🎯 Best Practices

* ✅ Use `Link` instead of `<a>` tags
* ✅ Wrap your app **only once** with `BrowserRouter`
* ✅ Separate pages and components
* ✅ Use hooks (`useNavigate`, `useParams`) effectively
* ✅ Handle 404 routes for better UX
* ✅ Use Protected Routes for authentication

---

## 🚀 Summary

| Concept   | Description               |
| --------- | ------------------------- |
| Route     | Maps URL → Component      |
| Path      | URL structure             |
| Component | UI to render              |
| Link      | Navigation without reload |
| Hook      | Dynamic routing control   |

---

## 📖 Conclusion

React Router is essential for building **modern Single Page Applications (SPAs)**.
Understanding routing will help you build scalable applications and is **frequently asked in interviews**.

---

## 💡 Next Steps

* 🔐 Add Authentication (JWT-based routing)
* 🌐 Connect with Backend APIs
* 🛒 Build a complete MERN project
* 📊 Implement Role-Based Routing (Admin/User)

---

## 👨‍💻 Author

**Ashokkumar T**

---

## ⭐ Support

If you found this helpful, give it a ⭐ on GitHub!

---
