import { useState } from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Contacts = () => {
// Boton para volver a la pagina principal
//   <button className='maintenance_nav--btn btn' onClick={goBack}>
//   <BiLeftArrowAlt className='animate__animated animate__fadeIn'/>
// </button>
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [interes, setInteres] = useState("");
  const [email, setEmail] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const lastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const interesChange = (e) => {
    setInteres(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="contacts_container">
      <div className="contacts_">
        <div className="redes_adrss--container">
          <h2>Nuestras redes</h2>
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
        </div>

        <div className="form_container">
          <form className="form" name="contact_form" method="POST" data-netlify="true">
            <h2 className="auth_form--title">Contactanos</h2>
            <div className="form--input">
              <label>Nombre:</label>
              <input
                type="text"
                placeholder="John"
                name="name"
                value={name}
                onChange={nameChange}
              />
            </div>

            <div className="form--input">
              <label>Apellido:</label>
              <input
                type="text"
                placeholder="Cooper"
                value={lastName}
                name="lastName"
                onChange={lastNameChange}
              />
            </div>

            <div className="form--input">
              <label>Email:</label>
              <input
                type="email"
                placeholder="johncooper@gmail.com"
                value={email}
                name="email"
                onChange={emailChange}
              />
            </div>

            <div className="form--input">
              <label>Mensaje</label>
              <textarea
                placeholder="Cuentanos como podemos ayudarte?..."
                value={interes}
                name="interes"
                onChange={interesChange}
              />
            </div>
            <div className="auth_form_button_container">
              <button className="btn login_btn">Enviar</button>
            </div>
          </form>
        </div>
      </div>
      <div className="redes copy">
        <p>© 2025 Joy Vacations Club. Todos los derechos reservados</p>
      </div>
    </div>
  );
};

export default Contacts;
