import React, { useState, useEffect } from "react";
import ContactService from "../../services/Firebase/Contact_service.js";
import "./ContactList.css";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  const getContacts = () => {
    ContactService.getAllContacts().then((items) => {
      let allContacts = [];
      items.forEach((item) => {
        const key = item.key;
        const data = item.val();
        allContacts.push({
          key: key,
          username: data.username,
          password: data.password,
          mail: data.mail,
        });
      });
      setContacts(allContacts);
    });
  };

  const deleteContact = (key) => {
    ContactService.removeContact(key).then(() => {
      getContacts();
    });
  };

  const updateContact = (key, updatedData) => {
    ContactService.updateContact(key, updatedData).then(() => {
      getContacts();
    });
  };

  const ShowContacts = () => {
    return contacts.map((c) => {
      return (
        <div className="form" key={c.key}>
          <div className="users-form">
            <p>
              <span>Datos: </span>
              {c.username}
            </p>
            <input
              value={c.username}
              onChange={(e) => handleChange(e, c.key, 'username')}
            />
            <input
              value={c.password}
              onChange={(e) => handleChange(e, c.key, 'password')}
            />
            <input
              value={c.mail}
              onChange={(e) => handleChange(e, c.key, 'mail')}
            />
          </div>
          <div className="form-buttons">
            <button
              type="button"
              id="deleteButton"
              onClick={() => deleteContact(c.key)}
            >
              Borrar
            </button>
            <button
              type="button"
              id="updateButton"
              onClick={() => updateContact(c.key, {
                username: c.username,
                password: c.password,
                mail: c.mail
              })}
            >
              Actualizar
            </button>
          </div>
        </div>
      );
    });
  };

  const handleChange = (e, key, field) => {
    const updatedContacts = contacts.map((c) => {
      if (c.key === key) {
        return {
          ...c,
          [field]: e.target.value
        };
      }
      return c;
    });
    setContacts(updatedContacts);
  };

  useEffect(() => {
    getContacts();
  }, []);

  return <>{ShowContacts()}</>;
}

export default ContactList;
