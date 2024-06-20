import { useState } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {

    const year = new Date().getFullYear();
    const [email, setEmail] = useState('');

    return(
        <footer className="bg-zinc-900 flex flex-col h-max items-center py-10 md:py-16 space-y-14">
            <div className="flex justify-center items-center space-x-12 md:space-x-24 text-base md:text-lg text-white/90">
                <Link to="/photographers" aria-label="redirects you to the photographers page" className="hover:text-sky-600">Photographers</Link>
                <Link to="/gallery" aria-label="redirects you to the gallery page" className="hover:text-sky-600">Gallery</Link>
                <Link to="/contact" aria-label="redirects you to the contact page" className="hover:text-sky-600">Contact</Link>
            </div>
            <div>
                <p className="text-white/60 text-sm md:text-base">{`© ${year} BaileyKH. All Rights Reserved.`}</p>
            </div>
        </footer>
    );
}