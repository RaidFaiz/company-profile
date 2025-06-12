import introductionimg1 from '../assets/introduction-demo1.png';

export default function IntroductionDemo() {

  return (
    <section className="introduction-demo mt-20 w-full transition-all duration-300">
      <div className="introduction-demo-content-container w-full bg-black max-w-7xl mx-auto flex flex-col items-center justify-start">
        <h1 className="introduction-demo-title max-w-2xl text-4xl max-md:text-3xl text-center font-bold">Lorem ipsum dolor sit amet, consectetur elit. ullamcorper congue fermentum.</h1>
        <div className="mt-5 text-white">
            <p className="text-white/60 max-w-4xl text-md text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper, lacus eu congue fermentum, magna odio cursus magna, vitae elementum risus justo id neque. Suspendisse consectetur tincidunt mauris id efficitur. Morbi tellus ex, rhoncus at lorem eu, sodales mattis ante. Suspendisse elementum aliquet enim a interdum. Donec tempus molestie porttitor. Sed sollicitudin, dolor a faucibus ullamcorper, urna massa pulvinar metus, eu placerat diam metus eu nunc.</p>
        </div>
        <div className="video-placeholder relative aspect-[16/7] max-lg:aspect-[16/10] w-full rounded-md overflow-hidden mt-20">
          <img 
            src={introductionimg1}
            alt="Demo"
            loading='lazy'
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <button className="content-button bg-white/80 font-semibold py-2 px-4 w-max h-auto cursor-pointer rounded-3xl hover:bg-white/90 text-zinc-700 transition-all duration-200 mt-5">Try Now</button>
      </div>
    </section>
  )

}
