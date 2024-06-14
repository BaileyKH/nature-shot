import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";


import homeHero from '/src/assets/images/home-hero.webp'
import groupPhoto from '/src/assets/images/group-photo.webp'
import { PhotoGrid } from "../components/PhotoGrid";

export const Home = () => {

    const parentRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.9, 
        };
    
        const observerCallback = (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              textRef.current.classList.add('tracking-in-contract', 'opacity-100');
            } else {
              textRef.current.classList.remove('tracking-in-contract', 'opacity-100');
            }
          });
        };
    
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const currentParent = parentRef.current;
        if (currentParent) {
          observer.observe(currentParent);
        }
    
        return () => {
          if (currentParent) {
            observer.unobserve(currentParent);
          }
        };
      }, []);

    return(
        <div>
            <div className="w-full h-full overflow-hidden custom-shadow rounded-b-3xl">
                <div className="flex items-center justify-center">
                    <img src={homeHero} width="2522px" className="brightness-75 rounded-b-3xl w-full" decoding="async"/>
                    <div className="absolute z-10">
                        <h1 className="font-bold text-6xl md:text-9xl text-white text-flicker-in-glow">NS</h1>
                    </div>
                </div>
            </div>
            <div ref={parentRef} className="bg-zinc-900 mt-12 md:mt-24 w-full">
                <div className="relative flex flex-col lg:flex-row p-8">
                    <div className="w-full lg:w-1/2 flex flex-grow">
                        <img src={groupPhoto} width="599px" height="393px" className="w-[700px] 2xl:w-[1400px] rounded-md shadow-lg" decoding="async" loading="lazy"/>
                    </div>
                    <div ref={textRef}>
                        <h2 className="absolute font-bold text-4xl md:text-6xl 2xl:text-8xl text-white/90 right-8 -top-5 md:-top-8 2xl:-top-14 drop-shadow-xl">Team</h2>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pl-0 lg:pl-6 mt-4 lg:mt-0 space-y-5 xl:space-y-12 2xl:space-y-14">
                        <h3 className="font-bold text-white/90 text-2xl md:text-3xl 2xl:text-5xl">Who is <span className="text-blue-900">Nature Shot</span> ?</h3>
                        <p className="text-white/90 text-sm md:text-base 2xl:text-2xl leading-7 md:leading-9 lg:leading-9 2xl:leading-10 tracking-wider">At Nature Shot, our team of passionate photographers travels the globe, dedicated to capturing the breathtaking beauty of the natural world. From majestic mountains to serene seascapes, our mission is to showcase the wonders of Mother Nature through stunning imagery. Join us as we explore and document the awe-inspiring landscapes that make our planet extraordinary.</p>
                        <div className="w-48 md:w-64">
                            <Link className="rounded-md w-full flex px-3.5 py-4 sm:text-sm md:text-lg 2xl:text-2xl overflow-hidden relative group cursor-pointer border-2 border-white/50 font-medium">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 translate-x-20 bg-blue-950 top-1/2 group-hover:h-64 group-hover:-translate-y-5 ease"></span>
                                <span className="relative ml-1 text-white/90 transition duration-300 ease">
                                    Explore Gallery
                                </span>
                                <span className="absolute right-0 mt-1 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                    <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <PhotoGrid/>
            <div className="bg-zinc-900 mt-4 mb-6 md:mt-8 md:mb-12">
                <Marquee className="text-white font-bold text-xl md:text-2xl 2xl:text-4xl tracking-wide h-16 md:h-20 2xl:h-28 space-x-4">
                    <p><span className="text-sky-600">Together</span> We Explore</p>
                    <p><span className="text-sky-600">Together</span> We Explore</p>
                    <p><span className="text-sky-600">Together</span> We Explore</p>
                    <p><span className="text-sky-600">Together</span> We Explore</p>
                    <p><span className="text-sky-600">Together</span> We Explore</p>
                </Marquee>
            </div>
        </div>
    );
}

