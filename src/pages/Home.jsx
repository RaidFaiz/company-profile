import Hero from "../component/Hero";
import Products from "../component/Products";
import TryDemo from "../component/TryDemo";
import Features from "../component/Features";
import content from "../data/content.json";
import NewsHome from "../component/NewsHome";


function Home() {
  return (
    <>
        <Hero hero={content.hero}/>
        <Products />
        <Features/>
        <NewsHome/>
        <TryDemo/>
    </>
  )
}

export default Home
