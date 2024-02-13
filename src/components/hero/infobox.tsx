import { PropsWithChildren } from 'react'

interface Props {
    className: string
}

export default function InfoBox({children, className}: PropsWithChildren<Props>) {
    return (
        <div className={`${className} rounded-lg bg-blue-100 px-8 py-4 text-gray-950 font-semibold shadow-md text-xl mt-8 flex text-left max-w-xs justify-between`}>
            {children}
        </div>
    )
}