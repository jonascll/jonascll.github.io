

import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import "./fonts/MADE TOMMY Regular.otf"
import Router from "./router/Router"



function App() {
  const [selectedRoute, setRoute] = useState({"route" : "/home"}) 
  


  return (
    <div className='main'>
      <title>portfolio</title>
      <Navbar onPageChange={(page) => {window.history.replaceState({},"", page); setRoute({"route" : page})}} selectedRoute={selectedRoute.route} items={["Home", "Projects", "About"]}/>
      <Router onPageChange={(page) => {window.history.replaceState({},"", page);setRoute({"route": page})}} selectedRoute={selectedRoute.route}/>
    </div>
  
  );
}



export default App;
