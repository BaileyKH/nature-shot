import React from 'react';
import { useModal } from '../App';

export const ImageModal = () => {
    const { selectedImage, modalOpen, closeModal } = useModal();

    if (!modalOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-20 p-4">
            <div className="relative mt-16">
                <button
                    onClick={closeModal}
                    className="absolute z-30 top-0 right-0 mt-2 mr-2 text-sky-600 text-2xl font-bold"
                >
                    &times;
                </button>
                <img src={selectedImage.img} alt={selectedImage.alt} className="w-[1000px] rounded-md shadow-lg" decoding="async" />
            </div>
        </div>
    );
};
