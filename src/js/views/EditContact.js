import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate } from "react-router-dom";

export const EditContact = () => {
    const { actions } = useContext(Context);
    const { id } = useParams(); // Obtén el ID del contacto desde la URL
    const navigate = useNavigate();

    const [contact, setContact] = useState({ name: "", email: "", phone: "", address: "" });

    useEffect(() => {
        const fetchContact = async () => {
            const fetchedContact = await actions.getContactById(id); // Implementa esta acción
            setContact(fetchedContact);
        };
        fetchContact();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await actions.updateContact(id, contact); // Usa la acción updateContact para actualizar el contacto
        navigate("/contacts"); // Redirige de nuevo a la lista de contactos
    };

    return (
        <div className="container">
            <h1>Edit Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={contact.name}
                        onChange={(e) => setContact({ ...contact, name: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={contact.email}
                        onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                        type="tel"
                        className="form-control"
                        value={contact.phone}
                        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        value={contact.address}
                        onChange={(e) => setContact({ ...contact, address: e.target.value })}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
        </div>
    );
};
