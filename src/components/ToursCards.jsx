import toursData from "../data/toursData";

const ToursCards = () => {
  return (
    <div className="tour_section">
      <h2> Tours Disponibles</h2>
      <div className="tour_container">
        {toursData &&
          toursData.map((tour) => {
            return (
              <div className="tour_info-container" key={tour.id}>
                <img className="tour_img" src={tour.image} alt={tour.title} />
                <div className="tour_description">
                  <h3 className="title">{tour.title}</h3>
                  <p className="desc">{tour.description}</p>
                  <p className="price">Costo <br/><span>US${tour.price}.00</span></p>
                  <p className="duration">Tiempo estimado <br/><span>{tour.duration}</span></p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ToursCards;
