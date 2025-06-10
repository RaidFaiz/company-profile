import { useEffect, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ isOpen, setIsOpen }) {
    const location = useLocation();

    useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile && typeof setIsOpen === 'function') {
        setIsOpen(false);
    }
    }, [location.pathname]);

    useLayoutEffect(() => {
        const lockScroll = () => {
            const isMobile = window.innerWidth < 768;
            if (isOpen && isMobile) {
            document.documentElement.classList.add('no-scroll');    
            document.body.classList.add('no-scroll');
            } else {
            document.documentElement.classList.remove('no-scroll');
            document.body.classList.remove('no-scroll');
            }
        };

        lockScroll();

        window.addEventListener('resize', lockScroll);

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('resize', lockScroll);
        };
    }, [isOpen]);


    return (
        <nav
            className={`
                text-sm font-medium transform transition-all duration-300
                navbar fixed top-0 left-0 z-50 bg-black p-5 h-screen 
                ${isOpen ? 'w-full md:w-[200px]' : 'w-[200px]'}
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}                   
            >
                <div className="nav-container md:mt-50 flex flex-col justify-start gap-1 max-md:items-center max-md:gap-5 max-md:h-screen max-md:justify-center">
                    <Link to="/" className="hover:bg-zinc-900 transition-all duration-200 p-2 rounded-md">Home</Link>
                    <Link to="/news" className="hover:bg-zinc-900 transition-all duration-200 p-2 rounded-md">News</Link>
                    <Link to="#" className="hover:bg-zinc-900 transition-all duration-200 p-2 rounded-md">Products</Link>
                    <Link to="#" className="hover:bg-zinc-900 transition-all duration-200 p-2 rounded-md">About</Link>
                    <Link to="/demo" className="hover:bg-zinc-900 transition-all duration-200 p-2 rounded-md">Demo</Link>
                </div>                       
        </nav>
    )
}
