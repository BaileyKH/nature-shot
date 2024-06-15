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

const MemoizedLayout = memo(Layout)

function App() {

  return (
    <>
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
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
