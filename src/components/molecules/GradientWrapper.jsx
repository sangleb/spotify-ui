export default function GradientWrapper({
    children, 
    fromColor='cyan-800', 
    viaColor='cyan-900', 
    toColor='black'
}){
    return(
        <div 
        className={`h-full overflow-y-auto bg-gradient-to-b from-cyan-800 via-cyan-900 to-black`}>
             {children}
        </div>
    )
}