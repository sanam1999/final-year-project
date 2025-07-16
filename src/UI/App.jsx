import './index.css';
import Body from './Body.jsx'
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import './App.css';
import { useState } from 'react';

function App() {
  const [type, settype] = useState("Information Gathering");

  return (

     <Router>
  <div className="app-layout">
    <Header className="header" />
    <Sidebar className="sidebar" type={type} settype={settype} />
    <Body className="main" type={type}/>
  </div>
</Router>

  );
}

export default App;