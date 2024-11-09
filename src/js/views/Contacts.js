import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard";

export const Contacts = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getContacts();
    }, []);

    return (
        <div className="container">
            <h1>Contacts</h1>
            <Link to="/add-contact" className="btn btn-success">Add new contact</Link>
            {store.contacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact} />
            ))}
        </div>
    );
};