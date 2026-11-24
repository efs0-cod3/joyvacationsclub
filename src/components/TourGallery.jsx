/* eslint-disable react/prop-types */
import { useState } from 'react'

// Muestra una o varias fotos. Con más de una, añade flechas y puntos.
const TourGallery = ({ images, title }) => {
  const [current, setCurrent] = useState(0)
  const total = images.length

  const go = (step) => setCurrent((i) => (i + step + total) % total)

  return (
    <div className="tour-gallery">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${title} — foto ${i + 1}`}
          loading={i === 0 ? 'eager' : 'lazy'}
          className={`tour-gallery__img${i === current ? ' is-active' : ''}`}
        />
      ))}

      {total > 1 && (
        <>
          <button
            type="button"
            className="tour-gallery__arrow tour-gallery__arrow--prev"
            onClick={() => go(-1)}
            aria-label="Foto anterior"
          >
            ‹
          </button>
          <button
            type="button"
            className="tour-gallery__arrow tour-gallery__arrow--next"
            onClick={() => go(1)}
            aria-label="Foto siguiente"
          >
            ›
          </button>
          <div className="tour-gallery__dots">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`tour-gallery__dot${i === current ? ' is-active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Ver foto ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default TourGallery
