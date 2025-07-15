import './App.css';
import PATHS from './Constants/Path';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';

function App() {
    return (
        <>
       
            <Header />
            <Routes>
             
                <Route path={PATHS.Home} element={<Home />} />
                <Route path={PATHS.Profile} element={<Profile />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
