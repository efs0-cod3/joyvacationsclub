import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Contacts = () => {
  return (
    <>
      <div>Contacts</div>
      <div className="redes ig">
        <a href="https://www.instagram.com/joyvacationsclub/">
          <BiLogoInstagramAlt />
          <span>joyvacationsclub</span>
        </a>
      </div>
      <div className="redes whatsapp">
        <a href="https://wa.me/7742429893?text=Hola les hablo desde el website me gustaria agendar...">
          <FaSquareWhatsapp /> <span>774-242-9893</span>
        </a>
      </div>
      <div className="redes address">
        <p>38 Caryl Ave. YOKERS, New York 10705</p>
      </div>
      <div className="redes copy">
        <p>© 2025 Joy Vacations Club. Todos los derechos reservados</p>
      </div>
    </>
  );
};

export default Contacts
