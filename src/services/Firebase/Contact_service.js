import db from "../Firebase/firebase";
import { ref, get, remove, push } from "firebase/database";

const dbRef = ref(db, "/Contacts");

const getAllContact = () => {
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
    const dbRefContact = ref(db, `/Contact-base/${key}`);
    return remove(dbRefContact);
};

export default {
    getAllContact,
    addContact,
    removeContact,
};