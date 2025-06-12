import { useState } from "react";

import productimg1 from '../assets/features-img1.png';
import productimg2 from '../assets/features-img2.png';
import productimg3 from '../assets/features-img3.png';

const categories = ["All", "Technology", "Business", "Security", "Case Study"];

export default function NewsCategories() {

    const articles = [
  {
    id: 1,
    img: productimg1,
    title: "New AI Agent Capabilities Unveiled",
    description: "Discover the latest advancements in our AI agents, including enhanced natural language processing and machine learning features.",
    category: "Technology",
    date: "May 10, 2025",
  },
  {
    id: 2,
    img: productimg2,
    title: "Partnership with Leading Tech Companies",
    description: "Explore our latest partnerships that enhance our AI capabilities.",
    category: "Business",
    date: "May 10, 2025",
  },
  {
    id: 3,
    img: productimg3,
    title: "Security Enhancements for Enterprise Users",
    description: "Discover the latest security features designed to protect your data and privacy.",
    category: "Security",
    date: "May 10, 2025",
  },
  {
    id: 4,
    img: productimg2,
    title: "Customer Success Stories: 300% Efficiency Gain",
    description: "Learn how our AI agents helped a major client achieve unprecedented efficiency.",
    category: "Case Study",
    date: "May 10, 2025",
  },
  {
    id: 5,
    img: productimg3,
    title: "advanced AI Agent Capabilities Unveiled",
    description: "Discover the latest advancements in our AI agents, including enhanced natural language processing and machine learning features.",
    category: "Technology",
    date: "May 10, 2025",
  },
  {
    id: 6,
    img: productimg2,
    title: "Customer Success Stories: 300% Efficiency Gain",
    description: "Learn how our AI agents helped a major client achieve unprecedented efficiency.",
    category: "Case Study",
    date: "May 10, 2025",
  },
];

const initialCount = 4;

const [selectedCategory, setSelectedCategory] = useState("All")
const [visibleCount, setVisibleCount] = useState(initialCount)

const filteredArticles = 
    selectedCategory === "All" 
    ? articles 
    : articles.filter((article) => article.category === selectedCategory)

const visibleArticles = filteredArticles.slice(0, visibleCount)

const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2)
}

const handleSeeLess = () => {
    setVisibleCount(initialCount)
}

return (

    <section className="news-categories mt-20 h-auto transition-all duration-300">
        <div className="news-categories-content-container w-full max-w-7xl mx-auto bg-black transition-all duration-300">
            <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => {
                        setSelectedCategory(category);
                        setVisibleCount(initialCount); // Reset visible count when category changes
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium border cursor-pointer ${
                    selectedCategory === category
                    ? "bg-white/80 text-zinc-700 hover:bg-white/90 transition-all duration-200"
                    : "bg-black text-white border-white hover:bg-zinc-900"
                    } transition transition-all duration-200`}
                >
                    {category}
                </button>
                ))}
            </div>
            <div className="news-categories-content grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-5">
                {visibleArticles.map((article) => (
                    <div key={article.id} className="news-categories-content-item">
                        <div className="relative aspect-[16/7] rounded-md overflow-hidden">
                            <img
                                src={article.img}
                                alt={article.title}
                                loading='lazy'
                                className="news-categories-image1 absolute top-0 left-0 w-full h-full object-cover">   
                            </img>
                        </div>
                        <div className="mt-5 flex-col items-start">
                            <div className="news-category px-2 py-1 border w-max rounded-3xl flex items-center text-stone-300">
                                <span className='text-xs'>{article.category}</span>
                            </div>
                            <h3 className="news-categories-title text-lg text-left font-bold mt-2">{article.title}</h3>
                            <p className="text-white/70 max-w-4xl text-md text-left mt-1">{article.description}</p>
                            <p className="text-white/45 text-sm mt-1">
                                <span className="font-medium">{article.date}</span>
                            </p> 
                        </div>                           
                    </div>
                ))}                
            </div>

            {visibleCount < filteredArticles.length && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={handleLoadMore}
                        className="px-4 py-2 rounded-full text-sm font-medium border bg-white/80 text-zinc-700 hover:bg-white/90 transition-all duration-200 cursor-pointer"
                    >
                        Load More Articles
                    </button>
                </div>
            )}

             {visibleCount > initialCount && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={handleSeeLess}
                        className="px-4 py-2 rounded-full text-sm font-medium border bg-white/80 text-zinc-700 hover:bg-white/90 transition-all duration-200 cursor-pointer"
                    >
                        See Less
                    </button>
                </div>
                )}
        </div>
     </section>
     
)
}