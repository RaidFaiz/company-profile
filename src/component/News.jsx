import newsimage1 from '../assets/news-img1.png';
import newsimage2 from '../assets/news-img2.png';
import newsimage3 from '../assets/news-img3.png';
import newsimage4 from '../assets/news-img4.png';

export default function News() {
    const newsData = [
        {
            img: newsimage1,
            title: 'New Updates',
            tag: 'Product',
            date: 'May 21, 2025',
        },
        {
            img: newsimage2,
            title: 'New Updates',
            tag: 'Company',
            date: 'May 7, 2025',
        },
        {
            img: newsimage3,
            title: 'New Updates',
            tag: 'Product',
            date: 'May 7, 2025',
        },
        {
            img: newsimage4,
            title: 'New Updates',
            tag: 'Company',
            date: 'May 5, 2025',
        },
    ];

    return (
        <section className="news mt-20 h-auto">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-lg font-bold text-white">Latest News</h2>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-all duration-200">View all</a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {newsData.map((item, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="w-28 h-28 flex-shrink-0 rounded-md overflow-hidden">
                                <img src={item.img} alt={item.title} loading='lazy' className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-md">{item.title}</h3>
                                <p className="text-white/60 text-sm mt-1">
                                    <span className="font-medium">{item.tag}</span> &nbsp; {item.date}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
