import { memo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';

const MemoizedLayout = memo(Layout)

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MemoizedLayout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
