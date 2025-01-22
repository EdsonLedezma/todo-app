import { Button } from "~/components/ui/button"
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="bg-blm-200 py-20">
            <div className="container mx-auto px-4 text-center">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-blm-400 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Transforma tu espacio con BLM Studio
                </motion.h1>
                <motion.p
                    className="text-xl text-blm-300 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Remodelaciones, construcciones, diseño y ampliaciones personalizadas para tu hogar
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Button asChild className="bg-blm-400 hover:bg-blm-300 text-white">
                        <a href="#servicios">Explora nuestros servicios</a>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}

