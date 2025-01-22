import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
    return (
        <motion.header
            className="bg-blm-100 shadow-sm"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-blm-400">
                    BLM Studio
                </Link>
                <div className="space-x-4">
                    <Link href="#servicios" className="text-blm-300 hover:text-blm-400 transition-colors">
                        Servicios
                    </Link>
                    <Link href="#contacto" className="text-blm-300 hover:text-blm-400 transition-colors">
                        Contacto
                    </Link>
                </div>
            </nav>
        </motion.header>
    )
}

