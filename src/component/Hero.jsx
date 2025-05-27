export default function Hero({hero}) {
    return(
        <section className="hero mt-20 w-full transition-all duration-300">
            <div className="hero-content-container w-full bg-black max-w-7xl mx-auto">
                <h1 className="hero-title uppercase text-4xl max-md:text-3xl text-left font-bold mb-5">{hero.title}</h1>
                <div className="hero-content relative aspect-[16/7] max-md:aspect-[16/10] w-full rounded-md overflow-hidden">
                    <img 
                        src="hero-img.png" 
                        alt=""
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                        <p className="hero-content-span text-base xs:text-lg md:text-2xl lg:text-3xl leading-relaxed max-w-3xl xl:max-w-2xl lg:max-w-xl md:max-w-lg sm:max-w-md xs:max-w-sm text-left line-clamp-3">{hero.subtitle}</p>
                        <button className="hero-content-button bg-white/80 font-semibold p-3 w-33 h-auto cursor-pointer rounded-3xl hover:bg-white/90 text-zinc-700 transition-all duration-200 max-sm:text-xs max-sm:w-21 max-md:text-sm max-md:w-24 max-md:p-2 max-lg:w-27 max-lg:p-2">{hero.buttonText}</button>
                    </div>                   
                </div>
            </div>
        </section>
    )
}