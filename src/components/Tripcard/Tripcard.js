import React, { useState, useEffect, createRef } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

// LOCAL IMPORTS
import './Tripcard.css';
import Budget from '../Budget/Budget.js';
import Lounge from '../Lounge/Lounge.js';
import Tripoverview from '../Tripoverview/Tripoverview.js';
import Plantab from '../Plans/Plans.js';
import api from '../../utils/api.js';

export default function Tripcard({ user, token }) {
    const { id } = useParams();
    const [tripData, setTripData] = useState(null);

    useEffect(() => {
        api.getSingleTrip(id).then(res => {setTripData(res.data)});
    }, [id])

    const [activeTab, setActiveTab] = useState('Overview')
    const overviewRef=createRef();
    const plansRef=createRef();
    const budgetRef=createRef();
    const loungeRef=createRef();

    const [planData, setPlanData] = useState(null);

    useEffect(() => {
        setPlanData(tripData ? tripData.Plans : null)
    }, [tripData])

    const planAddHandler = async (body) => {
        const res = await api.createPlan(body, {
            headers: {
                authorization: 'Viajante ${token}'
            }
        })

        // caso tenha sido um sucesso, recupere os novos
        if (res.status === 200) {
            const allPlanData = await api.getAllTripPlans(id);
            setPlanData(allPlanData.data);
            return res.data.id
        } else {
            alert('Erro ao criar novo plano...');
            return null
        }
    };

    // Deletando um itinerário
    const planDeleteHandler = async (planId) => {
        const res = await api.deletePlan(planId, {
            headers: {
                authorization: 'Viajante ${token}',
            }
        });

        if (res.status === 200) {
            const allPlanData = await api.getAllTripPlans(id);
            setPlanData(allPlanData.data);
            return true
        } else {
            alert('Erro ao deletar itinerário...')
            return false
        }
    }

    // atualizando um plano
    const planUpdateHandler = async (planId, body) => {
        const res = await api.updatePlan(planId, body, {
            headers: {
                authorization: 'Viajante: ${token}',
            }
        });

        // on success, retrieve new trip data for re-render
        if (res.status === 200) {
            const allPlanData = await api.getAllTripPlans(id);
            setPlanData(allPlanData.data);
        };
    }

    // Comentários de plano - tratar
    const planCommentCreateHandler = async (body) => {

        const res = await api.createComment(body, {
            headers: {
                authorization: 'Viajante ${token}'
            }
        });

        if (res.status === 200) {
            const allPlanData = await api.getAllTripPlans(id);
            setPlanData(allPlanData.data);
        } else {
            alert('Erro ao fazer comentário de plano...');
        }
    }

    // Deletar um comentário
    const planCommentDeleteHandler = async (commentId) => {

        const res = await api.deleteComment(commentId, {
            headers: {
                authorization: 'Viajante ${token}'
            }
        });

        if (res.status === 200) {
            const allPlanData = await api.getAllTripPlans(id);
            setPlanData(allPlanData.data)
        } else {
            alert('Erro ao deletar comentário...')
        }
    }

    // Adicionar usuário a um plano
    const optInHandler = async (planId) => {

        const res = await api.addUserToPlan({
            UserId: user.id,
            PlanId: planId,
        });

        if (res.status === 200) {
            const allPlanData = await api.getAllTripPlans(id);
            setPlanData(allPlanData.data);
        } else {
            alert('Erro ao adicionar no plano...');
        }
    }

    // Remover do plano
    const optOutHandler = async (planId) => {
        
        const res = await api.removeUserFromPlan({
            UserId: user.id,
            PlanId: planId,
        });

        if (res.status === 200) {
            const allPlanData = await api.getAllTripPlans(id);
            setPlanData(allPlanData.data);
        } else {
            alert('Erro ao remover do plano...');
        }
    }

    const [budgetData, setBudgetData] = useState(null);

    useEffect(() => {
        if (user.id) {
            api.getSingleBudget(id, user.id).then(res => {
                if (res.data) {
                    setBudgetData(res.data[0]);
                }
            });
        }
    }, [id, user])

    // HANDLE CHANGING BUDGET SIZE
    const changeBudgetTotal = async (budgetId, newTotal) => {

        const res = await api.updateBudget(budgetId, {
            total: newTotal
        }, {
            headers: {
                authorization: 'Viajante ${token}',
            }
        });

        if (res.status === 200) {
            const budgetRes = await api.getSingleBudget(id, user.id);
            setBudgetData(budgetRes.data[0]);
        } else {
            alert('Erro ao conectar servidor...')
        }
    };

    // ----- BUDGET CATEGORIES

    const budgetCategoryCreateHandler = async (body) => {
        const res = await api.createBudgetCategory(body, {
            headers: {
                authorization: 'Viajante ${token}'
            }
        });

        if (res.status === 200) {
            const newBudgetData = await api.getSingleBudget(id, user.id);
            setBudgetData(newBudgetData.data[0]);
            return true
        } else {
            alert('Erro ao criar categoria de gastos');
            return false
        }
    };

    const budgetCategoryUpdateHandler = async (categoryId, body) => {
        const res = await api.updateBudgetCategory(categoryId, body, {
            headers: {
                authorization: 'Viajante ${token}',
            }
        });

        if (res.status === 200) {
            const newBudgetData = await api.getSingleBudget(id, user.id);
            setBudgetData(newBudgetData.data[0]);
        } else {
            alert('Erro ao editar categoria de valor...')
        }
    }

    const budgetCategoryDeleteHandler = async (categoryId) => {
        const res = await api.deleteBudgetCategory(categoryId, {
            headers: {
                authorization: 'Viajante ${token}'
            }
        });

        if (res.status === 200) {
            const newBudgetData = await api.getSingleBudget(id, user.id);
            setBudgetData(newBudgetData.data[0]);
        } else {
            alert('Erro ao deletar categoria de gastos...')
        };
    }

    const budgetItemCreateHandler = async (body) => {
        const res = await api.createBudgetItem(body, {
            headers: {
                authorization: 'Viajante ${token}',
            }
        });

        if (res.status === 200) {
            const newBudgetData = await api.getSingleBudget(id, user.id);
            setBudgetData(newBudgetData.data[0]);
        } else {
            alert('Erro ao criar gasto...');
        }
    };

    const budgetItemUpdateHandler = async (itemId, body) => {
        const res = await api.updateBudgetItem(itemId, body, {
            headers: {
                authorization: 'Viajante ${token}',
            }
        });

        if (res.status === 200) {
            const newBudgetData = await api.getSingleBudget(id, user.id);
            setBudgetData(newBudgetData.data[0]);
        } else {
            alert('Erro ao atualizar gasto...');
        }
    };

    const budgetItemDeleteHandler = async (itemId) => {
        const res = await api.deleteBudgetItem(itemId, {
            headers: {
                authorization: 'Viajante ${token}'
            }
        });

        if (res.status === 200) {
            const newBudgetData = await api.getSingleBudget(id, user.id);
            setBudgetData(newBudgetData.data[0]);
        } else {
            alert('Erro ao deletar item da categoria...');
        };
    };

    // STATES, EFFECTS, METHODS 

    const [messageData, setMessageData] = useState(null);
    const [travellerData, setTravellerData] = useState(null);

    useEffect(() => {
        // atualizar plano
        setMessageData(tripData ? tripData.Comments : null);
        setTravellerData(tripData ? tripData.SavedUser : null);
    }, [tripData])

    const userAddHandler = async (tripId, userId) => {
        const res = await api.addUserToTrip({
            TripId: tripId,
            UserId: userId
        }, {
            headers: {
                authorization: 'Viajante ${token}',
            }
        });

        const budgetRes = await api.createBudget({
            TripId: tripId,
            UserId: userId
        }, {
            headers: {
                authorization: 'Viajante ${token}',
            }
        });

        if (res.status === 200 && budgetRes.status === 200) {
            api.getSingleTrip(id).then(res => {setTripData(res.data)});
        } else {
            alert('Erro ao adicionar viajante neste ID...');
        };
    };

    const postCreateHandler = async (body) => {
        const res = await api.createComment(body, {
            headers: {
                authorization: 'Viajante ${token}',
            }
        });

        if (res.status === 200) {
            const newCommentData = await api.getAllTripComments(id);
            setMessageData(newCommentData.data);
        } else {
            alert('Erro ao adicionar comentário...')
        }
    };

    const postDeleteHandler = async (postId) => {
        const res = await api.deleteComment(postId, {
            headers: {
                authorization: 'Viajante ${token}',
            }
        });

        if (res.status === 200) {
            const newCommentData = await api.getAllTripComments(id);
            setMessageData(newCommentData.data);
            return true
        } else {
            alert('Erro ao deletar comentário');
            return false
        };
    };




 
    // RENDER APPROPRIATE CONTENT

    // HANDLE TAB SWITCHING
    const handleTabSwitch = (e) => {
        e.preventDefault();
        
        // set all classlists to just tab
        overviewRef.current.className = "trip-nav-item";
        plansRef.current.className = "trip-nav-item";
        budgetRef.current.className = "trip-nav-item";
        loungeRef.current.className = "trip-nav-item";

        // set target to active
        e.target.classList.add('trip-nav-active');
        setActiveTab(e.target.id)
    };

    // HANDLE TAB RENDERING
    const renderTab = () => {
        if (!activeTab) {
            return <Tripoverview
                        trip={tripData}
                        plans={planData}
                    />
        } else if (activeTab === 'Overview') {
            return <Tripoverview
                        trip={tripData}
                        plans={planData}
                    />
        } else if (activeTab === 'Plans') {
            return (
                <div>
                    <h1>Itinerários</h1>
                    <Plantab
                        planData={planData}
                        user={user}
                        token={token}
                        handlePlanCreate={planAddHandler}
                        handlePlanDelete={planDeleteHandler}
                        handlePlanUpdate={planUpdateHandler}
                        handleCommentCreate={planCommentCreateHandler}
                        handleCommentDelete={planCommentDeleteHandler}
                        handleOptIn={optInHandler}
                        handleOptOut={optOutHandler}
                    />
                </div>
            )
        } else if (activeTab === 'Budget') {
            return (
                <div>
                    <h1>Gastos</h1>
                    <Budget
                        user={user}
                        token={token}
                        budgetData={budgetData}
                        changeTotal={changeBudgetTotal}
                        handleAddBudgetCategory={budgetCategoryCreateHandler}
                        handleUpdateBudgetCategory={budgetCategoryUpdateHandler}
                        handleDeleteBudgetCategory={budgetCategoryDeleteHandler}
                        
                        handleCreateBudgetItem={budgetItemCreateHandler}
                        handleUpdateBudgetItem={budgetItemUpdateHandler}
                        handleDeleteBudgetItem={budgetItemDeleteHandler}
                    />
                </div>
            )
        } else if (activeTab === 'Lounge') {
            return (
                <div>
                    <h1>Chat</h1>
                    <Lounge
                        user={user}
                        token={token}

                        messages={messageData}
                        travellers={travellerData}
                        creator={tripData.User}

                        handleUserAddition={userAddHandler}
                        handlePostCreate={postCreateHandler}
                        handlePostDelete={postDeleteHandler}
                    />
                </div>
            )
        }
    };

    return (
        <Container fluid className="trips-main">
            <Container>
                <div className="trip-nav">
                    <button className="trip-nav-item trip-nav-active" id="Overview" onClick={handleTabSwitch} ref={overviewRef}>Resumo</button>
                    <button className="trip-nav-item" id="Plans" onClick={handleTabSwitch} ref={plansRef}>Itinerários</button>
                    <button className="trip-nav-item" id="Budget" onClick={handleTabSwitch} ref={budgetRef}>Gastos</button>
                    <button className="trip-nav-item" id="Lounge" onClick={handleTabSwitch} ref={loungeRef}>Chat</button>
                </div>
                <div className="trip-content">
                    {renderTab()}
                </div>
            </Container>
        </Container>
    )
}