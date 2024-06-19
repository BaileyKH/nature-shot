import { useEffect } from "react";

import Marquee from "react-fast-marquee";

import { photographers1, photographers2 } from "../PhotoData";
import bg from '/src/assets/images/photographers-hero.webp'

export const Photographers = () => {

    // Scrolls to top of page on transition between pages
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    return(
        <div className="min-h-screen flex flex-col justify-center">
            <img src={bg} className="relative object-cover object-center h-screen brightness-50"/>
            <div className="absolute flex flex-col items-center w-full px-8 md:px-10">
                <div className="mb-8 w-[350px] text-center backdrop-blur-lg border border-white/50 p-2 md:p-4 rounded-md shadow-lg">
                    <h1 className="text-white/90 drop-shadow-lg text-2xl md:text-4xl font-bold tracking-wide mb-2 md:mb-4 underline underline-offset-4">Photographers</h1>
                    <p className="text-white/90 text-sm md:text-base">As this website is for demonstration purposes only, all images found on this site are from the incredible photographers below. They contributed to the unsplash community and rightfully so deserve recognition.</p>
                </div>
                <Marquee speed={30}>
                    <div className="flex space-x-4 mb-2">
                        {photographers1.map(photographer => (
                            <div className="flex bg-black/50 px-2 py-1 rounded-md border border-white/60">
                                <p className="text-white text-base md:text-lg">{photographer}</p>
                            </div>
                        ))}
                    </div>
                </Marquee>
                <Marquee direction="right" speed={30}>
                    <div className="flex space-x-4 mt-2">
                        {photographers2.map(photographer => (
                            <div className="flex bg-black/50 px-2 py-1 rounded-md border border-white/60">
                                <p className="text-white text-base md:text-lg">{photographer}</p>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    );
}