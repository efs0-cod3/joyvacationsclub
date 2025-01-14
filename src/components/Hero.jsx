import { Link } from "react-router"

const Hero = () => {
  return (
    <div className="hero_container">
        <div className="img_container">
        <img className="girl_map" src='/assets/img/girl_map_mobile.jpeg'/>
        </div>
        <h1 className="slogan">Descubre experiencias inolvidables con Joy Vacations Club</h1>
        <div className="hero_btn-section">
            <Link to={"/tours"}>
            <button className="tours">
            Tours
            </button>
            </Link>
                <Link to={"/contacts"}>
            <button className="contactanos">
                Contactanos
            </button>
                </Link>
        </div>
    </div>
  )
}

export default Hero