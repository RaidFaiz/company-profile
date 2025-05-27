import { useState } from "react";
import Header from "./component/Header"
import Navbar from "./component/Navbar"
import Hero from "./component/Hero";
import Products from "./component/Products";
import News from "./component/news";
import TryDemo from "./component/TryDemo";
import Features from "./component/Features";
import content from "./data/content.json";


function App() {
  const [isOpen, setIsOpen] = useState(true);

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
