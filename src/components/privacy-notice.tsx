'use client'

import type React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '~/components/ui/card'
import { ScrollArea } from '~/components/ui/scroll-area'
import { Button } from '~/components/ui/button'

interface PrivacyNoticeProps {
    onAccept: () => void
}

const PrivacyNotice: React.FC<PrivacyNoticeProps> = ({ onAccept }) => {
    return (
        <Card className="w-full max-w-4xl mx-auto my-8">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                    Aviso de Privacidad y Confidencialidad
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                    <div className="space-y-4">
                        <section>
                            <h2 className="text-xl font-semibold mb-2">1. Introducción</h2>
                            <p>
                                Este Aviso de Privacidad y Confidencialidad (en adelante, el &quot;Aviso&quot;) se
                                emite en cumplimiento con la Ley Federal de Protección de Datos Personales en
                                Posesión de los Particulares y su Reglamento (en adelante, la &quot;Ley&quot;),
                                así como otras leyes y regulaciones aplicables en México.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2">2. Responsable del Tratamiento de Datos</h2>
                            <p>
                                [Nombre de la empresa/desarrollador] es responsable del tratamiento de sus datos
                                personales y de la protección de su privacidad en relación con el uso de nuestra
                                aplicación de notas y tareas (en adelante, la &quot;Aplicación&quot;).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2">3. Datos Personales Recolectados</h2>
                            <p>La Aplicación recolecta y procesa la siguiente información:</p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Información de la cuenta (correo electrónico, nombre de usuario)</li>
                                <li>Contenido de las notas y tareas creadas por el usuario</li>
                                <li>Información de uso y preferencias dentro de la Aplicación</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2">4. Finalidad del Tratamiento de Datos</h2>
                            <p>Sus datos personales serán utilizados para:</p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Proporcionar y mantener los servicios de la Aplicación</li>
                                <li>Mejorar y personalizar la experiencia del usuario</li>
                                <li>Enviar notificaciones relacionadas con el servicio</li>
                                <li>Cumplir con obligaciones legales</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2">5. Protección de Datos</h2>
                            <p>
                                Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger
                                sus datos personales contra el acceso no autorizado, alteración, divulgación o
                                destrucción, de conformidad con la Ley Federal de Protección de Datos Personales en
                                Posesión de los Particulares.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2">6. Derechos ARCO</h2>
                            <p>
                                Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus
                                datos personales (Derechos ARCO) de acuerdo con la Ley. Para ejercer estos derechos,
                                por favor contacte a [edsonmon985@gmail.com].
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2">7. Transferencia de Datos</h2>
                            <p>
                                No transferimos sus datos personales a terceros, excepto en los casos previstos por
                                la Ley o cuando sea necesario para la prestación de nuestros servicios, siempre con
                                su consentimiento.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2">8. Propiedad Intelectual</h2>
                            <p>
                                El contenido generado por los usuarios en la Aplicación está protegido por la Ley
                                Federal del Derecho de Autor. Los usuarios mantienen la propiedad de su contenido,
                                pero otorgan a la Aplicación una licencia no exclusiva para usar, almacenar y
                                procesar dicho contenido con el fin de proporcionar el servicio.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2">9. Deslinde de Responsabilidad Legal</h2>
                            <p>
                                La Aplicación se proporciona &quot;tal cual&quot; y &quot;según disponibilidad&quot;.
                                No garantizamos que la Aplicación esté libre de errores o que funcione sin
                                interrupciones. No nos hacemos responsables de cualquier daño directo, indirecto,
                                incidental, consecuente o especial que pueda surgir del uso o la imposibilidad de
                                uso de la Aplicación.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2">10. Cambios al Aviso de Privacidad</h2>
                            <p>
                                Nos reservamos el derecho de modificar este Aviso en cualquier momento. Cualquier
                                cambio será notificado a través de la Aplicación o por correo electrónico.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-2">11. Contacto</h2>
                            <p>
                                Si tiene alguna pregunta sobre este Aviso o sobre nuestras prácticas de privacidad,
                                por favor contacte a [edsonmon985@gmail.com].
                            </p>
                        </section>
                    </div>
                </ScrollArea>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button onClick={onAccept}>Aceptar</Button>
            </CardFooter>
        </Card>
    )
}

export default PrivacyNotice
