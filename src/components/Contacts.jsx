import { useState } from 'react'
import { useNavigate } from 'react-router'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import { BiLogoInstagramAlt } from 'react-icons/bi'
import { FaSquareWhatsapp } from 'react-icons/fa6'
import { FiMapPin, FiArrowLeft } from 'react-icons/fi'

const Contacts = () => {
  const navigate = useNavigate()
  const [sending, setSending] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setSending(true)

    emailjs
      .sendForm('service_0qnbd2d', 'template_0xpv5nd', e.target, {
        publicKey: 'Sbc5UpLfa7BKk2r2R',
      })
      .then(
        () => {
          Swal.fire({
            title: 'Gracias por tu mensaje.',
            text: 'Nos pondremos en contacto a la brevedad posible!',
            icon: 'success',
            background: '#0E0E12',
            color: '#F0EBE3',
            confirmButtonColor: '#C9A96E',
          })
          e.target.reset()
        },
        (error) => {
          console.error('EmailJS error:', error.text)
          Swal.fire({
            title: 'Error',
            text: 'No se pudo enviar el mensaje. Por favor intenta de nuevo.',
            icon: 'error',
            background: '#0E0E12',
            color: '#F0EBE3',
          })
        }
      )
      .finally(() => setSending(false))
  }

  return (
    <main className="contacts-page">
      <div className="contacts-page__left">
        <p className="contacts-page__eyebrow">Contáctanos</p>

        <h1 className="contacts-page__title">
          Hablemos de tu<br />
          <em>próxima aventura</em>
        </h1>

        <div className="contacts-page__info">
          <div className="contacts-page__info-item">
            <span className="icon"><BiLogoInstagramAlt /></span>
            <div className="details">
              <p className="lbl">Instagram</p>
              <p className="val">
                <a
                  href="https://www.instagram.com/joyvacationsclub/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @joyvacationsclub
                </a>
              </p>
            </div>
          </div>

          <div className="contacts-page__info-item">
            <span className="icon"><FaSquareWhatsapp /></span>
            <div className="details">
              <p className="lbl">WhatsApp</p>
              <p className="val">
                <a
                  href="https://wa.me/17742429893?text=Hola les hablo desde el website me gustaria agendar..."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +1 (774) 242-9893
                </a>
              </p>
            </div>
          </div>

          <div className="contacts-page__info-item">
            <span className="icon"><FiMapPin /></span>
            <div className="details">
              <p className="lbl">Dirección</p>
              <p className="val">38 Caryl Ave, Yonkers, NY 10705</p>
            </div>
          </div>
        </div>

        <button className="contacts-page__back" onClick={() => navigate('/')}>
          <FiArrowLeft className="arr" /> Volver al inicio
        </button>
      </div>

      <div className="contacts-page__right">
        <p className="contacts-page__form-eyebrow">Formulario</p>
        <h2 className="contacts-page__form-title">
          Envíanos un <em>mensaje</em>
        </h2>

        <form className="contact-form" onSubmit={sendEmail}>
          <div className="contact-form__field">
            <label htmlFor="from_name">Nombre completo</label>
            <input
              id="from_name"
              name="from_name"
              type="text"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="contact-form__field">
            <label htmlFor="from_email">Correo electrónico</label>
            <input
              id="from_email"
              name="from_email"
              type="email"
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="contact-form__field">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              placeholder="Cuéntanos sobre tu viaje ideal..."
              required
            />
          </div>

          <button type="submit" className="contact-form__submit" disabled={sending}>
            {sending ? 'Enviando...' : <>Enviar mensaje <span className="arrow">→</span></>}
          </button>
        </form>
      </div>
    </main>
  )
}

export default Contacts
