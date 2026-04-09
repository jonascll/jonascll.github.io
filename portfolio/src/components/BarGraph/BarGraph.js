import "./BarGraph.css"


function BarGraph({ width, height, borderColor, insideColor, progress, borderThickness = 2, label = "" , labelColor}) {

    return (
        <div className="outerBar" style={{ border: borderThickness + "px solid " + borderColor, width: width + "px", height: height + "px" , position:"relative"}}>
          
          
                <div className="innerBar" style={{ backgroundColor: insideColor, width: progress + "%", height: "100%" }}>
                      
                </div>
         <span className="barGraphLabel" style={{color: labelColor}}>{label}</span>
        </div>

    )
}

export default BarGraph
