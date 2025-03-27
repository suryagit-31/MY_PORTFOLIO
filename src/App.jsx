import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar.jsx";
import Herosection from "./components/herosection.jsx";
import Education from "./components/education.jsx";
import Projects from "./components/projects.jsx";
import Experience from "./components/experience.jsx";
import Contact from "./components/contact.jsx";
const App = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <Herosection />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </div>
    </div>
  );
};

export default App;
