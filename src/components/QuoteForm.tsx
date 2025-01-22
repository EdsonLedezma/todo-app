'use client'

import { useState } from 'react'
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { Label } from "~/components/ui/label"
import { motion } from 'framer-motion'

interface QuoteFormProps {
    service: string
}

export default function QuoteForm({ service }: QuoteFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        description: '',
        images: null as FileList | null,
        appointmentTime: '',
        landSize: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData(prevState => ({ ...prevState, images: e.target.files }))
        }
    }

    const handleSelectChange = (name: string, value: string) => {
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Aquí puedes agregar la lógica para enviar los datos del formulario
    }

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl font-bold mb-4 text-blm-400">Cotizar {service}</h2>
            <Input
                type="text"
                name="name"
                placeholder="Nombre completo"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <Input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <Input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleChange}
                required
            />
            <Input
                type="text"
                name="location"
                placeholder="Ubicación de la propiedad"
                value={formData.location}
                onChange={handleChange}
                required
            />
            {service === 'remodelación de interiores' && (
                <>
                    <Label htmlFor="images">Sube imágenes de tu hogar</Label>
                    <Input
                        id="images"
                        type="file"
                        name="images"
                        onChange={handleFileChange}
                        multiple
                        accept="image/*"
                    />
                    <Select onValueChange={(value) => handleSelectChange('appointmentTime', value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Horario para tu cita" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="morning">Mañana (9:00 - 12:00)</SelectItem>
                            <SelectItem value="afternoon">Tarde (13:00 - 17:00)</SelectItem>
                            <SelectItem value="evening">Noche (18:00 - 20:00)</SelectItem>
                        </SelectContent>
                    </Select>
                </>
            )}
            {service === 'construcción' && (
                <Input
                    type="text"
                    name="landSize"
                    placeholder="Medidas del terreno (m²)"
                    value={formData.landSize}
                    onChange={handleChange}
                    required
                />
            )}
            <Textarea
                name="description"
                placeholder={service === 'remodelación de interiores' ? "Describe lo que te gustaría hacer" : "Describe tu proyecto"}
                value={formData.description}
                onChange={handleChange}
                required
            />
            <Button type="submit" className="bg-blm-400 hover:bg-blm-300 text-white">Enviar cotización</Button>
        </motion.form>
    )
}

