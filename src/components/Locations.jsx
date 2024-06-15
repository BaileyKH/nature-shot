import { useEffect } from "react";
import { Link } from "react-router-dom";

import transitionHelper from "/src/transitionHelper.js";

import us from '/src/assets/images/gallery-us.webp'
import finland from '/src/assets/images/gallery-finland.webp'
import nz from '/src/assets/images/gallery-NZ.webp'
import japan from '/src/assets/images/gallery-japan.webp'

export const Locations = () => {

    // Scrolls to top of page on transition between pages
    useEffect(()=>{
        window.scrollTo(0, 0);
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

    return (
        <div>
            <div ref={parentRef} className="flex flex-col items-center w-full mt-12 md:mt-24 space-y-2">
                <h2 ref={textRef} className="font-bold text-4xl md:text-6xl 2xl:text-8xl text-white/90 drop-shadow-xl">Locations</h2>
                <p className="text-white/90 tracking-wide text-sm md:text-base 2xl:text-2xl drop-shadow-xl">From destinations all across the world</p>
            </div>
            <div className="grid grid-cols-2 auto-rows-auto gap-x-4 gap-y-10 md:gap-y-20 px-4 py-10 md:py-14">
                <div className="relative grid-cols-1 auto-rows-auto">
                    <Link to="us">
                        <img
                            src={us}
                            width="604px"
                            height="432px"
                            className="location-img"
                            alt="Scenic view of zion national park at sunset"
                            decoding="async"
                            loading="lazy"
                        />
                    </Link>
                    <p className="offset left-2">United States</p>
                </div>
                <div className="relative grid-cols-1 auto-rows-auto">
                    <Link to="finland">
                        <img
                            src={finland}
                            width="604px"
                            height="432px"
                            className="location-img"
                            alt="An open snowy field in finland with a cabin in the far distance"
                            decoding="async"
                            loading="lazy"
                        />
                    </Link>
                    <p className="offset right-2">Finland</p>
                </div>
                <div className="relative grid-cols-1 auto-rows-auto">
                    <Link to="nz">
                        <img
                            src={nz}
                            width="604px"
                            height="432px"
                            className="location-img"
                            alt="A valley within snowy topped mountains in New Zealand"
                            decoding="async"
                            loading="lazy"
                        />
                    </Link>
                    <p className="offset left-2">New Zealand</p>
                </div>
                <div className="relative grid-cols-1 auto-rows-auto">
                    <Link to="japan">
                        <img
                            src={japan}
                            width="604px"
                            height="432px"
                            className="location-img"
                            alt="Misty/foggy hillside located in Japan"
                            decoding="async"
                            loading="lazy"
                        />
                    </Link>
                    <p className="offset right-2">Japan</p>
                </div>
            </div>
        </div>
    );
};
