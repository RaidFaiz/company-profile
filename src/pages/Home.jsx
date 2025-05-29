import Hero from "../component/Hero";
import Products from "../component/Products";
import News from "../component/news";
import TryDemo from "../component/TryDemo";
import Features from "../component/Features";
import content from "../data/content.json";


function Home() {
  return (
    <>
        <Hero hero={content.hero}/>
        <Products />
        <Features/>
        <News/>
        <TryDemo/>
    </>
  )
}

export default Home
