import { useEffect } from "react";

import transitionHelper from "/src/transitionHelper.js";

export const UnitedStates = () => {

    // Scrolls to top of div 'location' on transition between pages
    useEffect(()=>{
        const element = document.getElementById('location');
        const yCoordinate = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo(0, yCoordinate);
    },[])

    // Helper Functions for text animation
    const handleIntersection = (entry, textRef) => {
        if (entry.isIntersecting) {
          textRef.current.classList.add('tracking-in-contract', 'opacity-100');
        } else {
          textRef.current.classList.remove('tracking-in-contract', 'opacity-100');
        }
    };
    
    const { parentRef, textRef } = transitionHelper(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.9,
    });

    return(
        <div>
            <div id="location" ref={parentRef} className="flex flex-col items-center w-full mt-12 md:mt-24 space-y-2">
                <h2 ref={textRef} className="font-bold text-4xl md:text-6xl 2xl:text-8xl text-white/90 drop-shadow-xl">United States</h2>
                <p className="text-white/90 tracking-wide text-sm md:text-base 2xl:text-2xl drop-shadow-xl">From destinations all across the US</p>
            </div>
        </div>
    );
}