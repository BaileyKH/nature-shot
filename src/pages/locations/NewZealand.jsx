import { useEffect } from "react";

export const NewZealand = () => {

    // Scrolls to top of div 'location' on transition between pages
    useEffect(()=>{
        const element = document.getElementById('location');
        const yCoordinate = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo(0, yCoordinate);
    },[])

    return(
        <div>
            <div id="location" className="flex flex-col items-center w-full mt-12 md:mt-24 space-y-2">
                <h2 className="font-bold text-4xl md:text-6xl 2xl:text-8xl text-white/90 drop-shadow-xl">New Zealand</h2>
                <p className="text-white/90 tracking-wide text-sm md:text-base 2xl:text-2xl drop-shadow-xl">From destinations all across New Zealand</p>
            </div>
        </div>
    );
}