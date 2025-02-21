/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BasicExample from './componenti/BasicExample'; 
import Professori from './componenti/Professori';
import Ordinari from './componenti/Ordinari';
import Associato from './componenti/Associato';
import Ricercatori from './componenti/Ricercatori';
import Home from './componenti/Home';

const App = () => {
  return (
    <>
      <BasicExample></BasicExample>
      <Router>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/professori" element={<Professori />} />
          <Route path="/ordinari" element={<Ordinari />} />
          <Route path="/associati" element={<Associato />} />
          <Route path="/ricercatori" element={<Ricercatori />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
