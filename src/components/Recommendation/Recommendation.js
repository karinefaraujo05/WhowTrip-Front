import React from 'react';

// LOCAL IMPORTS
import destination from '../../assets/destination.png';
import './Recommendation.css';

export default function Recommendation() {
    return (
        <div className="recommendation-main" id="recommendation">
            <div className="d-flex flex-column align-items-center">
            <img className="destination" src={destination}/>
            </div>
            <div className="recommendation-header mb-4">
                <h1 className="recommendation-header">Nossas recomendações! </h1>
                <h5> Estes pacotes deixarão as suas férias incríveis!</h5>
            </div>

            <div className="col-12 d-flex flex-column">
                <div className="row d-flex flex-row justify-content-center my-4">
                    <a href="https://viagemeturismo.abril.com.br/cidades/recife/" target="_blank" className="col-12 img-box" rel="noreferrer">
                        <div className="child img1 d-flex flex-row justify-content-center align-items-center">
                            <h3 className="recCityName">Recife</h3>
                            <h5 className="recTourist">Praia de Boa Viagem, Marco Zero</h5>
                        </div>
                    </a>
                    <a href="https://en.parisinfo.com/" target="_blank" className="col-12 img-box" rel="noreferrer">
                        <div className="child img2 d-flex flex-row justify-content-center align-items-center">
                            <h3 className="recCityName"> Rio de Janeiro </h3>
                            <h5 className="recTourist">Cristo Redentor, Jardim Botânico</h5>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/nobresturismo/" target="_blank" className="col-12 img-box" rel="noreferrer">
                        <div className="child img3 d-flex flex-row justify-content-center align-items-center">
                            <h3 className="recCityName"> Nobres </h3>
                            <h5 className="recTourist">Salto do Tocum, Balneário Dona Máxima</h5>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/portalchapada_/" target="_blank" className="col-12 img-box" rel="noreferrer">
                        <div className="child img4 d-flex flex-row justify-content-center align-items-center">
                            <h3 className="recCityName"> Chapada Diamantina </h3>
                            <h5 className="recTourist"> Igatu, Lençóis </h5>
                        </div>
                    </a>
                    <a href="https://desviantes.com.br/pacote/AM/amazonia/amazonia-manaus-presidente-figueiredo-e-tupana-lodge-7-dias/?gclid=Cj0KCQjwqPGUBhDwARIsANNwjV4dDa4r7X-PrsbQ78ysAhTc_lj4Bw_JMIly0znuz5u1FLxfrLtIgwYaAoJAEALw_wcB" target="_blank" className="col-12 img-box" rel="noreferrer">
                        <div className="child img5 d-flex flex-row justify-content-center align-items-center">
                            <h3 className="recCityName"> Amazônia </h3>
                            <h5 className="recTourist"> Tribos, Mata Atlântica </h5>
                        </div>
                    </a>
                    <a href="https://hoteisfioreze.com.br/o-que-fazer-em-gramado/" target="_blank" className="col-12 img-box" rel="noreferrer">
                        <div className="child img6 d-flex flex-row justify-content-center align-items-center">
                            <h3 className="recCityName"> Gramado </h3>
                            <h5 className="recTourist"> Serra Gaúcha, Canela </h5>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}