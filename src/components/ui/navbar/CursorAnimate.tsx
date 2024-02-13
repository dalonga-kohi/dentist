"use client"

import gsap from "gsap"
import React, { useEffect, useRef } from "react"

const CustomCursor = () => {
    const $follower = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const xTo = gsap.quickTo($follower.current, "x", {
                duration: 0.6,
                ease: "power3",
            })

            const yTo = gsap.quickTo($follower.current, "y", {
                duration: 0.6,
                ease: "power3",
            })

            window.addEventListener("mousemove", (e) => {
                xTo(e.clientX)
                yTo(e.clientY)
            })

            return () =>
                window.removeEventListener("mousemove", (e) => {
                    xTo(e.clientX)
                    yTo(e.clientY)
                })
        })

        return () => {
            ctx.revert()
        }
    }, [])

    return (
        <div>
            <div
                ref={$follower}
                className="pointer-events-none fixed left-0 top-0 aspect-square w-[3vmin] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full will-change-transform z-0"
            >
                <div className="h-full w-full animate-spin-slow bg-gradient-to-r from-cyan-700 to-amber-600"></div>
            </div>
        </div>
    )
}

export default CustomCursor