

import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import "./fonts/MADE TOMMY Regular.otf"
import Router from "./router/Router"



function App() {
  const [selectedRoute, setRoute] = useState({"route" : "/home"}) 
  
  useEffect(() => {
    window.location.hash = "/home"
  }, [])

  return (
    <div className='main'>
      <title>portfolio</title>
      <Navbar onPageChange={(page) => {window.location.hash = page; setRoute({"route" : page})}} selectedRoute={selectedRoute.route} items={["Home", "Projects", "About"]}/>
      <Router onPageChange={(page) => {window.location.hash = page;setRoute({"route": page})}} selectedRoute={selectedRoute.route}/>
    </div>
  
  );
}



export default App;
