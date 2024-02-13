import Floating from "./floating"
import Image from "next/image"

const Hero = () => {
    return (
        <div className="h-screen w-full text-center flex items-center justify-center -mt-8 p-4">
           <div className="w-full lg:w-1/2 h-full relative flex flex-col items-center justify-center">
                <h1 className="text-3xl p-2 font-bold mb-4 z-10">Twoja przychodnia stomatologiczna!</h1>
                <div>
                    <Image src="/Doctor.png" alt="Doktor" aria-hidden width={350} height={0} className="z-10"/>
                </div>
                <h2 className="text-xl font-medium mt-8">Uśmiechnij się pewny siebie wraz z nami</h2>

                {/* Floating elements */}
                <Floating url="/caninie.png" posX={25} posY={60} scale={0.9} rotation={-25}/>
                <Floating url="/dental.png" posX={85} posY={20} scale={1.2} rotation={45}/>
                <Floating url="/Prescr.png" posX={65} posY={40} rotation={5}/>
           </div>
        </div>
    )
}


export default Hero