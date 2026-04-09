import "./Icon.css";

function Icon({ 
    source, 
    originalColorSource,
    width = 100, 
    height = 100, 
    alt = "icon", 
    onClick = null, 
    color = null, 
    originalColorOnHover = false 
}) {

    const isMasked = !!color;
    
    const containerStyle = {
        width: `${width}px`,
        height: `${height}px`,
        "--icon-color": color,
        "--icon-url": `url(${source})`,
      
        "--hover-url": originalColorSource ? `url(${originalColorSource})` : `url(${source})`,
    };

    return (
        <div 
            className={`
                icon-wrapper 
                ${onClick ? "hoverable" : ""} 
                ${isMasked ? "masked" : ""} 
                ${originalColorOnHover ? "reveal-on-hover" : ""}
            `}
            style={containerStyle}
            onClick={onClick}
            title={alt}
        >
            <img 
                
                src={originalColorOnHover && originalColorSource ? originalColorSource : source} 
                alt={alt} 
                style={{ width: "100%", height: "100%", objectFit: "contain" }} 
            />
        </div>
    );
}

export default Icon;