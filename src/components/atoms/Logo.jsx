import LogoImage from "../../assets/image.png"


function Logo({width, height}){
    return (
        <div className="w-32 px-5 mb-5">
            <img 
                src="/src/assets/image.png"
                alt={LogoImage}
                className={`w-${width} h-${height}`}
            />
        </div>
    )
}

export default Logo;