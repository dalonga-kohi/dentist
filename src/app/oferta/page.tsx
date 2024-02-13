import Nav from "@/components/ui/navbar"
import { Image } from "@nextui-org/react"


const Oferta = () => {

    return (
            <main>
                <Nav/> 
                <div className="px-14">
                    <div className="flex justify-center flex-col">
                        <div className="flex justify-center my-10">
                            <h1 className="text-4xl p-2 font-bold mb-4">Oferta</h1>
                        </div>
                        <div className="flex 2xl:flex-row px-40 md:flex-col">
                            <div className="w-3/5">
                                <h1 className="text-3xl font-bold smb-4">Bezstresowa wizyta</h1>
                                <p className="text-wrap max-w-sm">Witaj w naszym gabinecie dentystycznym, gdzie dbamy nie tylko o zdrowie twojego uśmiechu, ale także o Twoje komfortowe doświadczenie podczas wizyty. Nasza praktyka jest miejscem, gdzie staramy się wykorzystać różnorodne metody, aby uczynić Twoją wizytę jak najbardziej przyjemną.</p>
                            </div>
                            <div className="w-2/5">
                                <Image
                                src="/happyman.png"
                                height={0}
                                width={450}
                                alt="ZadowolonyKlient"
                                />                                
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    )

}

export default Oferta