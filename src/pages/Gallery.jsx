import { Outlet } from "react-router-dom";

import galleryHero from '/src/assets/images/gallery-hero.webp'

export const Gallery = () => {

    return(
        <div>
            <div className="w-full h-full overflow-hidden custom-shadow rounded-b-3xl">
                <div className="flex items-center justify-center">
                    <img src={galleryHero} width="1261px" height="710" className="brightness-75 rounded-b-3xl w-full" decoding="async"/>
                    <div className="absolute z-10">
                        <h1 className="font-bold text-6xl md:text-9xl tracking-wide text-white text-flicker-in-glow">Gallery</h1>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}