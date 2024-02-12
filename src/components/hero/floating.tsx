import Image from "next/image"

interface Props {
    url: string,
    posX: number,
    posY: number,
}

export default function Floating({url, posX, posY}: Props) {
    return (
        <Image 
            src={url} alt="" aria-hidden width={50} height={0}
            className="absolute top-0"
        />

    )
}