

import { useEffect, useState, useCallback } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import "./fonts/MADE TOMMY Regular.otf"
import Router from "./router/Router"



function App() {
  const [selectedRoute, setRoute] = useState({"route" : "/home"}) 
   const handlePageChange = useCallback((route) => {
    window.history.pushState({}, "", route)
    setRoute({ route });
  }, []);

  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get("redirect");

  if (redirect) {
    window.history.replaceState({}, "", redirect);
    setRoute({ route: redirect });
  } else {
    const path = window.location.pathname;

    if (path === "/") {
      window.history.replaceState({}, "", "/home");
      setRoute({ route: "/home" });
    } else {
      setRoute({ route: path });
    }
  }
}, []);

  return (
    <div className='main'>
      <title>portfolio</title>
      <Navbar onPageChange={handlePageChange} selectedRoute={selectedRoute.route} items={["Home", "Projects", "About"]}/>
      <Router onPageChange={handlePageChange} selectedRoute={selectedRoute.route}/>
    </div>
  
  );
}



export default App;
