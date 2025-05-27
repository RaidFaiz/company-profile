export default function Products() {
    return(
        <section className="products mt-20 h-auto transition-all duration-300">
            <div className="products-content-container w-full max-w-7xl mx-auto bg-black transition-all duration-300">
                <h2 className="mb-5 font-bold text-lg max-md:text-2xl">AI Agents</h2>
                <div className="products-content grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="products-content-item">
                        <div className="relative aspect-[16/10] rounded-md overflow-hidden border border-white/10 hover:border-white transition duration-300">
                            <img
                                src="products-img1.png"
                                alt="Product 1"
                                className="products-image1 absolute top-0 left-0 w-full h-full object-cover">   
                            </img>
                        </div>
                        <h3 className="products-title text-md text-left font-bold mt-5">Product's Title</h3>
                        <p className="text-white text-sm text-left mt-1 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit</p>
                    </div>
                    <div className="products-content-item">
                        <div className="relative aspect-[16/10] rounded-md overflow-hidden">
                            <img
                                src="products-img2.png"
                                alt="Product 2"
                                className="products-image2 absolute top-0 left-0 w-full h-full object-cover">   
                            </img>
                        </div>
                        <h3 className="products-title text-md max-md:text-xl text-left font-bold mt-5">Product's Title</h3>
                        <p className="text-white text-sm text-left mt-1 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit</p>
                    </div>
                </div>
            </div>
        </section>
    )
}