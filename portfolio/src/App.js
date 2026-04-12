

import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import "./fonts/MADE TOMMY Regular.otf"
import Router from "./router/Router"



function App() {
  const [selectedRoute, setRoute] = useState({"route" : "/home"}) 
  
  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get("redirect");

  if (redirect) {
   window.history.pushState({}, "", redirect);
    setRoute({ route: redirect });
  } else {
    setRoute({ route: window.location.pathname || "/home" });
  }
}, []);

  return (
    <div className='main'>
      <title>portfolio</title>
      <Navbar onPageChange={(page) => { window.history.pushState({}, "", page);; setRoute({"route" : page})}} selectedRoute={selectedRoute.route} items={["Home", "Projects", "About"]}/>
      <Router onPageChange={(page) => {  window.history.pushState({}, "", page);;setRoute({"route": page})}} selectedRoute={selectedRoute.route}/>
    </div>
  
  );
}



export default App;
