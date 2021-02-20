import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { Button, Container, Notification, Navbar } from 'react-bulma-components'
import 'bulma/css/bulma.css'
import navabar_logo from '../../assets/superhero.png'

import ApiCreate from '../../services/api'

const getDataRegister = () => {
    const qs = document.querySelectorAll('.input')

    const data = {
        "email": qs[0].value,
        "password": qs[1].value
    }
    ApiCreate('POST', 'api/v1/users/', data, false)
        .then((response) => {
            if (response.status == 200) {
                //
            }
        })

}
function Cadastro() {
    return (
        <div>
            <Navbar className="navbar" id="navbar">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src={navabar_logo} width="112" height="28" />
                    </a>
                </div>
            </Navbar>
            <Container breakpoint="widescreen" id="container-cadastro">
                <h2 className="title is-2 is-white">Cadastro</h2>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="Digite seu email" />
                        <span></span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <span></span>
                    <div className="control">
                        <input className="input" type="password" placeholder="Digite sua senha" />
                    </div>
                </div>
                <div className="control">
                    <button className="button is-link " onClick={getDataRegister}>Cadastro</button>
                </div>
            </Container>
        </div>
    )
}
export default Cadastro;