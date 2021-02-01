import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function nav() {
    return (
        <div className="body">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/search"
                            className={
                                window.location.pathname === "/search" || window.location.pathname === "/"
                                    ? "nav-link active"
                                    : "navbar-brand"
                            }>
                            Google Books
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/search"
                            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                        >
                            Search
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/saved"
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                        >
                            Saved
                    </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default nav;