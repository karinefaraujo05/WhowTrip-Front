import React from 'react';
import destination from '../../assets/destination.png';
import './Recommendation.css';

export default function Recommendation() {
    return (
        <div className="recommendation-main" id="recommendation">
            <div className="d-flex flex-column align-items-center">
            <img className="destination" src={destination}/>
            </div>
            <div className="header mb-4">
                <h1 className="header"> Nossas recomendações! </h1>
                <h5> Estes pacotes deixarão as suas férias incríveis! </h5>
            </div>

            <div className="col-12 d-flex flex-column">
                <div className="row d-flex flex-row justify-content-center my-4">
                    <a href="https://viagemeturismo.abril.com.br/cidades/recife/" target="blank" className="col-12 img-box" rel="noreferrer">
                        <div className="child img1 d-flex flex-row justify-content-center align-items-center">
                            <h3 className="recPlace">Recife</h3>
                            <h5 className="recTown">Praia de Boa Viagem, Marco Zero</h5>
                        </div>
                    </a>
                    <a href="https://en.parisinfo.com/" target="blank" className="col-12 img-box" rel="noreferrer">
                        <div className="child img2 d-flex flex-row justify-content-center align-items-center">
                            <h3 className="recPlace"> Rio de Janeiro </h3>
                            <h5 className="recTown"> Cristo Redentor, Jardim Botânico </h5>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/nobresturismo/" target="blank" className="col-12 img-box" rel="noreferrer">
                        <div className="child img3 d-flex flex-row justify-content-center align-items-center">
                            <h3 className="recPlace"> Nobres </h3>
                            <h5 className="recTown"> Salto do Tocum, Balneário Dona Máxima </h5>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/portalchapada_/" target="blank" className="col-12 img-box" rel="noreferrer">
                        <div className="child img4 d-flex flex-row justify-content-center align-items-center">
                            <h3 className="recPlace"> Chapada Diamantina </h3>
                            <h5 className="recTown"> Igatu, Lençóis </h5>
                        </div>
                    </a>
                    <a href="https://desviantes.com.br/pacote/AM/amazonia/amazonia-manaus-presidente-figueiredo-e-tupana-lodge-7-dias/?gclid=Cj0KCQjwqPGUBhDwARIsANNwjV4dDa4r7X-PrsbQ78ysAhTc_lj4Bw_JMIly0znuz5u1FLxfrLtIgwYaAoJAEALw_wcB" target="blank" className="col-12 img-box" rel="noreferrer">
                        <div className="child img5 d-flex flex-row justify-content-center align-items-center">
                            <h3 className="recPlace"> Amazônia </h3>
                            <h5 className="recTown"> Tribos, Mata Atlântica </h5>
                        </div>
                    </a>
                    <a href="https://hoteisfioreze.com.br/o-que-fazer-em-gramado/" target="blank" className="col-12 img-box" rel="noreferrer">
                        <div className="child img6 d-flex flex-row justify-content-center align-items-center">
                            <h3 className="recPlace"> Gramado </h3>
                            <h5 className="recTown"> Serra Gaúcha, Canela </h5>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}