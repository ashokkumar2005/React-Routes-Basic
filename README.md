# 🚦 React Router Beginner Guide

A simple and beginner-friendly guide to understanding **React Routing** using `react-router-dom`. This covers core concepts, commonly used modules, and practical examples for building multi-page React applications.

---

## 📌 What is React Routing?

Routing in React allows you to navigate between different pages **without reloading the browser**.

### Example Routes:

* `/` → Home Page
* `/about` → About Page
* `/contact` → Contact Page

---

## 📦 Installation

```bash
npm install react-router-dom
```

---

## 📚 Core Modules (Must Know)

```js
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams
} from "react-router-dom";
```

---

## 🧠 Module Explanation

### 1. BrowserRouter

Wraps the entire app and enables routing.

```js
<BrowserRouter>
  <App />
</BrowserRouter>
```

---

### 2. Routes

Container that holds all route definitions.

```js
<Routes>
  ...
</Routes>
```

---

### 3. Route

Defines a path and the component to render.

```js
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
```

---

### 4. Link

Used for navigation without page reload.

```js
<Link to="/about">Go to About</Link>
```

---

### 5. useNavigate

Used to navigate programmatically.

```js
const navigate = useNavigate();
navigate("/home");
```

---

### 6. useParams

Used to access dynamic URL parameters.

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

## 🔥 Advanced Concepts

### Nested Routes

```js
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
</Route>
```

---

### Layout Routes

```js
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
</Route>
```

---

### Protected Routes

```js
if (!user) {
  return <Navigate to="/login" />;
}
```

---

### 404 Page

```js
<Route path="*" element={<NotFound />} />
```

---

## 🧩 Folder Structure

```
src/
 ├── pages/
 │    ├── Home.jsx
 │    ├── About.jsx
 │    └── Contact.jsx
 ├── components/
 │    └── Navbar.jsx
 ├── App.jsx
 └── main.jsx
```

---

## 🎯 Best Practices

* Use `Link` instead of `<a>`
* Wrap app only once with `BrowserRouter`
* Keep routes organized inside `pages`
* Use `useNavigate` for redirects

---

## 🚀 Summary

| Concept   | Meaning      |
| --------- | ------------ |
| Route     | Path mapping |
| Path      | URL          |
| Component | UI page      |
| Link      | Navigation   |

---

## 📖 Conclusion

React Router is essential for building modern single-page applications. Mastering these basics will help you build scalable apps and is important for MERN stack development and interviews.

---

## 💡 Next Steps

* Build a multi-page project
* Add authentication (Protected Routes)
* Connect with backend APIs

---

Happy Coding 🚀
