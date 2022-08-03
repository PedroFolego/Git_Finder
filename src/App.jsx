import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchProfile from './pages/SearchProfile';

function App() {
  const [urlProfile, setUrlProfile] = useState('');
  return (

    <Routes>
      <Route exact path="/" element={<SearchProfile setUrlProfile={setUrlProfile} urlProfile={urlProfile} />} />
      {/* <Route exact path="/profile" element={<SearchProfile />}/> */}
    </Routes>
  );
}

export default App;
