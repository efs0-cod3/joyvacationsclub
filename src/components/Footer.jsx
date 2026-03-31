import { Link } from 'react-router'
import { BiLogoInstagramAlt } from 'react-icons/bi'
import { FaSquareWhatsapp } from 'react-icons/fa6'
import { FiMapPin } from 'react-icons/fi'

const Footer = () => {
  
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__links-col">
            <a
              href="https://www.instagram.com/joyvacationsclub/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoInstagramAlt /> @joyvacationsclub
            </a>
            <a
              href="https://wa.me/17742429893?text=Hola les hablo desde el website me gustaria agendar..."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareWhatsapp /> +1 (774) 242-9893
            </a>
            <address>
              <FiMapPin /> 38 Caryl Ave, Yonkers, NY 10705
            </address>
          </div>

          <div className="footer__brand">
            <Link to="/">
              <img
                src="/assets/logos/joy_vacation_club_logo.png"
                alt="Joy Vacations Club"
              />
            </Link>
          </div>

          <nav className="footer__nav-col">
            <Link to="/">Inicio</Link>
            <Link to="/tours">Destinos</Link>
            <Link to="/contacts">Contacto</Link>
          </nav>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © 2025 Joy Vacations Club. Todos los derechos reservados.
          </p>
          <ul className="footer__legal">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/contacts">Contacto</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
