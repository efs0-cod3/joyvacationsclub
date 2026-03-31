import { Link } from 'react-router'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img
          src="/assets/img/girl-map-big.jpg"
          alt="Viajera explorando el mundo"
        />
      </div>

      <div className="hero__content">
        <p className="hero__label">Joy Vacations Club</p>

        <h1 className="hero__title">
          <span className="line line--1">Descubre</span>
          <span className="line line--2">experiencias</span>
          <span className="line line--3">inolvidables</span>
        </h1>

        <div className="hero__bottom">
          <p className="hero__sub">
            Viajes únicos diseñados para crear memorias que duran toda la vida.
            Desde el Caribe hasta los rincones históricos del mundo.
          </p>

          <div className="hero__actions">
            <Link to="/tours" className="hero__btn hero__btn--primary">
              Ver Destinos <span className="arrow">→</span>
            </Link>
            <Link to="/contacts" className="hero__btn hero__btn--ghost">
              Contactanos <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}

export default Hero
