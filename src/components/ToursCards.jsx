import toursData from '../data/toursData'
import { Link } from 'react-router'

const ToursCards = () => {
  return (
    <section className="tours-section">
      <div className="tours-section__header">
        <div>
          <p className="tours-section__kicker">Destinos seleccionados</p>
          <h2 className="tours-section__title">
            Nuestros <em>viajes</em>
          </h2>
        </div>
        <span className="tours-section__count">
          {String(toursData.length).padStart(2, '0')}
        </span>
      </div>

      {toursData.map((tour, idx) => (
        <article
          key={tour.id}
          className={`tour-card${idx % 2 !== 0 ? ' tour-card--reverse' : ''}`}
        >
          <div className="tour-card__img-wrap">
            <span className="tour-card__img-wrap__tag">Disponible</span>
            <img src={tour.image} alt={tour.title} />
          </div>

          <div className="tour-card__info">
            <span className="tour-card__num">
              {String(idx + 1).padStart(2, '0')}
            </span>

            <h3 className="tour-card__title">{tour.title}</h3>

            <p className="tour-card__desc">{tour.description}</p>

            <div className="tour-card__meta">
              <div className="tour-card__price">
                <span className="lbl">Desde</span>
                <span className="val">
                  <span className="cur">USD </span>
                  {tour.price.toLocaleString('en-US')}
                </span>
              </div>
              <div className="tour-card__dur">
                <span className="lbl">Duración</span>
                <span className="val">{tour.duration}</span>
              </div>
            </div>

            <Link to="/contacts" className="tour-card__cta">
              Reservar ahora <span className="arrow">→</span>
            </Link>
          </div>
        </article>
      ))}
    </section>
  )
}

export default ToursCards
