import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <div className="navbar-section">
                <nav className="navbar navbar-expand-lg navbar-white bg-white">
                    <div className="container">
                        <a className="navbar-brand" href="/">Logistica</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/About">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Services">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Contact">Contact</Link>
                                </li>
                            </ul>
                            <div className="header-btn">
                                <button className="btn btn-outline-yellow" type="submit">Apply</button>
                                <button className="btn btn-outline-blue" type="submit">1-234-567-890</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header
