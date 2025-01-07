function Hero() {
  return (
    <div className="hero_container">
        <div className="img_container">
        <img className="girl_map" src='/assets/img/girl_map_mobile.jpeg'/>
        </div>
        <h1 className="slogan">Descubre experiencias inolvidables con Joy Vacations Club</h1>
        <div className="hero_btn-section">
            <button className="tours">
                Ver tours
            </button>
            <button className="contactanos">
                Contactanos
            </button>
        </div>
    </div>
  )
}

export default Hero