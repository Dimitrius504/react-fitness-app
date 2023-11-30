import React from "react";

function Header() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <i class="bi bi-universal-access"></i>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/" id="home">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/workouts" id="workouts">
                                Workouts
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/goals" id="goals">
                                Goals
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/settings" id="settings">
                                <i class="bi bi-gear"> Settings</i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
