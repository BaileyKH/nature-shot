import React, { useEffect } from 'react';
import { useModal } from '../App';

export const ImageModal = () => {
    const { selectedImage, modalOpen, closeModal } = useModal();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (event.target.className.includes('modal-background')) {
                closeModal();
            }
        };

        if (modalOpen) {
            document.addEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [modalOpen, closeModal]);

    if (!modalOpen) return null;

    return (
        <div className="modal-background fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-20 p-4">
            <div className="relative mt-16">
                <img
                    src={selectedImage.img}
                    alt={selectedImage.alt}
                    className="w-[1000px] rounded-md shadow-lg"
                    decoding="async"
                />
            </div>
        </div>
    );
};
