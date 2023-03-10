import React, {  } from 'react';
import Moment from 'react-moment';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlaneDeparture, faPlaneArrival, faCrown, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import './Tripoverview.css';

export default function Tripoverview({ trip, plans }) {
    return (
        <>
        {trip && plans ?  (
        <div className="overview-wrapper">
            <div className="overview-header">
                <h1>{trip.name}</h1>
                <h2>{trip.destination}</h2>
            </div>
            
            <div className="date-wrapper">
                <FontAwesomeIcon className="mx-3" icon={faPlaneDeparture} size='1x' />
                <Moment className="date-item" format="DD MMM YYYY" date = {trip.departure} />
                <FontAwesomeIcon className="mx-3" icon={faArrowRight} size='1x' />
                <Moment className="date-item" format="DD MMM YYYY" date = {trip.return} />
                <FontAwesomeIcon className="mx-3" icon={faPlaneArrival} size='1x' />
            </div>

            <Row className="summary-wrapper">
                <Col sm={12} lg={6} className="summary-colum-left">
                    <div className="items-wrapper middle">
                        <h4>   Viajantes: </h4>
                        <div className="overview-item trip-owner">
                            <FontAwesomeIcon icon={faCrown} size='1x' className='me-2' />
                            {trip?.User.username}
                        </div>
                        {trip?.SavedUser.map((traveller, index) => {
                            return (
                                <div className="overview-item" key={index}>
                                    <FontAwesomeIcon icon={faUserCircle} size='1x' className="me-2" />
                                    {traveller?.username}
                                </div>
                            )
                        })}
                    </div>
                </Col>
                <Col sm={12} lg={6} className="summary-colum-right">
                    <div className="items-wrapper middle">
                        <h4> Planejamento: </h4>
                        {plans.map((plan, index) => {
                            return (
                                <div className="overview-item" key={index}>
                                    {plan.name}
                                </div>
                            )
                        })}
                    </div>
                </Col>
            </Row>
        </div>
        ) : (null)}
        </>
    )
}