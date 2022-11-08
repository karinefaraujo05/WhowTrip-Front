import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './AboutUs.css'

export default function AboutUs() {
    return (
        <div className="container AboutUs">
            <div className="row AboutUsHeader">
                <div className="col-12 text-center">
                    <h2><strong> Conheça nossos Guias </strong></h2>
                    <p> Sinta-se livre para chamar um dos nossos agentes! </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="our-team">
                        <div className="image">
                            <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHpIafZFq65vmmA2q1wb6eW-NwabU7BP-5bxS6q6LmHXupASton5aXFFrGZIZPa_X79Wc&usqp=CAU" />
                        </div>
                        <div className="team-content">
                            <h4 className="title"> Agente de Turismo </h4>
                            <h3 className="name">  Paola Brito </h3>
                            <h4 className="description"> Guia do Norte </h4>
                        </div>
                        <ul className="social">
                            <li>
                                <a href="https://web.whatsapp.com" target="blank" aria-hidden="true"><FontAwesomeIcon icon={faWhatsapp} size='1x' /></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/faculdadefainor/" target="blank" aria-hidden="true"><FontAwesomeIcon icon={faInstagram} size='1x' /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="our-team">
                        <div className="image">
                            <img className="img-fluid" src="https://static.vecteezy.com/ti/vetor-gratis/t2/654820-desenho-de-rosto-de-mulher-vetor.jpg" />
                        </div>
                        <div className="team-content">
                            <h4 className="title"> Agente de Turismo</h4>
                            <h3 className="name"> Ana Ramos</h3>
                            <h4 className="description"> Guia do Sul </h4>
                        </div>
                        <ul className="social">
                            <li>
                                <a href="https://www.convertte.com.br/gerador-link-whatsapp/?" target="blank" aria-hidden="true">
                                    <FontAwesomeIcon icon={faWhatsapp} size='1x' />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/faculdadefainor/" target="blank" aria-hidden="true"><FontAwesomeIcon icon={faInstagram} size='1x' /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="our-team">
                        <div className="image">
                            <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLJBmf7nSd2ajj_h6YTYScqIKFRj46xORMYE2Mp5DCl_4eACUKi2BHOr44tkYM4igjME&usqp=CAU" />
                        </div>
                        <div className="team-content">
                            <h4 className="title"> Agente de Turismo</h4>
                            <h3 className="name"> César Filho</h3>
                            <h4 className="description"> Guia do Sudeste</h4>
                        </div>
                        <ul className="social">
                            <li>
                                <a href="https://www.convertte.com.br/gerador-link-whatsapp/?" target="blank" aria-hidden="true"><FontAwesomeIcon icon={faWhatsapp} size='1x' /></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/faculdadefainor/" target="blank" aria-hidden="true"><FontAwesomeIcon icon={faInstagram} size='1x' /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="our-team">
                        <div className="image">
                            <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqqsUS28UqbPQu-fjSHbi7w5XDKW57rYytH-7e0YzyUzM-GpsrvXN6U0BE_hvq8OiUkiA&usqp=CAU" />
                        </div>
                        <div className="team-content">
                            <h4 className="title"> Agente de Turismo</h4>
                            <h3 className="name">  Nilton Costa</h3>
                            <h4 className="description"> Guia do Nordeste</h4>
                        </div>
                        <ul className="social">
                            <li>
                                <a href="https://www.convertte.com.br/gerador-link-whatsapp/?" target="blank" aria-hidden="true"><FontAwesomeIcon icon={faWhatsapp} size='1x' /></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/faculdadefainor/" target="blank" aria-hidden="true"><FontAwesomeIcon icon={faInstagram} size='1x' /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}