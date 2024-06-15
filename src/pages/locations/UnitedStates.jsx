import { useEffect } from "react";

import { usPhotos } from "/src/pages/locations/USPhotoData.js";

export const UnitedStates = () => {

    // Scrolls to top of div 'location' on transition between pages
    useEffect(()=>{
        const element = document.getElementById('location');
        const yCoordinate = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo(0, yCoordinate);
    },[])

    return(
        <div>
            <div id="location" className="flex flex-col items-center w-full mt-12 md:mt-24 space-y-2">
                <h2 className="font-bold text-4xl md:text-6xl 2xl:text-8xl text-white/90 drop-shadow-xl">United States</h2>
                <p className="text-white/90 tracking-wide text-sm md:text-base 2xl:text-2xl drop-shadow-xl">From destinations all across the US</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-auto gap-5 p-4 mt-3 md:mt-6">
                {usPhotos.map((photo, index) => (
                    <div id={index} key={index} className="col-span-1 row-span-1">
                        <img src={photo} width="295px" height="197px" className="rounded-md w-full"/>
                    </div>
                ))}
            </div>
        </div>
    );
}