

import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import "./fonts/MADE TOMMY Regular.otf"
import Router from "./router/Router"

function App() {
  const [selectedRoute, setRoute] = useState({"route" : "Home"}) 
  


  return (
    <div className='main'>
      <title>portfolio</title>
      <Navbar onPageChange={(page) => {setRoute({"route" : page})}} items={["Home", "Projects", "About"]}/>
      <Router selectedRoute={selectedRoute.route}/>
    </div>
  
  );
}



export default App;
