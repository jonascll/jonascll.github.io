
import Home from "../pages/homepage/Home"

function Router({selectedRoute}) {

    console.log(selectedRoute)
    switch(selectedRoute) {
        case "Home" : 
        return(<Home></Home>)
        
        case "Projects" :
            return(/*<Projects></Projects>*/ <span>Projects</span>)
            
            case "About":
                return(/*<About/>*/<span>About</span>)
                
                default:
                    return(<Home></Home>)
                   
    }
}

export default Router