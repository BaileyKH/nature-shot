import React from 'react';

import { photos } from '/src/PhotoData.js';
import { useModal } from '/src/App.jsx';

export const PhotoGrid = () => {
    const { openModal } = useModal();

    return (
        <div className="mt-12 md:mt-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 auto-rows-auto">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className={`relative ${photo.span}`}
                        onClick={() => openModal(photo)}
                    >
                        <img src={photo.img} width="2000px" alt={photo.alt} className="w-full h-full rounded-md object-cover cursor-pointer" decoding="async" loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    );
};
