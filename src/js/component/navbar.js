import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Mi App de Contactos</span>
			</Link>
			<div className="ml-auto d-flex gap-3">
				<Link to="/contacts" className="btn btn-primary shadow-lg">Go to Contacts</Link>
				<Link to="/add-contact" className="btn btn-success shadow-lg">Add New Contact</Link>
			</div>
		</nav>
	);
};
