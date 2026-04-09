import "./Picture.css"

function Picture({ source, width = 100, height = 100, alt, circleShape = false, onClick = null, keepAspectRatio = false }) {

    const sharedClasses = `${circleShape ? "circleImage" : "squareImage"} ${onClick ? "hoverable" : ""}`;
   

    const containerStyle = {
        display: "inline-flex",
        justifyContent: "center",
        width: keepAspectRatio ? "auto" : `${width}px`,
        height: `${height}px`,
        verticalAlign: "middle",
        overflow: "hidden"
    };
    return (<div style={containerStyle}>


       

          
                <img
                    src={source}
                    className={sharedClasses}
                    width={keepAspectRatio ? "auto" : width}
                    height={height}
                    alt={alt}
                    style={{ display: "block" }}
                />
            

        
    </div>)
}


export default Picture