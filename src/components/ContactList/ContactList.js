import { useState, useEffect } from "react";
import ContactService from "../../services/Firebase/Contact_service.js";
import "./ContactList.css";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  const getContacts = () => {

    ContactService.getAllContact().then((items) => {
      let allContacts = [];
      items.forEach(item => {
        const key = item.key;
        const data = item.val();
        allContacts.push({
          key: key,
          username: data.username,
          password: data.password,
          mail: data.mail
        })
      })
      setContacts(allContacts)
    }
    )
  }

  const ShowContacts = () => {
    return (
      contacts.map(c => {
        return (
          <div className="form">
            <div className="users-form">
              <p><span>Datos: </span>{c.username}</p>
              <input value={c.username}></input>
              <input value={c.password}></input>
              <input value={c.mail}></input>
            </div>
            <div className="form-buttons">
              <button type="delete" id="deleteButton">Borrar</button>
              <button type="update" id="updateButton">Actualizar</button>
            </div>
          </div>
        );
      })
    );
  }

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      {ShowContacts()}
    </>
  );
}

export default ContactList;