import React, { createContext, useContext, useState } from 'react';

import { memo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery';
import { UnitedStates } from './pages/locations/UnitedStates';
import { Locations } from './components/Locations';
import { Finland } from './pages/locations/Finland';
import { NewZealand } from './pages/locations/NewZealand';
import { Japan } from './pages/locations/Japan';
import { Contact } from './pages/Contact';
import { ImageModal } from '/src/components/ImageModal.jsx'
import { Photographers } from './pages/Photographers';


const ModalContext = createContext();

export const useModal = () => {
    return useContext(ModalContext);
};

const MemoizedLayout = memo(Layout)

function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (src) => {
      setSelectedImage(src);
      setModalOpen(true);
  };

  const closeModal = () => {
      setSelectedImage(null);
      setModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ selectedImage, modalOpen, openModal, closeModal }}>
      <Router>
        <Routes>
          <Route path="/" element={<MemoizedLayout />} >
            <Route index element={<Home />} />
            <Route path="/gallery" element={<Gallery />} >
              <Route index element={<Locations />} />
              <Route path="us" element={<UnitedStates />} />
              <Route path="finland" element={<Finland />}/>
              <Route path="nz" element={<NewZealand />}/>
              <Route path="japan" element={<Japan />}/>
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/photographers" element={<Photographers />} />
          </Route>
        </Routes>
        <ImageModal />
      </Router>
    </ModalContext.Provider>
  )
}

export default App
