import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Demo = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadDemoData();  // Carga datos demo si es necesario
    }, [actions]);

    if (!Array.isArray(store.demo)) {
        console.error('store.demo no es un array');
        return <div>Error al cargar los datos.</div>;
    }

    return (
        <div className="container">
            <ul className="list-group">
                {store.demo.map((item, index) => (
                    <li
                        key={index}
                        className="list-group-item d-flex justify-content-between"
                        style={{ background: item.background }}>
                        <Link to={"/single/" + index}>
                            <span>Link to: {item.title}</span>
                        </Link>
                        {item.background === "orange" ? (
                            <p style={{ color: item.initial }}>
                                Check store/flux.js scroll to the actions to see the code
                            </p>
                        ) : null}
                        <button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
                            Change Color
                        </button>
                    </li>
                ))}
            </ul>
            <br />
            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
        </div>
    );
};