"use client"

import Hero from "@/components/hero"
import Nav from "@/components/ui/navbar"
import Comments from "@/components/ui/navbar/Comments"
import { NextUIProvider } from "@nextui-org/react"

export default function Home() {
    return (
        <NextUIProvider>
            <Nav />
            <Hero />
            <Comments />
        </NextUIProvider>
    )
}