import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Discover from "./pages/Discover";
import CampaignDetail from "./pages/CampaignDetail";
import LoginPage from "./pages/Login";

function App() {
  // Initialize dark mode state from localStorage or default to false
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Setup effects for dark mode and AOS
  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("darkMode", darkMode);

    // Initialize AOS animations
    AOS.init({ duration: 1000 });
  }, [darkMode]);

  // Update the body's data-theme attribute and localStorage when darkMode changes
  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Toggle dark mode
  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      {/* Navbar */}
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />

      {/* Theme Toggle Button */}
      <button
        id="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle Dark Mode"
        className="fixed top-4 right-4 p-2 bg-gray-300 dark:bg-gray-700 rounded-full shadow-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
      >
        {darkMode ? (
          <Sun className="h-6 w-6 text-yellow-500" />
        ) : (
          <Moon className="h-6 w-6 text-gray-900" />
        )}
      </button>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/campaign/:id" element={<CampaignDetail />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;