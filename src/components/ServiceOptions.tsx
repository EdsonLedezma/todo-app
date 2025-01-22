import ServiceOption from "./ServiceOption"
import { motion } from "framer-motion"

const services = [
    {
        title: "Remodelación de Interiores",
        description: "Renueva y actualiza los espacios interiores de tu hogar.",
        icon: "🏠",
    },
    {
        title: "Construcción",
        description: "Construye la casa de tus sueños desde cero.",
        icon: "🏗️",
    },
    {
        title: "Diseño de Casa Habitación",
        description: "Crea un diseño personalizado para tu hogar ideal.",
        icon: "✏️",
    },
    {
        title: "Ampliación",
        description: "Expande tu espacio actual con nuevas áreas.",
        icon: "🔨",
    },
]

export default function ServiceOptions() {
    return (
        <section id="servicios" className="py-20 bg-blm-100">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-center text-blm-400 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Nuestros Servicios
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ServiceOption {...service} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

