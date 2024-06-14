import { useState } from "react";

export const ImageModal = ({ src, isOpen, onClose }) => {

    if (!isOpen) return null

    return(
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-20 p-4">
            <div className="relative">
                <button
                    onClick={onClose}
                    className="absolute z-30 top-0 right-0 mt-2 mr-2 text-sky-600 text-2xl font-bold"
                >
                    &times;
                </button>
                <img src={src} alt="Enlarged view" className="w-[1000px] shadow-lg"  decoding="async"/>
            </div>
        </div>    
    );
}