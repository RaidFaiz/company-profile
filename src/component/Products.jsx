import productimg1 from '../assets/products-img1.png';
import productimg2 from '../assets/products-img2.png';

export default function Products() {
        const productsData = [
            {
                img: productimg1,
                title: 'Products Content',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit',
                date: 'May 5, 2025',
            },
            {
                img: productimg2,
                title: 'Products Content',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit',
                date: 'May 5, 2025',
            }
        ]

    return(
        <section className="products mt-20 h-auto transition-all duration-300">
            <div className="products-content-container w-full max-w-7xl mx-auto bg-black transition-all duration-300">
                <h2 className="mb-5 font-bold text-xl">AI Agents</h2>
                <div className="products-content grid grid-cols-1 md:grid-cols-2 gap-5">
                    {productsData.map((item, index) => (
                        <div key={index} className="products-content-item">
                            <div className="relative aspect-[16/10] rounded-md overflow-hidden">
                                <img
                                    src={item.img}
                                    alt="Product 1"
                                    loading='lazy'
                                    className="products-image1 absolute top-0 left-0 w-full h-full object-cover">   
                                </img>
                            </div>
                            <div className="mt-2 flex-col items-start">
                                <h3 className="products-title text-lg text-left font-bold mt-5">{item.title}</h3>
                                <p className="text-white/70 text-md text-left mt-1 line-clamp-2">{item.description}</p>
                                <p className="text-white/45 text-sm mt-1">
                                    <span className="font-medium">{item.date}</span>
                                </p> 
                            </div>
                            
                        </div>
                    ))}                
                </div>
            </div>
        </section>
    )
}