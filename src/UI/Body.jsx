import './App.css';
import {  PATHS } from './Constants/Path';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import WebVanarability from './Pages/WebAplication/Vanarability/vanarability';
function Body({type}) {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home type={type}/>} />
        <Route path="/Profile" element={<Profile />} />
         <Route path={PATHS.WebVanarability} element={<WebVanarability />} />
      </Routes>
    </>
  );
}

export default Body;

