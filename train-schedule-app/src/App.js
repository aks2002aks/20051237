import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllTrainsPage from './pages/AllTrainsPage';
import SingleTrainPage from './pages/SingleTrainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllTrainsPage />} />
        <Route path="/trains/:trainNumber" element={<SingleTrainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
