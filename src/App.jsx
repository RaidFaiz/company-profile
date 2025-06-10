import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./component/Header"
import Navbar from "./component/Navbar"
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import News from "./pages/News";



function App() {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    // Optional: if user resizes window, you might want to close navbar
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true); // or keep current if you want it unchanged on resize
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => setIsOpen(prev => !prev)

  return (

    <div className="App">
      <Header isOpen={isOpen} toggleNavbar={toggleNavbar} />
        
      <div className="main-container">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
            
        <main className={`main-content p-5 transition-all duration-300 ${isOpen ? 'ml-[200px]' : 'ml-0'}`}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/demo" element={<Demo />}/>
            <Route path="/news" element={<News />}/>
          </Routes>
        </main>
      </div>
    </div>

  )
}

export default App
