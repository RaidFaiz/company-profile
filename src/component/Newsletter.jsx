import trydemoimg from '../assets/trydemo-img.png';

export default function Newsletter() {
    return(
        <section className="newsletter mt-20 w-full transition-all duration-300">
            <div className="newsletter-content-container w-full bg-black max-w-7xl mx-auto">
                <div className="newsletter-content relative aspect-[12/4] max-md:aspect-[16/16] w-full rounded-md overflow-hidden">
                    <img 
                        src={trydemoimg}
                        alt="newsletter"
                        loading='lazy'
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center gap-5 p-6 text-white">
                        <h2 className="max-md:text-2xl max-sm:text-xl md:text-3xl font-bold mb-3">Stay Updated</h2>
                         <p className="text-white/80 text-sm sm:text-base mb-6 max-w-md text-center">
                           Subscribe to our newsletter and never miss the latest updates, product launches,
                           and insights from <strong className="text-white">VOUNDYER</strong>.
                         </p>
                         <form className="flex flex-col sm:flex-row justify-center items-center gap-3">
                           <input
                             type="email"
                             placeholder="Enter your email"
                             className="px-4 py-2 w-full sm:w-80 rounded-3xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/60"
                           />
                           <button
                             type="submit"
                             className="bg-white/80 text-zinc-700 px-6 py-2 font-medium cursor-pointer rounded-3xl hover:bg-white/90 transition-all duration-200"
                           >
                             Subscribe
                           </button>
                         </form>
                    </div>                   
                </div>
            </div>
        </section>
    )
}
