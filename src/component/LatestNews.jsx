import LatestNewsImg from '../assets/latest-news.png';
import { Calendar, User } from "lucide-react"

export default function LatestNews() {
    return(
        <>
            <section className="latest-news mt-20 w-full transition-all duration-300">
                <div className="latest-news-content-container w-full bg-black max-w-7xl mx-auto">
                    <h1 className="latest-news-title max-w-2xl text-4xl max-md:text-3xl font-bold">Latest News</h1>
                    <div className="mt-5 text-white">
                        <p className="text-white/60 max-w-4xl text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper, congue VOUNDYER.</p>
                    </div>
                    <div className="latest-news-content relative aspect-[12/5] max-xl:aspect-[12/7] max-lg:aspect-[12/10] max-md:aspect-[16/14] max-sm:aspect-[16/19] max-xs:aspect-[16/26] max-3xs:aspect-[16-30] w-full rounded-md overflow-hidden mt-5">
                        <img 
                            src={LatestNewsImg}
                            alt="latest news"
                            loading='lazy'
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center md:py-10 p-6 text-white">
                            <div className='mt-auto flex flex-col gap-2'>
                                <div className="news-category p-1 px-4 bg-black/50 w-max rounded-3xl">
                                    <span className='text-sm'>Featured</span>
                                </div>
                                <h2 className="latest-news-content-span font-semibold text-base xs:text-lg md:text-2xl lg:text-3xl max-w-3xl xl:max-w-2xl lg:max-w-xl md:max-w-lg sm:max-w-md xs:max-w-sm text-left line-clamp-3">Lorem ipsum dolor sit amet, adipiscing elit dignissim sed VOUNDYER.</h2>
                                <p className='text-stone-300 max-w-2xl text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus nisi turpis, at egestas dignissim sed VOUNDYER.</p>
                                <div className='flex justify-start gap-2'>
                                    <div className='flex gap-1 text-stone-300 items-center'>
                                        <Calendar className='text-stone-300' size={20} />
                                        <span className='text-sm'>October 10, 2023</span>
                                    </div>
                                    <div className='flex gap-1 text-stone-300 items-center'>
                                        <User className='text-stone-300' size={20} />
                                        <span className='text-sm'>VOUNDYER Team</span>
                                    </div>
                                    <div className="news-category px-2 py-1 border w-max rounded-3xl flex items-center text-center text-stone-300">
                                        <span className='text-xs'>Product Launching</span>
                                    </div>
                                </div>
                            </div>
                            <button className="latest-news-content-button font-medium mt-auto bg-white/80 text-zinc-700 p-3 w-max h-auto cursor-pointer rounded-3xl hover:bg-white/90 transition-all duration-200 max-sm:text-xs max-md:text-sm max-md:p-2 max-lg:p-2">Read Full Article</button>                          
                        </div>                   
                    </div>    
                </div>
            </section>
        </>
    )
}