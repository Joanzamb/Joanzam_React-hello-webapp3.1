import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard";

export const Contacts = () => {
    const { store, actions } = useContext(Context);
    const [selectedContact, setSelectedContact] = useState(null); // Estado para el contacto a editar
    const navigate = useNavigate();

    useEffect(() => {
        actions.getContacts();
    }, []);

    const handleEdit = (contact) => {
        setSelectedContact(contact);
        navigate(`/edit-contact/${contact.id}`); // Navega a la página de edición
    };

    return (
        <div className="container">
            <h1>Contacts</h1>
            <Link to="/add-contact" className="btn btn-success">Add new contact</Link>
            {store.contacts.map((contact) => (
                <ContactCard 
                    key={contact.id} 
                    contact={contact} 
                    onDelete={actions.deleteContact} 
                    onEdit={handleEdit} 
                />
            ))}
        </div>
    );
};
