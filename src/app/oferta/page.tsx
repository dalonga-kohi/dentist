"use client"

import Nav from "@/components/ui/navbar"
import Image from "next/image"

const Oferta = () => {

    return (
            <main>

                <Nav/>
                <div className="px-14 z-10">
                    <div className="flex justify-center flex-col">
                        <div className="flex justify-center my-10 relative">
                            <h1 className="text-5xl p-2 font-bold mb-4">Oferta
                            <div className="w-0 h-0 border-l-[18px] border-l-transparent border-t-[27.5px] border-t-blue-700 border-r-[18px] border-r-transparent absolute top-3/4"></div>
                            </h1>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-col lg:flex-row justify-center lg:px-40 mb-6 lg:mb-14">
                                <div className="w-full lg:w-3/5 flex flex-col items-center animate-slidein700 opacity-0">
                                    <h1 className="lg:text-4xl font-bold lg:mb-4 lg:text-center">Bezstresowa wizyta</h1>
                                    <p className="text-wrap w-full lg:w-2/4 lg:max-w-sm text-center">Witaj w naszym gabinecie dentystycznym, gdzie dbamy nie tylko o zdrowie twojego uśmiechu, ale także o Twoje komfortowe doświadczenie podczas wizyty. Nasza praktyka jest miejscem, gdzie staramy się wykorzystać różnorodne metody, aby uczynić Twoją wizytę jak najbardziej przyjemną.</p>
                                </div>
                                <div className="w-full lg:w-2/5 flex justify-center my-9 lg:m-0 items-center">
                                    <Image
                                    src="/happyman.png"
                                    height={0}
                                    width={550}
                                    className="rounded-xl"
                                    alt="ZadowolonyKlient"
                                    />                                
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:px-40">
                                <div className="lg:w-3/5 flex flex-col items-center animate-slidein700 opacity-0">
                                    <h1 className="lg:text-4xl font-bold lg:mb-4 lg:w-2/4 lg:text-center">Najnowocześniejsza technologia</h1>
                                    <p className="text-wrap w-full lg:w-2/4 lg:max-w-sm text-center">W naszym gabinecie stomatologicznym wykorzystujemy najnowocześniejsze technologie, takie jak skanery 3D do precyzyjnego planowania leczenia oraz radiografię cyfrową, która zapewnia szybką analizę obrazów przy minimalnej dawce promieniowania.</p>
                                </div>
                                <div className="w-full lg:w-2/5 flex justify-center my-9 lg:m-0 items-center animate-slidein700">
                                    <Image
                                        className="rounded-xl"
                                        src="/dentistroom.png"
                                        height={0}
                                        width={550}
                                        alt="ZadowolonyKlient"
                                    />                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    )

}

export default Oferta