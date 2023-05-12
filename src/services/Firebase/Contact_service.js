import db from "../Firebase/firebase";
import { ref, get, remove, push, set } from "firebase/database";

const dbRef = ref(db, "/Contacts");

const getAllContacts = () => {
  return get(dbRef);
};

const addContact = (username, mail, password) => {
  return push(dbRef, {
    username: username,
    mail: mail,
    password: password
  });
};

const removeContact = (key) => {
  const dbRefContact = ref(db, `/Contacts/${key}`);
  return remove(dbRefContact);
};

const updateContact = (key, updatedData) => {
  const dbRefContact = ref(db, `/Contacts/${key}`);
  return set(dbRefContact, updatedData);
};

export default {
  getAllContacts,
  addContact,
  removeContact,
  updateContact
};
