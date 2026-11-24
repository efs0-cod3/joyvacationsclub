// Cada tour puede tener:
//  - price:     número en USD (o null para mostrar "Ver precio en Viator")
//  - image:     ruta de la imagen (o null para mostrar el fondo de destino)
//  - viatorUrl: enlace directo al listing en Viator (si existe, el botón
//               "Reservar en Viator" reemplaza al de contacto)
const toursData = [
  {
    id: 1,
    title: "Christmas Tour",
    location: "Nueva York",
    description:
      "Vive la magia de la Navidad en Nueva York con Joy Vacations Club. Recorre las luces, decoraciones y rincones más emblemáticos de la ciudad durante la temporada más especial del año.",
    price: null,
    image: null,
    duration: null,
    viatorUrl:
      "https://www.viator.com/es-ES/tours/New-York-City/Christmas-Tour/d687-220222P3",
  },
  {
    id: 2,
    title: "Contrastes con Sabor",
    location: "Nueva York",
    description:
      "Descubre los contrastes de Nueva York a través de sus barrios y su gastronomía. Una experiencia de Joy Vacations Club para conocer la ciudad con todos los sentidos.",
    price: null,
    image: null,
    duration: null,
    viatorUrl:
      "https://www.viator.com/es-ES/tours/New-York-City/Contrasts-with-Taste/d687-220222P1",
  },
  {
    id: 3,
    title: "Tour Cafe Colao",
    description:
      "Disfruta de una escapada inolvidable con actividades emocionantes como paseos en Foul-Wheels, visitas a los impresionantes Saltos Baiguate y Jimenoa, un paseo a caballo, y mucho más.",
    price: 239,
    image: "/assets/img/cafecolao.jpg",
    duration: "Dia y medio",
  },
  {
    id: 4,
    title: "7 Iglesias Turquia",
    description:
      "Sumérgete en la historia bíblica y recorre los caminos de los primeros cristianos con nuestro fascinante viaje a las 7 Iglesias del Apocalipsis. Este recorrido te conectará con las profundidades de la fe e historia.",
    price: 3385,
    image: "/assets/img/turkia/turkweb.png",
    duration: "11 dias",
  },
];

export default toursData;
