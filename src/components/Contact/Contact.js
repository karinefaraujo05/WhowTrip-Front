import React from 'react';
import Logo from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';
import './Contact.css';

export default function Contact() {

    return (
        <div className="contact-main" id="contact">
            <div className="contact-header">
                <h1>CONTATO</h1>
            </div>
            <div>
                <Link className="meet-our-team-button" to="/about">
                    Conheça nossos guias
                </Link>
            </div>

            <div className="contact-us-modal-button">
                <Link className="meet-our-team-button" to="/contactForm">
                    Entre em contato
                </Link>
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <img className="contact-logo mb-2" src={Logo} alt="team logo" />
            </div>
            <div className="contact-copyright">
                <p> 2022 </p>
            </div>
        </div>
    )
}