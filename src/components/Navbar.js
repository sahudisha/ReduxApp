import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const amount = useSelector(state => state.amount)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/" end>Bank Of Arunesh</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex">
                    <button className="btn btn-primary">Balance : {amount}</button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;