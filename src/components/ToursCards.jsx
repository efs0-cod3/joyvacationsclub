import toursData from '../data/toursData'
import { Link } from 'react-router'
import TourGallery from './TourGallery'

const ToursCards = () => {
  return (
    <section className="tours-section" id="destinos">
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
            {tour.viatorUrl ? (
              <a
                href={tour.viatorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tour-card__img-wrap__tag tour-card__img-wrap__tag--link"
              >
                Reserva en Viator ↗
              </a>
            ) : (
              <span className="tour-card__img-wrap__tag">Disponible</span>
            )}
            {tour.images?.length || tour.image ? (
              <TourGallery
                images={tour.images?.length ? tour.images : [tour.image]}
                title={tour.title}
              />
            ) : (
              <div className="tour-card__img-fallback" aria-hidden="true">
                <span>{tour.location || tour.title}</span>
              </div>
            )}
          </div>

          <div className="tour-card__info">
            <span className="tour-card__num">
              {String(idx + 1).padStart(2, '0')}
            </span>

            {tour.location && (
              <p className="tour-card__location">{tour.location}</p>
            )}

            <h3 className="tour-card__title">{tour.title}</h3>

            <p className="tour-card__desc">{tour.description}</p>

            <div className="tour-card__meta">
              <div className="tour-card__price">
                <span className="lbl">Desde</span>
                {tour.price != null ? (
                  <span className="val">
                    <span className="cur">USD </span>
                    {tour.price.toLocaleString('en-US')}
                  </span>
                ) : (
                  <span className="val val--small">Ver en Viator</span>
                )}
              </div>
              {tour.duration && (
                <div className="tour-card__dur">
                  <span className="lbl">Duración</span>
                  <span className="val">{tour.duration}</span>
                </div>
              )}
            </div>

            {tour.viatorUrl ? (
              <a
                href={tour.viatorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tour-card__cta"
              >
                Reservar en Viator <span className="arrow">↗</span>
              </a>
            ) : (
              <Link to="/contacts" className="tour-card__cta">
                Reservar ahora <span className="arrow">→</span>
              </Link>
            )}
          </div>
        </article>
      ))}
    </section>
  )
}

export default ToursCards
