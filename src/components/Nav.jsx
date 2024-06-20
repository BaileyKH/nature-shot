import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
    return(
        <nav className="fixed z-50 top-2 md:top-4 flex justify-center items-center w-full">
            <div className="flex justify-between items-center w-80 md:w-[600px] px-2 md:px-4 py-1 md:py-2 backdrop-blur-lg border-2 rounded-3xl border-white/50">
                <div className="">
                    <Link to="/" aria-label="redirects you to the home page" className="text-white/90 text-sm md:text-base">Nature Shot</Link>
                </div>
                <div className="flex space-x-3">
                    <Link to="/gallery" aria-label="redirects you to the gallery page" className="nav-links border-x border-white/50 px-3">Gallery</Link>
                    <Link to="/contact" aria-label="redirects you to the contact page" className="nav-links">Contact</Link>
                </div>
            </div>
        </nav>
    );
}