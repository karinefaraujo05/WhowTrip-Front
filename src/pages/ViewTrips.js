import React, { useState, useEffect } from 'react';
import ViewTripsCard from '../components/ViewTripsCard/ViewTripsCard';

import viewTripImg from '../assets/viewTrip.png';
import earth from '../assets/earth.png';
import './ViewTrips.css';
import api from '../utils/api';

export default function ViewTrips(props) {

    const [userTripData, setUserTripData] = useState([]);

    useEffect(() => {
        if (props.user.id) {
            api.getUser(props.user.id).then(res => {
                setUserTripData([...res.data.Trips, ...res.data.SavedTrip]);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [props.user.id]);

    const tripDeleteHandler = async (tripId) => {
        const res = await api.deleteTrip(tripId, {
            headers: {
                authorization: 'Viajante'
            }
        });
        if (res.status === 200) {
            api.getUser(props.user.id).then(res => {
                setUserTripData([...res.data.Trips, ...res.data.SavedTrip]);
            })
        } else {
            console.log('Erro au atualizar viagem');
        }
    };

    const toThatTripHandler = (id) => {
        window.location = '/trips/${id}'
    }

    const toCreateTripHandler = () => {
        window.location = '/createTrip'
    }

    return (
        <div className="viewTripsMain">

            <div className="viewTripsHeaderBox">
                <img className="viewTripsBackgroundImg" src={viewTripImg} />
                <h1 className="viewTripsHeader"> Suas Viagens </h1>
            </div>

            <div className="viewTripsCardContainer">
                {(userTripData.length === 0) ?
                    (<div style={{ color: "white" }}>
                        <h3>Você ainda não programou nenhuma viagem! </h3></div>)
                    :
                    <>
                        {
                            userTripData.map((tripData, i) =>
                                <ViewTripsCard user={props.user.id} handleDelete={tripDeleteHandler} key={i} userTripData={tripData} toThatTripHandler={toThatTripHandler} />
                            )
                        }
                    </>}
            </div>

            <div>
                <button style={{marginBottom:"40px"}} onClick={toCreateTripHandler} className="btn viewTripPageCreateBtn">
                    Crie uma nova viagem!
                </button>
            </div>
        </div>
    )
}