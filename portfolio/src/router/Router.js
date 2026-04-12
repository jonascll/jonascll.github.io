
import Home from "../pages/homepage/Home"
import Projects from "../pages/projects/Projects"
import About from "../pages/about/About"

function Router({selectedRoute, onPageChange}) {

    console.log(selectedRoute)
    switch(selectedRoute) {
        case "#/home" : 
        return(<Home pageChange={(page) => onPageChange(page)}/>)
        
        case "#/projects" :
            return(<Projects/>)
            
            case "#/about":
                return(<About/>)
                
                default:
                    return(<Home pageChange={(page) => onPageChange(page)}/>)
                   
    }
}



export default Router