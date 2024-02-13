"use client"

import Nav from "@/components/ui/navbar"
import { Image } from "@nextui-org/react"

const Oferta = () => {

    return (
            <main>

                <Nav/>
                <div className="px-14 z-10">
                    <div className="flex justify-center flex-col">
                        <div className="flex justify-center my-10">
                            <h1 className="text-5xl p-2 font-bold mb-4">Oferta</h1>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-col lg:flex-row lg:px-40 mb-6 lg:mb-14">
                                <div className="lg:w-3/5">
                                    <h1 className="lg:text-4xl font-bold lg:mb-4 ">Bezstresowa wizyta</h1>
                                    <p className="text-wrap lg:max-w-sm  w-max">Witaj w naszym gabinecie dentystycznym, gdzie dbamy nie tylko o zdrowie twojego uśmiechu, ale także o Twoje komfortowe doświadczenie podczas wizyty. Nasza praktyka jest miejscem, gdzie staramy się wykorzystać różnorodne metody, aby uczynić Twoją wizytę jak najbardziej przyjemną.</p>
                                </div>
                                <div className="lg:w-2/5">
                                    <Image
                                    src="/happyman.png"
                                    height={0}
                                    width={450}
                                    alt="ZadowolonyKlient"
                                    />                                
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:px-40">
                                <div className="lg:w-3/5">
                                    <h1 className="lg:text-4xl font-bold lg:w-2/4">Najnowocześniejsza technologia</h1>
                                    <p className="text-wrap lg:max-w-sm">W naszym gabinecie stomatologicznym wykorzystujemy najnowocześniejsze technologie, takie jak skanery 3D do precyzyjnego planowania leczenia oraz radiografię cyfrową, która zapewnia szybką analizę obrazów przy minimalnej dawce promieniowania. Dodatkowo, stosujemy laserową terapię, która umożliwia precyzyjne i mniej inwazyjne zabiegi, oraz systemy monitorowania stanu jamy ustnej, które pomagają wczesnym wykrywaniu problemów zdrowotnych. Dzięki tym innowacjom możemy zapewnić naszym pacjentom skuteczne i komfortowe leczenie stomatologiczne.</p>
                                </div>
                                <div className="lg:w-2/5">
                                    <Image
                                    src="/dentistroom.png"
                                    height={0}
                                    width={450}
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