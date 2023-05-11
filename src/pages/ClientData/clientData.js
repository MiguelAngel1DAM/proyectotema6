import ContactList from "../../components/ContactList/ContactList";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import "../ClientData/clientData.css";



function ClientData() {
    return (
      <>
        <Header />
        <ContactList/>
        <Footer />
      </>
    );
  }
  
  export default ClientData;