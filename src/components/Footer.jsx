import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-blm-400 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <motion.div 
            className="w-full md:w-1/3 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-2">BLM Studio</h3>
            <p className="text-blm-100">Transformando espacios, creando hogares</p>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/3 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-2">Contacto</h4>
            <p className="text-blm-100">Email: info@blmstudio.com</p>
            <p className="text-blm-100">Teléfono: (123) 456-7890</p>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-2">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blm-100 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-blm-100 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-blm-100 hover:text-white transition-colors">Twitter</a>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="mt-8 text-center text-blm-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>&copy; 2023 BLM Studio. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}

