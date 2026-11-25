// Datos de contacto. Se pueden sobrescribir con variables de entorno
// (VITE_WHATSAPP_PHONE = 10 dígitos sin el 1, VITE_PHONE_FORMATTED),
// pero si no existen se usan estos valores por defecto.
const rawPhone = (import.meta.env.VITE_WHATSAPP_PHONE || '7742429893').replace(/\D/g, '')

// Número completo para wa.me (con el código de país 1 de EE. UU.)
export const WHATSAPP_NUMBER = rawPhone.length === 10 ? `1${rawPhone}` : rawPhone

export const PHONE_FORMATTED = (
  import.meta.env.VITE_PHONE_FORMATTED || '+1 (774) 242-9893'
).replace(/;+\s*$/, '')
