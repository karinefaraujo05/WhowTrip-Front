import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

import './Plans.css';
import Plancard from '../Plancard/Plancard.js';
import Plandetails from '../Plandetails/Plandetails.js';

export default function Plantab(props) {

    const location = window.location.pathname;
    const getId = location.split('/');
    const id = getId[2]
    
    const [viewAllPlans, setViewAllPlans] = useState(true);
    const [isAddingPlan, setIsAddingPlan] = useState(false);
    const [targetPlanIndex, setTargetPlanIndex] = useState(0);
    const [newPlanName, setNewPlanName] = useState('');
    const [newPlanDate, setNewPlanDate] = useState(null);
    const [dateFocus, setDateFocus] = useState(false);

    const updatePlanTarget = (planId) => {
        // encontrar os dados do planID dentro do planData 
        for (let i=0; i<props.planData.length; i++) {
            if (props.planData[i].id === planId) {
                setTargetPlanIndex(i)
                setViewAllPlans(false);
            };
        };
    };

    const toggleIsAddingPlan = (e) => {
        e.preventDefault();
        setIsAddingPlan(!isAddingPlan);
    }

    const handlePlanCreate = async (e) => {
        e.preventDefault();

        const body = {
            TripId: id,
            name: newPlanName,
            budget: 0,
            content: '',
            UserId: props?.user.id,
            date: moment(newPlanDate._d).format("MM/DD/YYYY"),
        };

        const newPlanId = props.handlePlanCreate(body);

        if (newPlanId) {
            // novo plano
            setTargetPlanIndex(updatePlanTarget(newPlanId))
            setIsAddingPlan(false);
            setNewPlanName('');
            setNewPlanDate(null);
        };
    };

    const handlePlanDelete = async (planId) => {
        const deletePlan = props.handlePlanDelete(planId);
        if (deletePlan) { setViewAllPlans(true);};
    };

    const handlePlanUpdate = async (planId, body) => { props.handlePlanUpdate(planId, body); };
    
    const handleCommentOnPlan = async (planId, message) => {
        const body = {
            UserId: props?.user.id,
            PlanId: planId,
            content: message
        };
        props.handleCommentCreate(body);
    };

    const handleCommentDelete = async (commentId) => {
        props.handleCommentDelete(commentId);
    }

    return (
        <>
        {!props.planData ? (null) : (
            <>
            {viewAllPlans ? (
                <div className="plan-wrapper-super">
                    <button className="add-plan-button" onClick={toggleIsAddingPlan} > Adicione um plano </button>
                    <div className="plan-cards-wrapper">
                        <>
                        {isAddingPlan ? (
                            <form className="plan-card" onSubmit={handlePlanCreate}>
                                <input type="text" placeholder="Adicione aqui o seu plano:" value={newPlanName}
                                    onChange={(e) => {
                                        e.preventDefault();
                                        setNewPlanName(e.target.value);
                                    }}
                                />
                                <div className="single-date-input">
                                    <SingleDatePicker
                                        date={newPlanDate}
                                        onDateChange={date => {
                                            setNewPlanDate(date)
                                        }}
                                        focused={dateFocus}
                                        onFocusChange={({focused}) => setDateFocus(focused)}
                                        id="create-plan-date-picker"
                                        required={true}
                                    />
                                </div>
                                <input type="submit" value="Adicione" className="submit-add-plan" />
                            </form>
                        ) : ( null )}
                        {props.planData.map((plan, i) => 
                            <Plancard
                                key={i}
                                planData={plan}
                                handleDetailTarget={updatePlanTarget}
                                handleOptIn={props.handleOptIn}
                                handleOptOut={props.handleOptOut}
                                user={props?.user}
                            />)
                        }
                        </>
                    </div>
                </div>
            ) : (
                <div>
                    <button
                        className="view-all-plans-button"
                        onClick={(e) => {
                            e.preventDefault();
                            setViewAllPlans(true);
                        }}
                    >
                        <FontAwesomeIcon icon={faChevronCircleLeft} size='1x' className="me-2"/>
                        Voltar
                    </button>
                    <Plandetails
                        planData={props.planData[targetPlanIndex]}
                        user={props?.user}
                        planDeleteHandler={handlePlanDelete}
                        planUpdateHandler={handlePlanUpdate}
                        commentHandler={handleCommentOnPlan}
                        commentDeleteHandler={handleCommentDelete}
                    />
                </div>
            )}
            </>
        )}
        </>
    )
}