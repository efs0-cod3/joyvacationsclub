import { Link } from 'react-router'

const Tours = () => {
  return (
    <main className="tours-placeholder">
      <p className="tours-placeholder__label">Próximamente</p>
      <h1 className="tours-placeholder__title">
        Más <em>destinos</em><br />en camino
      </h1>
      <p className="tours-placeholder__sub">
        Estamos preparando experiencias increíbles para ti.
        Mientras tanto, conoce nuestros destinos disponibles.
      </p>
      <Link to="/" className="tours-placeholder__back">
        ← Ver destinos disponibles
      </Link>
    </main>
  )
}

export default Tours
