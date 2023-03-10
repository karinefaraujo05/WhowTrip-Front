import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCrown } from '@fortawesome/free-solid-svg-icons';

import './Lounge.css';
import Message from '../Loungemessage/Loungemessage.js';
import api from '../../utils/api';

export default function Lounge(props) {

    const location = window.location.pathname;
    const getId = location.split('/');
    const id = getId[2]
    
    // setar todas as visualizações
    const [viewAll, setViewAll] = useState(true);
    // comentário principal
    const [postContent, setPostContent] = useState('');
    // sub comentários
    const [commentContent, setCommentContent] = useState('');
    // comentários individuais
    const [targetCommentIndex, setTargetCommentIndex] = useState(0);
    // barra de busca
    const [allUsers, setAllUsers] = useState([]);
    const [visibleSearchedUsers, setVisibleSearchedUsers] = useState([]);
    const [searchedUser, setSearchedUser] = useState('');
    const [searchedUserId, setSearchedUserId] = useState('');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const userData = await api.getAllUsers();

        const users = [];
        for (let i=0; i<userData.data.length; i++) {
            users.push({
                username: userData.data[i].username,
                id: userData.data[i].id,
            });
        };
        setAllUsers(users);
    }, []);

    useEffect(() => {
        if (searchedUser === '') {
            setVisibleSearchedUsers([]);
        } else {
            const searchResults = [];
            for (let i=0; i<allUsers.length; i++) {
                if (allUsers[i].username.toLowerCase().includes(searchedUser) || allUsers[i].username.includes(searchedUser)) {
                    searchResults.push(allUsers[i])
                }
            };
            setVisibleSearchedUsers(searchResults);
        }

    }, [allUsers, searchedUser]);

    const updateCommentTarget = (commentId) => {
        for (let i=0; i<props.messages.length; i++) {
            if (props.messages[i].id === commentId) {
                setTargetCommentIndex(i);
                setViewAll(false);
            }
        }
    };

    const handleExitCommentViewerClick = (e) => {
        e.preventDefault();
        setViewAll(true);
    };

    // adicionar usuário a viagem
    const handleAddUser = async (e) => {
        e.preventDefault();
        props.handleUserAddition(id, searchedUserId);
        setSearchedUser('');
    };

    // criar um novo comentário na viagem
    const postSubmitHandler = async (e) => {
        e.preventDefault();
        const body = {
            UserId: props.user.id,
            content: postContent,
            TripId: id,
        };
        props.handlePostCreate(body);
        setPostContent('');
    };

    // criar novo subcomentário
    const commentSubmitHandler = async (e) => {
        e.preventDefault();
        const body = {
            CommentId: props.messages[targetCommentIndex].id,
            content: e.target.elements[0].value,
            UserId: props.user.id,
        };
        props.handlePostCreate(body);
        setCommentContent('');
    }

    return (
        <Row style={{marginTop: '20px'}}>
            <Col lg={3}>
                <div className="travellers">
                    <h3 style={{alignSelf: 'center', lineHeight: '1.5em'}}>Viajantes</h3>
                    <div className="traveller">
                        <FontAwesomeIcon icon={faCrown} size='1x' className='me-2' />
                        {props.creator.username}
                    </div>
                    {props.travellers ? (props.travellers.map((traveller, index) => {
                        return (
                            <div className="traveller" key={index}>
                                <FontAwesomeIcon icon={faUser} size='1x' className="me-2" />
                                {traveller?.username}
                            </div>
                        )
                    })) : (null)}
                    <div className="search-area">
                        <form onSubmit={handleAddUser}>
                            <Form.Control
                                className="search-bar"
                                type="text"
                                placeholder="Procure por UserName"
                                value={searchedUser}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setSearchedUser(e.target.value);

                                    for (let i=0; i<allUsers.length; i++) {
                                        if (e.target.value.toLowerCase() === allUsers[i].username.toLowerCase()) {
                                            setSearchedUserId(allUsers[i].id)
                                        };
                                    };
                                }}
                            />
                            <input type="submit" style={{display: 'none'}} />
                            <div className="search-list">
                                {visibleSearchedUsers.map((user, index) => (
                                    <button
                                        key={index}
                                        className="result"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setSearchedUser(user.username);
                                            setSearchedUserId(user.id);
                                        }}
                                    >
                                        {user.username}
                                    </button>
                                ))}
                            </div>
                        </form>
                    </div>
                </div>
            </Col>
            <Col lg={9}>
                <div className="message-board"> <h3> Quadro de Opiniões </h3>
                    {viewAll === true ? (
                        <div className="messages">
                            {props.messages.map(message => {
                                return (
                                    <button
                                        className="message-button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            updateCommentTarget(message.id)
                                        }}
                                        key={message.id}
                                        message={message}
                                        data-id={message.id}
                                    >
                                        <Message
                                            message={message}
                                            data-id={message.id}
                                            user={props.user}
                                            handleDelete={props.handlePostDelete}
                                        />
                                    </button>
                                )}
                            )}
                        </div>
                    ) : (
                        <div className="messages">
                            <button className="back-to-view-all-btn" onClick={handleExitCommentViewerClick} > <FontAwesomeIcon icon={faChevronCircleLeft} size='1x' className="me-2"/> Voltar </button>
                            <div className="comment-subject-wrapper">
                                <h6 className="comment-subject-content">{props.messages[targetCommentIndex].content}</h6>
                                <p className="comment-subject-poster">
                                    {props.messages[targetCommentIndex].User.username} - 
                                    <Moment className="comment-subject-date" format="DD MMM YYYY" date = {props.messages[targetCommentIndex].createdAt} />
                                </p>
                            </div>
                            <p> Respostas: </p>
                            {props.messages[targetCommentIndex].SubComment ? (props.messages[targetCommentIndex].SubComment.map(message =>
                                (<Message
                                    key={message.id}
                                    message={message}
                                    data-id={message.id}
                                    user={props.user}
                                    handleDelete={props.handlePostDelete}
                                />)
                            )) : ( null )}
                        </div>
                    )}
                    {viewAll === true ? (
                        <form id="post-submit-form" onSubmit={postSubmitHandler}>
                            <Form.Control type="text" placeholder="Escreva o que pensa sobre esse lugar!" 
                                value={postContent}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setPostContent(e.target.value)
                                }}
                            />
                        </form>
                    ) : (
                        <form id="comment-submit-form" onSubmit={commentSubmitHandler}>
                            <Form.Control type="text" placeholder="Deixe a sua opinião!"
                                value={commentContent}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setCommentContent(e.target.value);
                                }}
                            />
                        </form>
                    )}
                </div>
            </Col>
        </Row>
    )
}