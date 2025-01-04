import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from './assets/logo.png'

const Header = () => {

    const location = useLocation();

    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <div class="container">
                    <Link class="navbar-brand" to="/">
                        <div className="logo-container">
                            <img src={logo} className="logo" alt="logo" />
                            <h5>
                                Tours and<span className="text-danger">Travels</span>
                            </h5>
                        </div></Link>
                    <button class="navbar-toggler d-lg-none" type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                    aria-current={location.pathname === '/' ? 'page' : undefined}
                                    to="/">Home
                                </Link >
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/packages">Packages</Link >
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/services">Services</Link >
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact">Contact</Link >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header
