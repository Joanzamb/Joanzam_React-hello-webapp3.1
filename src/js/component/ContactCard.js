import React from "react";

export const ContactCard = ({ contact, onDelete, onEdit }) => {
    return (
        <div className="card mb-3">
            <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                    <h5 className="card-title">{contact.name}</h5>
                    <p className="card-text">
                        <strong>Email:</strong> {contact.email} <br />
                        <strong>Phone:</strong> {contact.phone} <br />
                        <strong>Address:</strong> {contact.address}
                    </p>
                </div>
                <div className="d-flex gap-2">
                    {/* Botón para editar */}
                    <button 
                        className="btn btn-outline-primary" 
                        onClick={() => onEdit(contact)}
                        aria-label="Edit contact"
                    >
                        <i className="bi bi-pencil"></i>
                    </button>

                    {/* Botón para eliminar */}
                    <button 
                        className="btn btn-outline-danger" 
                        onClick={() => onDelete(contact.id)}
                        aria-label="Delete contact"
                    >
                        <i className="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
