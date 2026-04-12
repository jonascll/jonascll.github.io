
import Home from "../pages/homepage/Home"
import Projects from "../pages/projects/Projects"
import About from "../pages/about/About"
import { useEffect } from "react"

function Router({selectedRoute, onPageChange}) {

    useEffect(() => {
            const handleBrowserHistoryChange = (event) => {
                
                onPageChange(window.location.pathname)
            }
            window.addEventListener('popstate', handleBrowserHistoryChange)
            
        return () => {
            window.removeEventListener('popstate', handleBrowserHistoryChange)
        }
    }, [])
    switch(selectedRoute) {
        case "/home" : 
        return(<Home pageChange={(page) => onPageChange(page)}/>)
        
        case "/projects" :
            return(<Projects/>)
            
            case "/about":
                return(<About/>)
                
                default:
                    return(<Home pageChange={(page) => onPageChange(page)}/>)
                   
    }
}



export default Router