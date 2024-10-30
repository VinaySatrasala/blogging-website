import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blog } from "./pages/Blog";
import { NewBlog } from "./pages/NewBlog";
import { Blogs } from "./pages/Blogs";
import { AppBar } from "./Compoents/AppBar";
import "./App.css";

function AppContent() {
  const location = useLocation();
  
  // Define routes where you want to hide the AppBar
  const hideAppBarRoutes = ["/Signup", "/Signin"];

  return (
    <>
      {/* Conditionally render AppBar based on the current path */}
      {!hideAppBarRoutes.includes(location.pathname) && <AppBar />}
      <Routes>
        <Route path="Signup" element={<Signup />} />
        <Route path="Signin" element={<Signin />} />
        <Route path="Blog/:id" element={<Blog />} />
        <Route path="New-Blog" element={<NewBlog />} />
        <Route path="blogs" element={<Blogs />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
