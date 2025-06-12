import { useState, useRef } from 'react';
import { MoveUpRight, ChevronRight, ChevronLeft } from 'lucide-react';
import aboutimg1 from '../assets/news-img1.png';
import aboutimg2 from '../assets/news-img2.png';
import aboutimg3 from '../assets/news-img3.png';

const images = [aboutimg1, aboutimg2, aboutimg3];

export default function IntroductionAbout() {

    const [currentImage, setCurrentImage] = useState(0);

    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    }
    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    }

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const deltaX = touchStartX.current - touchEndX.current;

        if (deltaX > 50) {
            nextSlide();
        } else if (deltaX < -50) {
            prevSlide();
        }

        touchStartX.current = null;
        touchEndX.current = null;
    }

    const nextSlide = () => {
        setCurrentImage((prev) => (prev + 1) % images.length)
    }
    const prevSlide = () => {
        setCurrentImage((prev) => (prev -1 + images.length) % images.length)
    }

  return (
    <section className="introduction-about mt-20 w-full transition-all duration-300">
      <div className="introduction-about-content-container w-full bg-black max-w-7xl mx-auto flex flex-col justify-start">
        <h1 className="about-title text-4xl max-md:text-3xl font-bold">About</h1>
        <div className="mt-5 text-white">
            <p className="text-white/60 text-md">
                VOUNDYER represents the next evolution in artificial intelligence, where sophisticated AI agents work seamlessly alongside human teams to transform business operations. Founded by a team of world-class AI researchers and industry veterans, we're building the future of intelligent automation.
                <br/>
                <br/>
                From our headquarters in San Francisco to our research labs worldwide, VOUNDYER is pioneering breakthrough technologies in machine learning, natural language processing, and autonomous decision making. We believe that the future belongs to organizations that can harness the power of AI while maintaining human creativity and oversight.
                Our mission extends beyond simple task automation. We're creating AI agents that understand context, learn from experience, and adapt to complex business environments. These agents don't just follow instructions—they think, reason, and make intelligent decisions that drive meaningful business outcomes.
            </p>        
        </div>
        <button className='bg-zinc-700/50 mt-20 w-full h-max py-3 px-5 rounded-md text-white flex justify-between items-center cursor-pointer hover:bg-zinc-800 transition-all duration-200'>
            <span className='text-start font-medium'>Learn More</span>
            <MoveUpRight size={20} className='text-white' />
        </button>
        <div 
            className="relative aspect-[15/5] max-md:aspect-[16/10] w-full rounded-md overflow-hidden mt-10"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
          <img 
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            loading='lazy'
            className="absolute top-0 left-0 w-full h-full object-cover"
          />         
        </div>
        <div className='flex justify-center items-center gap-5 mt-5'>
            <button
                onClick={prevSlide}
                className="cursor-pointer"
            >
                <ChevronLeft size={20} className="text-white" />
            </button>
            <button
                onClick={nextSlide}
                className="cursor-pointer"
            >
                <ChevronRight size={20} className="text-white" />
            </button>
        </div>
      </div>
    </section>
  )

} 
