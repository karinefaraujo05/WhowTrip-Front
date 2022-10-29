/* eslint-disable jsx-a11y/alt-text */

import React from 'react';

import Logo from '../../assets/Logo.svg';

// BOOTSTRAP IMPORTS
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavbarDropdown from 'react-navbar-dropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';


// LOCAL IMPORTS
import './Navigation.css';

export default function Navigation(props) {
    // get whether user is on homepage
    const location = window.location.pathname;
    const isHome = (location === '/');

    const toCreateTripPage = () => {
        window.location = '/createTrip'
    };

    const toViewTripsPage = () => {
        window.location = '/viewTrips'
    };

    const logo = <img src={Logo} />;
    const logofooter = <img src={Logo} width="180" height="60" />;
    return (
        <div>
            {!props.user?.username ? (<Navbar
                expand="lg"
                className="navbar custom-nav fixed-top">
                <Container fluid style={{ display: 'flex', flexDirection: 'column' }}>
                    <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav">
                        <span><FontAwesomeIcon style={{ color: "white" }} icon={faBars}/></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav" className="navbar-container">
                        <Nav className="custom-navbar-items">
                            <div style={{ display: 'flex' }}>
                                {(isHome === true &&
                                    <div className="custom-navlink-list">
                                        <Nav.Link className="custom-navlink-text mx-3 mb-1" href="/">{logo}</Nav.Link>
                                        <Nav.Link className="custom-navlink-text text-light" href="#features"><span className="navbar-content">PLANEJAMENTO</span></Nav.Link>
                                        <Nav.Link className="custom-navlink-text text-light" href="#recommendation"><span className="navbar-content">RECOMENDAÇÕES</span></Nav.Link>
                                        <Nav.Link className="custom-navlink-text text-light" href="#contact"><span className="navbar-content">CONTATO</span></Nav.Link>
                                    </div>
                                )}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>) : (<Navbar
                expand="lg"
                className="navbar custom-nav fixed-top">
                <Container fluid className="container-mobile">
                    <div className="loggedinLogo">
                        <Nav.Link className="custom-navlink-text mx-4" href="/">{logofooter}</Nav.Link>
                    </div>
                    <div className="navbar-container">
                        <Nav className="custom-navbar-items">
                            <div className="mx-3">
                                <span className="navbar-welcome mx-2">Olá, {props.user.username}</span>
                                <NavbarDropdown>
                                    <NavbarDropdown.Toggle className="menu__item">
                                        <NavbarDropdown.Open>
                                            <FontAwesomeIcon style={{ color: "white" }} icon={faCaretDown} fixedWidth />
                                        </NavbarDropdown.Open>
                                        <NavbarDropdown.Close>
                                            <FontAwesomeIcon style={{ color: "white" }} icon={faCaretUp} fixedWidth />
                                        </NavbarDropdown.Close>
                                    </NavbarDropdown.Toggle>
                                    <NavbarDropdown.CSSTransitionMenu
                                        className="dropdown-menu" timeout={200}
                                    >
                                        <NavbarDropdown.Item className="dropdown-menu-item" onClick={toCreateTripPage}>
                                            <div>
                                                <FontAwesomeIcon icon={faCalendarPlus} fixedWidth/>
                                            </div>
                                            <div className="dropdown-menu-item__spacer" />
                                            <div className="dropdown-menu-item__text">Crie uma nova viagem</div>
                                        </NavbarDropdown.Item>
                                        <NavbarDropdown.Item className="dropdown-menu-item" onClick={toViewTripsPage}>
                                            <div>
                                                <FontAwesomeIcon icon={faBookmark} fixedWidth />
                                            </div>
                                            <div className="dropdown-menu-item__spacer" />
                                            <div className="dropdown-menu-item__text">Ver minhas viagens</div>
                                        </NavbarDropdown.Item>
                                        <NavbarDropdown.Item className="dropdown-menu-item" onClick={props.handleLogout}>
                                            <div>
                                                <FontAwesomeIcon style={{ color: "red" }} icon={faSignOutAlt} fixedWidth />
                                            </div>
                                            <div className="dropdown-menu-item__spacer" />
                                            <div style={{ color: "red" }} className="dropdown-menu-item__text">Sair</div>
                                        </NavbarDropdown.Item>
                                    </NavbarDropdown.CSSTransitionMenu>
                                </NavbarDropdown>
                            </div>
                        </Nav>
                    </div>
                </Container>
            </Navbar>)}
        </div>
    );
}