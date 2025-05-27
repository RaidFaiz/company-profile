import { useLayoutEffect } from "react";

export default function Navbar({ isOpen }) {
    useLayoutEffect(() => {
        const lockScroll = () => {
            const isMobile = window.innerWidth < 768;
            if (isOpen && isMobile) {
            document.body.classList.add('no-scroll');
            } else {
            document.body.classList.remove('no-scroll');
            }
        };

        lockScroll();

        // Optional: listen to window resize to recheck isMobile condition
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
                    <a href="#" className="hover:bg-zinc-900 transition-all duration-200 p-2 rounded-md">Home</a>
                    <a href="#" className="hover:bg-zinc-900 transition-all duration-200 p-2 rounded-md">Products</a>
                    <a href="#" className="hover:bg-zinc-900 transition-all duration-200 p-2 rounded-md">News</a>
                    <a href="#" className="hover:bg-zinc-900 transition-all duration-200 p-2 rounded-md">About</a>
                    <a href="#" className="hover:bg-zinc-900 transition-all duration-200 p-2 rounded-md">Demo</a>
                </div>                       
        </nav>
    )
}
