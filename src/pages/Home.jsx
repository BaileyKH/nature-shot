import React from "react";

import homeHero from '/src/assets/images/home-hero.webp'

export const Home = () => {
    return(
        <div>
            <div className="w-full h-full overflow-hidden custom-shadow rounded-b-3xl">
                <img src={homeHero} width="2522px" className="relative brightness-75 rounded-b-3xl"/>
            </div>
        </div>
    );
}