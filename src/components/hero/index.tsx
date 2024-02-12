import Floating from "./floating"
import Image from "next/image"

const Hero = () => {
    return (
        <div className="h-screen w-full relative flex-col text-center flex items-center justify-center">
            <h1 className="text-3xl p-2 font-bold mb-4">Twoja przychodnia stomatologiczna!</h1>
            <div>
                <Image src="/Doctor.png" alt="Doktor" aria-hidden width={350} height={0}/>
            </div>
            <h2 className="text-xl font-medium mt-8">Uśmiechnij się jeszcze raz</h2>

            {/* Floating elements */}
            <Floating url="/caninie.png" posX={1} posY={2}/>
            <Floating url="/dental.png" posX={1} posY={2}/>
        </div>
    )
}


export default Hero