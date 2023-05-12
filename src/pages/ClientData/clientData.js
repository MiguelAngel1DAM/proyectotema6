import React from "react";
import ContactList from "../../components/ContactList/ContactList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import "../ClientData/clientData.css";

function ClientData() {
  return (
    <div className="container"> {/* Agrega la clase "container" al contenedor principal */}
      <Header />
      <ContactList />
      <Footer />
    </div>
  );
}

export default ClientData;
