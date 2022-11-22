import React, { useState } from 'react';
import Moment from 'react-moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import Form from 'react-bootstrap/Form';
import Message from '../Loungemessage/Loungemessage.js'

import './Plandetails.css';

export default function Plandetails(props) {
    
    const [isEditing, setIsEditing] = useState(false);
    const [commentValue, setCommentValue] = useState('');
    const [planTitle, setPlanTitle] = useState(props.planData.name);
    const [planContent, setPlanContent] = useState(props.planData.content);
    const [planBudget, setPlanBudget] = useState(props.planData.budget);

    const togglePlanEditor = (e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
    }
    
    // adicionar comentário no plano
    const submitPlanComment = (e) => {
        e.preventDefault();
        props.commentHandler(props.planData.id, commentValue);
        setCommentValue('');
    };
    
    // apagar comentário
    const deleteComment = (commentId) => {
        props.commentDeleteHandler(commentId);
    };

    // atualizar plano
    const updatePlan = (e) => {
        e.preventDefault();
        const body = {
            name: planTitle,
            budget: planBudget,
            content: planContent,
        };
        props.planUpdateHandler(props.planData.id, body);
        setIsEditing(false);
    }

    // apagar plano
    const deletePlan = (e) => {
        e.preventDefault();

        if (window.confirm('Você realmente quer deletar esse itinerário?')) {
            props.planDeleteHandler(props.planData.id);
        };
    };

    return (
        <>
        <div className="plan-item-center opted-in-travellers">
        <div className="plan-partaker plan-creator">
            <FontAwesomeIcon icon={faCrown} size='1x' className='me-2' /> {props.planData.User.username} </div>
            {props.planData.SavedUser.map((savedUser, i) => {
                return (
                    <div key={i} className="plan-partaker">
                        <FontAwesomeIcon icon={faUserCircle} size='1x' className='me-2' /> {savedUser.username}
                    </div>
                    )
            })}
        </div>

        {!props.planData ? ( null ) : (
        <div className="plan-detail-wrapper">
            {props.user.id === props.planData.User.id ? (
                <div className="action-button-wrapper">
                    <button className="icon-btn" onClick={togglePlanEditor}> 📝 </button>
                    <button className="icon-btn" onClick={deletePlan}> ✖️ </button>
                </div>
            ) : ( null )}
            {isEditing ? (
                <form onSubmit={updatePlan} className="plan-update-form">
                    <input type="text" value={planTitle} onChange={(e) => { 
                            e.preventDefault();
                            setPlanTitle(e.target.value);
                        }}
                        className="plan-title-input"
                    />
                    <Moment className="plan-item-date" format="DD MMM YYYY" date = {props.planData.date} />
                    <textarea type="text" rows="2" value={planContent} onChange={(e) => {
                            e.preventDefault();
                            setPlanContent(e.target.value);
                        }}
                        className="plan-content-input"
                    />
                    <p className="plan-item-center">
                        Custo Aproximado: R$ 
                        <input type="number" step="0.01" value={planBudget}
                            onChange={(e) => {
                                e.preventDefault();
                                setPlanBudget(e.target.value);
                            }}
                            className="plan-budget-input"
                        />
                    </p>
                    <div className="plan-item-center opted-in-travellers">
                    <div className="plan-partaker plan-creator">
                        <FontAwesomeIcon icon={faCrown} size='1x' className='me-2' />
                        {props.planData.User.username}
                    </div>
                    {props.planData.SavedUser.map((savedUser, i) => {
                        return (
                            <div key={i} className="plan-partaker">
                                <FontAwesomeIcon icon={faUserCircle} size='1x' className='me-2' />
                                {savedUser.username}
                            </div>
                        )
                    })}
                    </div>
                    <input type="submit" value="Atualizar plano ➜" className="edit-plan-input" />
                </form>
            ) : (
                <>
                <h3 className="plan-item-center"> 📍{props.planData.name}</h3>
                <Moment className="plan-item-date" format="DD MMM YYYY" date = {props.planData.date} />
                <p className="plan-item-center"> 🏷️ {props.planData.content}</p>
                <p className="plan-item-center"> 💲 R$: {props.planData.budget}</p>
                </>
            )}
            <div className="plan-item-center plan-comments">
                {props.planData.Comments.map((comment, i) => {
                    return (
                        <Message 
                            key={i}
                            message={comment}
                            user={props.user}
                            handleDelete={deleteComment}
                        />
                    )
                })}
                <form onSubmit={submitPlanComment}>
                    <Form.Control type="text" placeholder="Dê sua opinião!"
                        value={commentValue}
                        onChange={(e) => {
                            e.preventDefault();
                            setCommentValue(e.target.value);
                        }}
                    />
                </form>
            </div>
        </div>
    )}
    </>
    )
}