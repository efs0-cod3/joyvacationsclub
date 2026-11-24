// Cada tour puede tener:
//  - price:     número en USD (o null para mostrar "Ver precio en Viator")
//  - image:     ruta de la imagen (o null para mostrar el fondo de destino)
//  - viatorUrl: enlace directo al listing en Viator (si existe, el botón
//               "Reservar en Viator" reemplaza al de contacto)
const toursData = [
  {
    id: 1,
    title: "Tour de Luces de Navidad: Dyker Heights, Brooklyn y más",
    location: "Nueva York",
    description:
      "¡El tour más esperado del año! Visitaremos Dyker Heights y Bay Ridge en Brooklyn, famosos por sus espectaculares decoraciones navideñas. También descubriremos DUMBO y el Brooklyn Bridge, y recorreremos Manhattan para admirar Lincoln Center, la Quinta Avenida y Rockefeller Center, donde la Navidad se vive de una manera única.",
    price: 74,
    image: "/assets/img/nyc/christmas-lights.jpg",
    duration: "4 horas (aprox.)",
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
];

export default toursData;
