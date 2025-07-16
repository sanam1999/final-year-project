import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
function Body({type}) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home type={type}/>} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default Body;

