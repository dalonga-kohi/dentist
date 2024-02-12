const Hero = () => {
    return (
        // <div className="h-screen w-full relative">
        //     <div className="blur-sm w-full h-full opacity-60 absolute top-0 left-0 bg-center bg-cover" style={{backgroundImage: "url('hero.jpeg')"}}>
        //     </div>
        //     <div className="w-full p-8 bg-zinc-600 bg-opacity-70 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        //         <h1 className="text-4xl">
        //             Twoja przychodnia stomatologiczna!
        //         </h1>
        //         <p className="text-md">Przyjdź i uśmiechnij się jeszcze raz</p>
        //     </div>
        // </div>
        <div className="h-screen">
            <div className="relative after:absolute after:top-1/2 after:left-0 after:h-full after:w-full  w-full h-full" style={{backgroundImage: "url('hero.jpeg')"}}>

            </div>
        </div>
    )
}


export default Hero