import React from 'react';

import featuresLogo from '../../assets/plane.png';
import './Features.css';

export default function Features() {
    return (
        <div className="features-main" id="features">
            <div className="d-flex flex-column align-items-center">
                <img className="featuresLogo" src={featuresLogo} />
            </div>
            <div className="features-header">
                <h1> PLANEJAMENTO  </h1>
                <h5> Organize sua viagem e atualize seus parceiros em tempo real... </h5>
            </div>
            <div className="features-content">
                <div className="features-card">

                    <img className="features-1-img" id="features-budget-img-mobile" src="https://images.unsplash.com/photo-1648737965328-0c7f98c86f98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />

                    <div className="features-card-main" id="main1">
                        <div className="features-card-number">
                            <span className="features-subheader"> Escolha qual itinerário seguir </span>
                        </div>
                        <div className="features-card-list">
                            <ul>
            
                                <li className="featuresListStyle"> Encontre o destino ideal</li>
                                <li className="featuresListStyle"> Defina suas datas de partida</li>
                                <li className="featuresListStyle"> Convide seus amigos e família</li>
                                <li className="featuresListStyle"> Arrume suas malas!</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="features-card">

                    <img className="features-2-img-mobile" src="https://images.unsplash.com/photo-1648737965328-0c7f98c86f98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />

                    <div className="features-card-main">
                        <div className="features-card-number">
                            <span id="main2Subtitle"> Controle Financeiro </span>
                        </div>
                        <div className="features-card-list" id="main2List">
                            <ul id="rtlList">
                                <li className="featuresListStyle"> Veja o orçamento completo da viagem </li>
                                <li className="featuresListStyle"> Compartilhe seus comentários/pagamentos </li>
                                <li className="featuresListStyle"> Planeje e atualize seus companheiros </li>
                                <li className="featuresListStyle"> Tenha acesso aos gastos </li>
                            </ul>
                        </div>
                    </div>

                    <img className="features-2-img" src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80" />

                </div>
            </div>
        </div>
    )
}