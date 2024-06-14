import { memo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery';

const MemoizedLayout = memo(Layout)

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MemoizedLayout />} >
            <Route index element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
