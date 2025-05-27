
export default function Features() {
    const featuresData = [
        {
            img: 'features-img1.png',
            title: 'Feature Content',
            date: 'May 5, 2025',
        },
        {
            img: 'features-img2.png',
            title: 'Feature Content',
            date: 'May 5, 2025',
        },
        {
            img: 'features-img3.png',
            title: 'Feature Content',
            date: 'May 5, 2025',
        },
    ]

  return (
    <section className="overview-features mt-20 w-full transition-all duration-300">
      <div className="overview-features-container max-w-7xl mx-auto bg-black flex flex-col md:flex-row md:gap-5">
        
        {/* Overview (Sticky on desktop) */}
        <div className="overview w-full md:w-2/3">
          <div className="md:sticky md:top-20">
            <h2 className="text-lg font-bold text-white mb-5">Overview</h2>
            <div className="rounded-md overflow-hidden aspect-video max-md:aspect-[16/10]">
              <img
                src="overview.png"
                alt="Product 1"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features (Scrolls independently on desktop) */}
        <div className="features w-full md:w-1/3 mt-10 md:mt-0">
          <h2 className="text-lg font-bold text-white mb-5">Features</h2>
          <div className="grid grid-cols-1 gap-5">
            {featuresData.map((item, index) => (
              <div key={index} className="rounded-md overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto object-cover rounded-md"
                />
                <div className="mt-2 flex-col items-start">
                    <h3 className="features-content-title text-white font-semibold text-md">{item.title}</h3>
                    <p className="text-white/60 text-sm mt-1">
                        <span className="font-medium">{item.date}</span>
                    </p>                   
                </div>            
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
