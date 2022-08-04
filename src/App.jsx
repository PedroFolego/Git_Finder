import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchProfile from './pages/SearchProfile';
import UserProfile from './pages/UserProfile';

function App() {
  const [urlProfile, setUrlProfile] = useState('');
  return (

    <Routes>
      <Route exact path="/" element={<SearchProfile setUrlProfile={setUrlProfile} urlProfile={urlProfile} />} />
      <Route exact path="/profile" element={<UserProfile />} />
    </Routes>
  );
}

export default App;
