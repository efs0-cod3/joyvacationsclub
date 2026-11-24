// Cada tour puede tener:
//  - price:     número en USD (o null para mostrar "Ver precio en Viator")
//  - images:    lista de fotos (galería con flechas); o image para una sola
//               foto; sin ninguna se muestra el fondo de destino
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
    images: [
      "/assets/img/nyc/navidad-1.jpg",
      "/assets/img/nyc/navidad-2.jpg",
      "/assets/img/nyc/navidad-3.jpg",
      "/assets/img/nyc/navidad-4.jpg",
      "/assets/img/nyc/navidad-5.jpg",
    ],
    duration: "4 horas (aprox.)",
    viatorUrl:
      "https://www.viator.com/es-ES/tours/New-York-City/Christmas-Tour/d687-220222P3",
  },
  {
    id: 2,
    title: "Tour Contrastes NY",
    location: "Nueva York",
    description:
      "Contrastes es un tour único que te lleva a visitar Harlem, el Bronx, Queens y Brooklyn, conociendo la cultura de las diferentes comunidades de Nueva York. Vehículo con aire acondicionado y guía incluidos. ¡En solo 5 horas sentirás que conoces esta gran ciudad!",
    price: 62.77,
    image: "/assets/img/nyc/contrastes.jpg",
    duration: "5 horas (aprox.)",
    viatorUrl:
      "https://www.viator.com/es-ES/tours/New-York-City/Contrasts-with-Taste/d687-220222P1",
  },
];

export default toursData;
