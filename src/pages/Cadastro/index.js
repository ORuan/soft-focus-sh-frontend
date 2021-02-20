import React, { Component } from 'react';
import './styles.css';
import { Link, Redirect } from 'react-router-dom';
import { Button, Container, Notification, Navbar } from 'react-bulma-components'
import 'bulma/css/bulma.css'
import navabar_logo from '../../assets/superhero.png'

import ApiCreate from '../../services/api'

const getDataRegister = (e) => {
    e.preventDefault()
    const qs = document.querySelectorAll('.input')

    const data = {
        "email": qs[0].value,
        "password": qs[1].value
    }
    ApiCreate('POST', 'api/v1/users/', data, false)
        .then((response) => {
            return document.location.pathname = "/login"
        }).catch((error) => {
            alert(error)

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
                <form>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input" type="email" required placeholder="Digite seu email" />
                            <span></span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <span></span>
                        <div className="control">
                            <input className="input" type="password" required placeholder="Digite sua senha" />
                        </div>
                    </div>

                    <div className="columns">
                        <div className="column">
                            <button className="button is-link is-fullwidth" onClick={(e) => { getDataRegister(e) }}>Cadastro</button>
                        </div>
                        <div className="column">
                            <Link className="button is-link is-fullwidth" to="/login"> Não tem conta? Faça login</Link>
                        </div>
                    </div>
                </form>

            </Container>
        </div>
    )
}
export default Cadastro;