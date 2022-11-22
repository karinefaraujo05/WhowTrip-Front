import React from 'react';
import CreateTripCard from '../components/CreateTripCard/CreateTripCard';

export default function CreateTrip(props) {
    return (
        <CreateTripCard userState={props.userState} user={props.user} />
    )
}