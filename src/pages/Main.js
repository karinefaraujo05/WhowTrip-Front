/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';

import Features from '../components/Features/Features';
import Contact from '../components/Contact/Contact';
import Recommendation from '../components/Recommendation/Recommendation';
import LoginModal from '../components/LoginModal/LoginModal';
import SignupModal from '../components/SignupModal/SignupModal';

import './Main.css';

export default function Main(props) {
    const [mainHeight, setMainHeight] = useState(window.innerHeight);

    // Definindo altura da navbar
    useEffect(() => {
        function handleResize() {
            setMainHeight(window.innerHeight)
        }
        window.addEventListener('resize', handleResize);
        return _ => {
            window.removeEventListener('resize', handleResize);
        }
    }, [mainHeight])

    // Botões de Login e SingUp
    const [loginModalState, setLoginModalState] = useState(false);
    const [signupModalState, setSignupModalState] = useState(false);

    const loginModalClose = () => setLoginModalState(false);
    const loginModalShow = () => setLoginModalState(true);
    const signupModalClose = () => setSignupModalState(false);
    const signupModalShow = () => setSignupModalState(true);

    // Login 
    const [loginFormState, setLoginFormState] = useState({
        username: "",
        password: ""
    });

    const handleLoginFormSubmit = e => {
        e.preventDefault();
        api.login(loginFormState).then(res => {
            localStorage.setItem('userId', res.data.user.id);
            props.setUserState({
                ...props.userState,
                user: {
                    email: res.data.user.email,
                    username: res.data.user.username,
                }
            })
        }).catch(err => {
            console.log(err);
            localStorage.removeItem('userId');
            props.setUserState({
                user: {}
            })
        });
        setLoginFormState({
            username: "",
            password: ""
        })
    };

    return (
        <div>
            <div id="home">
                <div className="home-main" style={{ height: mainHeight }}>
                    <h1 className="let-us-plan-for-you text-light"> Organize sua nova viagem de <p> maneira espetacular! </p></h1>
                    <h4 style={{ marginBottom: "60px" }} className="subHeader text-light"> Tenha em mãos seu destino! </h4>
                    {!props.user?.username ? (<div className="mb-3">
                        <button onClick={loginModalShow} className="loginShadow modal-button mx-2" id="loginBtn">
                            <span className="material-icons md-18"> login </span><br />
                            Login
                        </button>
                        <button onClick={signupModalShow} className="signupShadow modal-button mx-2" id="signupBtn">
                            <span className="material-icons">
                                person_add
                            </span><br />
                            Signup

                        </button>
                    </div>) : (<div className="d-flex flex-column align-items-center"><h4 className="welcomeBackShadow" style={{ color: "white" }}>Bem Vindo(a), {props.user.username}</h4> <Link to="/createTrip">
                        <button className="getStartedShadow modal-button mx-2">
                            <span className="material-icons">
                                flight_takeoff
                            </span>
                            <br />
                            Quero Planejar!

                        </button>
                    </Link> </div>)}

                    <a href="/#features" className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""/>
                </div>
                <LoginModal loginModalState={loginModalState} loginModalClose={loginModalClose} loginFormState={loginFormState} setLoginFormState={setLoginFormState} handleLoginFormSubmit={handleLoginFormSubmit} />
                <SignupModal signupModalState={signupModalState} signupModalClose={signupModalClose} />
            </div>
            <Recommendation />
            <Features />
            <Contact />
        </div>
    )
}