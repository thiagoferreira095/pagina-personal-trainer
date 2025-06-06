import React from "react";
import '../scss/Navbar.scss';
import Logo from '../assets/img/logo-navbar.png';

function Navbar() {
    return (
        <nav className="nav">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-sm-6 col-lg-6">
                        <div className="nav__logo">
                            <img src={Logo} alt="Logo" />
                        </div>
                    </div>    

                    <div className="col-6 col-sm-6 col-lg-6">
                        <ul className="d-flex justify-content-end align-items-center">
                            <li><a href="#Home">Início</a></li>
                            <li><a href="#About">Sobre</a></li>
                            <li><a href="#Services">Planos</a></li>
                            <li><a href="#Contact" className="btn btn-contato-cta">Entre em contato</a></li>
                        </ul>
                    </div>                
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
