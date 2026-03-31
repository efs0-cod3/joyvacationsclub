import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <Link to="/">
        <img
          src="/assets/logos/joy_vacation_club_logo.png"
          alt="Joy Vacations Club"
          className="navbar__logo"
        />
      </Link>

      <ul className="navbar__links">
        <li>
          <Link to="/" className={`navbar__link${pathname === '/' ? ' active' : ''}`}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/tours" className={`navbar__link${pathname === '/tours' ? ' active' : ''}`}>
            Destinos
          </Link>
        </li>
        <li>
          <Link to="/contacts" className="navbar__cta">
            Contactanos
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
