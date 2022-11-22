
import React from 'react';
import Moment from 'react-moment';
import './Plancard.css';

export default function Plancard(props) {

    const isUserPlanOwner = () => {
        if (props.planData.User.id === props.user.id) {
            return true
        } else {
            return false
        };
    };

    const isUserInPlan = () => {
        for (let i=0; i<props.planData.SavedUser.length; i++) {
            if (props.planData.SavedUser[i].id === props.user.id) { return true }
        };
        
        return false
    };

    return (
        <>
        {!props.planData ? (null) : (
            <div className="plan-card">
                <div className="plan-card-info-wrapper">
                    <h3>{props.planData.name}</h3>
                    <Moment format="DD MMM YYYY" date = {props.planData.date} />
                </div>
                <div className="plan-card-buttons-wrapper">
                    <button className="card-btn btn-left" onClick={(e) => { e.preventDefault(); props.handleDetailTarget(props.planData.id); }} > Detalhes </button>

                    { isUserPlanOwner() ? ( null ) : ( isUserInPlan() ? (
                        <button className="card-btn opt-out" onClick={(e) => { e.preventDefault(); props.handleOptOut(props.planData.id); }} > Indisponível </button>
                    ) : (
                        <button className="card-btn opt-in" onClick={(e) => { e.preventDefault(); props.handleOptIn(props.planData.id); }} > Disponível </button>
                    ))}
                </div>
            </div>
        )}
            
        </>
    )
}