import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './AboutTeam.css'

export default function AboutTeam() {
    return (
        <div className="container aboutTeam">
            <div className="row aboutTeamHeader">
                <div className="col-12 text-center">
                    <h2><strong> Conheça nossos Guias </strong></h2>
                    <p> Sinta-se livre para chamar um dos nossos agentes! </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="our-team">
                        <div className="picture">
                            <img className="img-fluid" src="https://static.vecteezy.com/ti/vetor-gratis/p1/1993889-icone-personagem-avatar-mulher-latina-bonita-grátis-vetor.jpg" />
                        </div>
                        <div className="team-content">
                            <h4 className="title"> Agente de Turismo </h4>
                            <h3 className="name">  Paola Brito </h3>
                            <h4 className="title"> Guia do Norte </h4>
                        </div>
                        <ul className="social">
                            <li>
                                <a href="https://web.whatsapp.com" target="_blank" aria-hidden="true"><FontAwesomeIcon icon={faWhatsapp} size='1x' /></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/faculdadefainor/" target="_blank" aria-hidden="true"><FontAwesomeIcon icon={faInstagram} size='1x' /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="our-team">
                        <div className="picture">
                            <img className="img-fluid" src="https://saluto.group/themes/saluto/assets/assets/icon-woman.png" />
                        </div>
                        <div className="team-content">
                            <h4 className="title"> Agente de Turismo</h4>
                            <h3 className="name"> Ana Ramos</h3>
                            <h4 className="title"> Guia do Sul </h4>
                        </div>
                        <ul className="social">
                            <li>
                                <a href="https://www.convertte.com.br/gerador-link-whatsapp/?" target="_blank" aria-hidden="true">
                                    <FontAwesomeIcon icon={faWhatsapp} size='1x' />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/faculdadefainor/" target="_blank" aria-hidden="true"><FontAwesomeIcon icon={faInstagram} size='1x' /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="our-team">
                        <div className="picture">
                            <img className="img-fluid" src="https://icons-for-free.com/download-icon-business+costume+male+man+office+user+icon-1320196264882354682_512.png" />
                        </div>
                        <div className="team-content">
                            <h4 className="title"> Agente de Turismo</h4>
                            <h3 className="name"> César Filho</h3>
                            <h4 className="title"> Guia do Sudeste</h4>
                        </div>
                        <ul className="social">
                            <li>
                                <a href="https://www.convertte.com.br/gerador-link-whatsapp/?" target="_blank" aria-hidden="true"><FontAwesomeIcon icon={faWhatsapp} size='1x' /></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/faculdadefainor/" target="_blank" aria-hidden="true"><FontAwesomeIcon icon={faInstagram} size='1x' /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="our-team">
                        <div className="picture">
                            <img className="img-fluid" src="https://cdn-icons-png.flaticon.com/512/219/219988.png" />
                        </div>
                        <div className="team-content">
                            <h4 className="title"> Agente de Turismo</h4>
                            <h3 className="name">  Nilton Costa</h3>
                            <h4 className="title"> Guia do Nordeste</h4>
                        </div>
                        <ul className="social">
                            <li>
                                <a href="https://www.convertte.com.br/gerador-link-whatsapp/?" target="_blank" aria-hidden="true"><FontAwesomeIcon icon={faWhatsapp} size='1x' /></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/faculdadefainor/" target="_blank" aria-hidden="true"><FontAwesomeIcon icon={faInstagram} size='1x' /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}