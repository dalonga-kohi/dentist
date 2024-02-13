import Floating from "./floating"
import Image from "next/image"
import InfoBox from "./infobox"

const Hero = () => {
    return (
        <div className="min-h-screen w-full text-center flex items-center justify-center mt-4 lg:-mt-14 p-4">
           <div className="w-full lg:w-1/2 h-full relative flex flex-col items-center justify-center">
                <h1 className="text-3xl p-2 font-bold mb-4 z-10">Twoja przychodnia stomatologiczna!</h1>
                <div>
                    <Image src="/Doctor.png" alt="Doktor" aria-hidden width={350} height={0} className="z-10"/>
                </div>
                <p className="text-xl font-medium mt-8">Uśmiechnij się pewny siebie wraz z nami</p>

                {/* Floating elements */}
                <Floating url="/caninie.png" posX={25} posY={50} scale={0.9} rotation={-25} factor={-3}/>
                <Floating url="/dental.png" posX={75} posY={20} scale={1.2} rotation={45} factor={5}/>
                <Floating url="/Prescr.png" posX={65} posY={40} rotation={5} factor={7}/>

                {/* Info boxes */}
                <InfoBox className="lg:absolute lg:top-2/4 xl:-right-24 lg:-right-48">
                    <h2 className="w-2/3">Mamy najlepsze opinie w okolicy</h2>
                    <Image src="/star.png" alt="złota gwiazda" width={60} height={0}/>
                </InfoBox>

                <InfoBox className="lg:absolute lg:top-[15%] xl:-left-10 lg:-left-48">
                    <h2 className="w-2/3">Rekorodowo szybka obsługa</h2>
                    <Image src="/grup.png" alt="Timer" width={60} height={0}/>
                </InfoBox>

           </div>
        </div>
    )
}


export default Hero