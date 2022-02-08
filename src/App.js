import React from 'react';
import FaqPage from './screens/FAQ';
import HomeScreen from './screens/Home';
import Introductionpage from './screens/Introduction';
import RoadmapPage from './screens/Roadmap';
import { Routes ,Route } from 'react-router-dom';
import './App.css';

const App = () => {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="intro" element={<Introductionpage />} />
      <Route path="roadmap" element={<RoadmapPage />} />
      <Route path="faq" element={<FaqPage />} />
    </Routes>
    </>
  )
}

export default App