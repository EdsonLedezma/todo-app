"use client"

import React, { useState } from "react"
import PrivacyNotice from "./privacy-notice"

export default function PrivacyNoticeWrapper() {
    const [showPrivacyNotice, setShowPrivacyNotice] = useState(true)

    const handleAcceptPrivacyNotice = () => {
        setShowPrivacyNotice(false)
    }

    return (
        <>
            {showPrivacyNotice ? (
                <PrivacyNotice onAccept={handleAcceptPrivacyNotice} />
            ) : (
                <div className="text-center mt-8">
                    <h1 className="text-2xl font-bold">Bienvenido a la aplicación de notas</h1>
                    <p className="mt-4">Gracias por aceptar nuestro aviso de privacidad.</p>
                </div>
            )}
        </>
    )
}

