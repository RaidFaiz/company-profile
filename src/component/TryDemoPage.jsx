import trydemoimg from '../assets/trydemo-img.png';

export default function TryDemoPage() {
    return(
        <section className="trydemo mt-15 w-full transition-all duration-300">
            <div className="trydemo-content-container w-full bg-black max-w-7xl mx-auto">
                <h2 className="trydemo-content-span text-center text-4xl max-md:text-2xl mb-5">Try Our Product</h2>
                <div className="trydemo-content relative aspect-[12/4] max-md:aspect-[16/10] w-full rounded-md overflow-hidden">
                    <img 
                        src={trydemoimg}
                        alt="try demo"
                        loading='lazy'
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex justify-center items-center gap-5 p-6 text-white">
                        <button className="trydemo-content-button bg-white/80 font-semibold p-2 w-33 h-auto cursor-pointer rounded-3xl hover:bg-white/90 text-zinc-700 transition-all duration-200 max-sm:text-xs max-sm:w-21 max-md:text-sm max-md:w-24 max-md:p-2 max-lg:w-27 max-lg:p-2">Demo</button>
                    </div>                   
                </div>
            </div>
        </section>
    )
}