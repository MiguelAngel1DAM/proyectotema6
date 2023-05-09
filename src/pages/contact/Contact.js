import Contact_service from "../../services/Firebase/Contact_service";
import { useState, useEffect, useRef } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import "./Contact.css";

function Contact() {
  const [Contacts, setContact] = useState([]);
  const refForm = useRef();

const addContact = (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const mail = e.target.mail.value;
  const password = e.target.password.value;
  Contact_service.addContact(username, mail, password).then((res) => {
    refForm.current.reset();
    setContact(oldValues => [...oldValues, { key: res.key, username, mail, password}])
  })
}

  return (
    <>
      <Header />
      <div class="form-container">
        <form id="form-register" onSubmit={addContact} ref={refForm}>
          <div class="form-group">
            <label for="username" class="form-label">Nombre y apellidos:</label>
            <input type="text" class="form-control" id="username" placeholder="Inserta tu nombre" name="username" />
            <span id="username-requiered-error">* Field Requiered</span>
          </div>
          <div class="form-group">
            <label for="mail" class="form-label">Correo:</label>
            <input type="email" class="form-control" id="mail" placeholder="Inserta tu correo" name="mail" />
            <span id="mail-requiered-error">* Field Requiered</span>
          </div>
          <div class="form-group">
            <label for="password" class="form-label">Contraseña:</label>
            <input type="password" class="form-control" id="password" placeholder="Inserta tu contraseña" name="password" />
            <span id="password-requiered-error">* Field Requiered</span>
          </div>

          <button type="submit" class="btn btn-primary mt-3">Entrar</button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
