import Image from "next/image"

interface Props {
    url: string,
    posX: number,
    posY: number,
    scale?: number,
    rotation?: number
}

export default function Floating({url, posX, posY, scale = 1, rotation = 0}: Props) {
    return (
        <Image 
            src={url} alt="" aria-hidden width={50*scale} height={0}
            className='absolute opacity-80 z-0'
            style={{top: `${posY}%`, left: `${posX}%`, rotate: `${rotation}deg`}}
        />

    )
}