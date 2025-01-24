import { useState } from "react";
import { BiLogoInstagramAlt,BiArrowBack } from "react-icons/bi";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { useNavigate } from "react-router";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";



const Contacts = () => {

  const navigate = useNavigate()

  const [formData,setFormData] = useState({
    from_name: "",
    from_email:"",
    message:"",
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name)
    setFormData({ ...formData, [name]: value });
  };

  
  const goBack = () => {
    navigate('/')
  }

  // setting form! aun no funciona como quiero
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0qnbd2d', 'template_0xpv5nd', e.target, {
        publicKey: 'Sbc5UpLfa7BKk2r2R',
      })
      .then(
        () => {
          Swal.fire({
            title: "Gracias por tu mensaje.",
            text: "Nos pondremos en contacto a la brevedad posible!",
            icon: "success"
          });

          setFormData({from_name:"", from_email:"",message:""})

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contacts_container">
        <div className="back_btn--container">
          <button onClick={goBack}>
<BiArrowBack/> Atras

          </button>
           </div>
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
          <form className="form" name="contact_form" method="POST" onSubmit={sendEmail}>
            <h2 className="auth_form--title">Contactanos</h2>
            <div className="form--input">
              <label>Nombre:</label>
              <input
                type="text"
                placeholder="John cooper"
                name="from_name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form--input">
              <label>Email:</label>
              <input
                type="email"
                placeholder="johncooper@gmail.com"
                value={formData.email}
                name="from_email"
                onChange={handleChange}
              />
            </div>

            <div className="form--input">
              <label>Mensaje</label>
              <textarea
                placeholder="Cuentanos como podemos ayudarte?..."
                value={formData.message}
                name="message"
                onChange={handleChange}
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
