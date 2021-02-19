import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { Button, Container, Notification } from 'react-bulma-components'
import 'bulma/css/bulma.css'
import logo from '../../assets/logo.png'
import ApiCreate from '../../services/api'

const getDataLogin = async () => {
    const fields = {
        "username": document.querySelectorAll('.input')[0].value.toString(),
        "password": document.querySelectorAll('.input')[1].value.toString()
    }

    await ApiCreate('POST', 'api-token-auth/', fields, false)
        .then(function (response) {
            localStorage.setItem('auth-token', response.data);
        }).catch(function (error) {
            console.log(error);
        })
}


function Login() {
    return (
        <Container breakpoint="widescreen" id="container" className="container is-dark">

            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="email" placeholder="Digite seu email" />
                </div>
            </div>
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" type="password" placeholder="Digite sua senha" />
                </div>
            </div>
            <div class="control">
                <button class="button is-link is-fullwidth" onClick={getDataLogin} >Login</button>
            </div>
        </Container>
    );
}
export default Login;