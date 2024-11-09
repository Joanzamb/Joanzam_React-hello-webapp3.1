
import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const ContactCard = ({ contact }) => {
    const { actions } = useContext(Context);

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{contact.name}</h5>
                <p className="card-text">Email: {contact.email}</p>
                <p className="card-text">Phone: {contact.phone}</p>
                <p className="card-text">Address: {contact.address}</p>
                <button
                    className="btn btn-danger"
                    onClick={() => actions.deleteContact(contact.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};
