import "./Button.css"

function Button({text, width = 100, height = 60, onClick}){
    return(
        <button onClick={onClick} style={{width: width + "px", height: height + "px"}}>{text}</button>
   )
}


export default Button