import { useState } from "react";

import { photos } from "../PhotoData";
import { ImageModal } from "./ImageModal";

const photoGrid = [
    { src: photos[0], span: 'sm:row-span-2' },
    { src: photos[1], span: '' },
    { src: photos[2], span: '' },
    { src: photos[3], span: '' },
    { src: photos[4], span: '' },
    { src: photos[5], span: 'sm:row-span-2' },
    { src: photos[6], span: 'sm:col-span-2 row-span-2' },
]

export const PhotoGrid = () => {

    const [selectedImage, setSelectedImage] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)

    function openModal(src) {
        setSelectedImage(src)
        setModalOpen(true)
    }

    function closeModal() {
        setSelectedImage(null)
        setModalOpen(false)
    }

    return (
        <div className="mt-12 md:mt-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 auto-rows-auto">
            {photoGrid.map((photo, index) => (
                <div
                key={index}
                className={`relative ${photo.span}`}
                onClick={() => openModal(photo.src)}
                >
                <img src={photo.src} width="2000px" alt={`Photo ${index + 1}`} className="w-full h-full object-cover cursor-pointer" decoding="async" loading="lazy"/>
                </div>
            ))}
            </div>
            <ImageModal src={selectedImage} isOpen={modalOpen} onClose={closeModal} />
        </div>    
    );
};
