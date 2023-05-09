import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <h4>Acerca de JBL</h4>
            <p>Somos líderes en tecnología de audio y ofrecemos los mejores productos de sonido para todos los amantes de la música.</p>
          </div>
          <div className="col-sm-12 col-md-4">
            <h4>Enlaces </h4>
            <ul className="contact-info">
              <li><ion-icon name="link-outline"></ion-icon>
              <a href="https://github.com/MiguelAngel1DAM/proyectotema6.git">Enlace a GitHub</a></li>
              <li><ion-icon name="call-outline"></ion-icon> Teléfono: 928-345-111</li>
              <li><ion-icon name="mail-outline"></ion-icon> Email: macarron@jbl.com</li>
            </ul>
          </div>
        </div>
        <p>© 2023 JBL Todos los derechos reservados <a href="https://www.jbl.es/privacy_policy.html">Política de Privacidad y Cookies</a>
         | <a href="https://www.jbl.es/terms/terms.html">Condiciones de Venta</a></p>
      </div>
    </footer>
  );
}

export default Footer;
