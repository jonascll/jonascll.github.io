import Button from "../../components/Button/Button"
import "./Home.css"




function Home({pageChange}) {
    return(
        <div>
            <h1>Home</h1>
            <Button onClick={() => pageChange("Projects")} width={180} height={60} text={"View my projects"}/>
                <Button onClick={() => pageChange("About")} text={"hello dani love"}/>
        </div>
        
    )
}


export default Home