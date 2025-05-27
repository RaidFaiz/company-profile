import { useState, useEffect } from "react";
import Header from "./component/Header"
import Navbar from "./component/Navbar"
import Hero from "./component/Hero";
import Products from "./component/Products";
import News from "./component/news";
import TryDemo from "./component/TryDemo";
import Features from "./component/Features";
import content from "./data/content.json";


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
        <Navbar isOpen={isOpen}/>

        <main className={`main-content p-5 transition-all duration-300 ${isOpen ? 'ml-[200px]' : 'ml-0'}`}>
          <Hero hero={content.hero}/>
          <Products />
          <Features/>
          <News/>
          <TryDemo/>
        </main>
      </div>
    </div>
  )
}

export default App
