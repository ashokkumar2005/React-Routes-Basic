# 🚦 React Router Guide (Beginner to Intermediate)

A comprehensive and practical guide to mastering **client-side routing in React** using **react-router-dom**. This guide covers fundamental concepts, essential hooks, and advanced routing patterns commonly used in modern React applications.

---

## 📌 What is React Router?

React Router enables navigation between different pages (components) in a React application **without reloading the browser**, providing a fast and seamless user experience.

### Example Routes

- `/` → Home Page
- `/about` → About Page
- `/contact` → Contact Page
- `/profile` → Profile Page

---

## 📦 Installation

Install React Router DOM:

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
  Navigate,
  useNavigate,
  useParams
} from "react-router-dom";
```

---

# 🧠 Core Concepts

## 1️⃣ BrowserRouter

Wraps the entire application and enables routing using the browser's History API.

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

---

## 2️⃣ Routes

Acts as a container for all route definitions and ensures that only the matching route is rendered.

```jsx
<Routes>
  ...
</Routes>
```

---

## 3️⃣ Route

Maps a URL path to a React component.

```jsx
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
```

---

## 4️⃣ Link

Used for navigation without refreshing the page.

```jsx
<Link to="/about">About</Link>
```

Instead of:

```html
<a href="/about">About</a>
```

---

## 5️⃣ useNavigate Hook

Provides programmatic navigation.

```jsx
const navigate = useNavigate();

navigate("/home");
```

Example:

```jsx
<button onClick={() => navigate("/dashboard")}>
  Go to Dashboard
</button>
```

---

## 6️⃣ useParams Hook

Retrieves dynamic values from the URL.

Route:

```jsx
<Route path="/user/:id" element={<User />} />
```

Access parameter:

```jsx
const { id } = useParams();

console.log(id);
```

URL:

```
/user/101
```

Output:

```js
101
```

---

# 🏗️ Basic Routing Example

```jsx
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

# 🔥 Advanced Routing Concepts

## 🔹 Nested Routes

Used to render child routes inside a parent component.

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

Inside Dashboard:

```jsx
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Outlet />
    </>
  );
}
```

---

## 🔹 Layout Routes

Useful for shared UI components such as Navbar and Footer.

```jsx
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
</Route>
```

---

## 🔹 Protected Routes

Restricts access to authenticated users.

```jsx
import { Navigate } from "react-router-dom";

function ProtectedRoute({ user, children }) {

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}
```

Usage:

```jsx
<Route
  path="/dashboard"
  element={
    <ProtectedRoute user={user}>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

---

## 🔹 Dynamic Routes

```jsx
<Route path="/product/:id" element={<Product />} />
```

URL:

```
/product/25
```

Retrieve value:

```jsx
const { id } = useParams();
```

---

## 🔹 Redirecting

```jsx
<Navigate to="/" />
```

Example:

```jsx
<Route path="/home" element={<Navigate to="/" />} />
```

---

## 🔹 404 Not Found Page

```jsx
<Route path="*" element={<NotFound />} />
```

```jsx
function NotFound() {
  return <h1>404 Page Not Found</h1>;
}
```

---

# 📁 Recommended Folder Structure

```bash
src/
│
├── components/
│   ├── Navbar.jsx
│   └── ProtectedRoute.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Dashboard.jsx
│   └── NotFound.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── App.jsx
└── main.jsx
```

---

# ✅ Best Practices

- Use `Link` instead of `<a>` tags.
- Wrap the application only once with `BrowserRouter`.
- Organize pages and reusable components separately.
- Use `useNavigate()` for programmatic navigation.
- Use `useParams()` for dynamic routes.
- Implement a 404 page for unmatched routes.
- Use Protected Routes for authentication.
- Use Layout Routes to avoid repeating Navbar and Footer components.

---

# 📋 Summary

| Concept | Description |
|-----------|-------------|
| BrowserRouter | Enables routing |
| Routes | Groups route definitions |
| Route | Maps URL to component |
| Link | Navigation without reload |
| useNavigate | Programmatic navigation |
| useParams | Access URL parameters |
| Navigate | Redirect to another route |
| Nested Routes | Parent-child routing |
| Protected Routes | Restrict unauthorized access |
| Layout Routes | Shared layouts |

---

# 🎯 Why Learn React Router?

React Router is a fundamental library for building **Single Page Applications (SPAs)**. It is widely used in production applications and frequently asked in **React and MERN Stack interviews**.

Understanding routing helps you build:

- Dashboards
- E-commerce applications
- Authentication systems
- Admin panels
- Blog platforms
- Large-scale MERN applications

---

# 🚀 Next Steps

- 🔐 Implement JWT Authentication
- 🌐 Connect APIs with Axios
- 🛒 Build a Full MERN E-Commerce Application
- 👥 Add Role-Based Access (Admin/User)
- ⚡ Learn Lazy Loading and Code Splitting
- 📦 Explore React Router Data APIs

---

## 👨‍💻 Author

**Ashokkumar T**

GitHub: https://github.com/ashokkumar2005

---

## ⭐ Support

If you found this guide helpful, consider giving the repository a ⭐ on GitHub.

---

### 🚀 Happy Coding with React Router!
