import { Button } from "~/components/ui/button"
import Link from 'next/link'

interface ServiceOptionProps {
    title: string
    description: string
    icon: string
}

export default function ServiceOption({ title, description, icon }: ServiceOptionProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center h-full">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-blm-400">{title}</h3>
            <p className="text-blm-300 mb-4 flex-grow">{description}</p>
            <Button asChild className="bg-blm-400 hover:bg-blm-300 text-white">
                <Link href={`/cotizar/${title.toLowerCase().replace(/ /g, '-')}`}>
                    Cotizar
                </Link>
            </Button>
        </div>
    )
}

