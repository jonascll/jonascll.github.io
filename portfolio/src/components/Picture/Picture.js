import "./Picture.css"

function Picture({source, width = 100, height = 100, alt, circleShape = false, onClick=null, color = null}) {
  
   const maskStyles = color ? {
    backgroundColor: color,
    WebkitMaskImage: `url(${source})`,
    maskImage: `url(${source})`,
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
  } : {};
    return (<div style={{ width: width + "px", height: height + "px" }}>
      {color ? (
        
        <div
          title={alt}
          onClick={onClick}
          className={`${circleShape ? "circleImage" : "squareImage"} ${onClick ? "hoverable" : ""}`}
          style={{
            ...maskStyles,
            width: "100%",
            height: "100%",
            display: "inline-block"
          }}
        />
      ) : (
        
        <img
          src={source}
          onClick={onClick}
          className={`${circleShape ? "circleImage" : "squareImage"} ${onClick ? "hoverable" : ""}`}
          width={width}
          height={height}
          alt={alt}
        />
      )}
    </div>)
}


export default Picture