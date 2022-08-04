import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchProfile from './pages/SearchProfile';
import UserProfile from './pages/UserProfile';

function App() {
  const [dataProfile, setDataProfile] = useState({});
  return (

    <Routes>
      <Route exact path="/" element={<SearchProfile setDataProfile={setDataProfile} />} />
      <Route exact path="/profile" element={<UserProfile dataProfile={dataProfile} />} />
    </Routes>
  );
}

export default App;
