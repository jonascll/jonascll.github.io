
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
    }, [onPageChange])
    switch(selectedRoute) {
        case "/home" : 
        return(<Home pageChange={(page) => onPageChange(page)}/>)
        
        case "/projects" :
            return(<Projects/>)
            
            case "/about":
                return(<About/>)
                
                default:
                    return(<h1 style={{paddingTop: "50px"}}>Page not found</h1>)
                   
    }
}



export default Router