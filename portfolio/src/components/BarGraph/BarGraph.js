import { useRef, useState, useEffect} from "react"
import "./BarGraph.css"
import { useIsVisible } from "../../utils/utils";


function BarGraph({ width, height, borderColor, insideColor = "rgb(255,255,255)",insideColorSecond = "rgb(0,0,0)", progress, borderThickness = 2, label = "" , labelColor, borderRadius=25, useGradient}) {
    const innerBarRef = useRef();
    const visible = useIsVisible(innerBarRef)
    const [shouldShowProgress, setShouldShowProgress] = useState(false);
    const [shouldHideGlow, setShouldHideGlow] = useState(false);

    const handleTransitionEnd = () => {
       
            setShouldHideGlow(true)
        
       
    }
    useEffect(() => {
       
        if (visible) {
            
            const timeout = setTimeout(() => {
                setShouldShowProgress(true);
            }, 50); 
            return () => clearTimeout(timeout);
        } else {
             setShouldShowProgress(false);
             setShouldHideGlow(false)
        }
    }, [visible]);
    return (
        <div ref={innerBarRef} className="outerBar" style={{ border: borderThickness + "px solid " + borderColor, width: width + "px", height: height + "px" , position:"relative" , borderRadius: borderRadius + "px"}}>
          
          
                <div onTransitionEnd={handleTransitionEnd}  className={`${shouldShowProgress ? "innerBarVisible" : "innerBarHidden"}`} style={{  width: shouldShowProgress === true ? `${progress}%` : "0%", height: "100%", background: `${useGradient? "linear-gradient(to bottom," + insideColor + "0%," + insideColorSecond + "100%)" : insideColor}`}}>
                      
                </div>
                <div className={`glowBase ${!shouldHideGlow ? "glowVisible" : "glowHidden"}`} />
         <span className="barGraphLabel" style={{color: labelColor}}>{label}</span>
        </div>

    )
}

export default BarGraph


