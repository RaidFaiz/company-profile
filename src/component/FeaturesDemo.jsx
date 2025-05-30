import featuredemoimg1 from '../assets/feature-demo1.png';
import featuredemoimg2 from '../assets/feature-demo2.png';
import featuredemoimg3 from '../assets/feature-demo3.png';
import featuredemoimg4 from '../assets/feature-demo4.png';


export default function News() {
    const newsData = [
        {
            img: featuredemoimg1,
            title: 'Feature\'s Title',
            descripction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet felis mattis, sagittis orci dictum, euismod nisl. Pellentesque sed gravida leo. Donec et nisi maximus, molestie felis ac, ornare ante. Donec bibendum consectetur mi, aliquam venenatis lorem congue ac. In ut sapien metus. Vivamus vestibulum odio ut bibendum sodales.' 
        },
        {
            img: featuredemoimg2,
            title: 'Feature\'s Title',
            descripction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet felis mattis, sagittis orci dictum, euismod nisl. Pellentesque sed gravida leo. Donec et nisi maximus, molestie felis ac, ornare ante. Donec bibendum consectetur mi, aliquam venenatis lorem congue ac. In ut sapien metus. Vivamus vestibulum odio ut bibendum sodales.'

        },
        {
            img: featuredemoimg3,
            title: 'Feature\'s Title',
            descripction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet felis mattis, sagittis orci dictum, euismod nisl. Pellentesque sed gravida leo. Donec et nisi maximus, molestie felis ac, ornare ante. Donec bibendum consectetur mi, aliquam venenatis lorem congue ac. In ut sapien metus. Vivamus vestibulum odio ut bibendum sodales.'
        },
        {
            img: featuredemoimg4,
            title: 'Feature\'s Title',
            descripction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet felis mattis, sagittis orci dictum, euismod nisl. Pellentesque sed gravida leo. Donec et nisi maximus, molestie felis ac, ornare ante. Donec bibendum consectetur mi, aliquam venenatis lorem congue ac. In ut sapien metus. Vivamus vestibulum odio ut bibendum sodales.'
        },
    ];

    return (
         <section className="featuresdemo mt-20 h-auto">
            <div className="featuresdemo-container max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-5 w-full">
                    <h2 className="text-lg font-bold w-full text-white max-md:text-center">Features</h2>
                </div>
                <div className="featuresdemo-content grid grid-cols-1 md:gap-10 gap-20">
                    {newsData.map((item, index) => (
                        <div key={index} className="flex md:flex-row flex-col gap-5 max-md:mx-10">
                            <div className="lg:w-70 lg:h-50 md:w-50 md:h-50 max-md:aspect-[16/10]  flex-shrink-0 rounded-md overflow-hidden">
                                <img src={item.img} alt={item.title} loading='lazy' className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-md max-md:text-center">{item.title}</h3>
                                <p className="text-white/60 text-sm mt-1 max-md:text-center">
                                    <span className="font-medium">{item.descripction}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
