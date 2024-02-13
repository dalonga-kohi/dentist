"use client"
import Image from "next/image"
import { useRef } from "react"

interface Props {
    url: string,
    posX: number,
    posY: number,
    scale?: number,
    rotation?: number
    factor?: number
}

export default function Floating({url, posX, posY, scale = 1, rotation = 0, factor=3}: Props) {
    const ref = useRef<HTMLImageElement | null>(null)
    document.addEventListener('mousemove', e => {
        if(window.innerWidth < 1024) return
        const x = (window.innerWidth - e.pageX * factor) / 100;
        const y = (window.innerHeight - e.pageY * factor) / 100;

        if(ref.current) ref.current.style.transform = `translateX(${x}px) translateY(${y}px)`
    })

    return (
        <Image ref={ref}
            src={url} alt="" aria-hidden width={50*scale} height={0}
            className='absolute opacity-90 z-0'
            style={{top: `${posY}%`, left: `${posX}%`, rotate: `${rotation}deg`}}
        />

    )
}