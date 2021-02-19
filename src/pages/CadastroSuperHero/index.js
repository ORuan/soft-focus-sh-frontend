import React, { Component, useState } from 'react';
import './styles.css';
import { Link, Redirect } from 'react-router-dom';
import { Button, Container, Notification, Navbar } from 'react-bulma-components'
import 'bulma/css/bulma.css'
import navabar_logo from '../../assets/superhero.png'
import ApiCreate from '../../services/api'
import VerifyOrRedirect from '../../services/utils'

const getDataSuperHero = async () => {
    let file = new FormData()
    file.append('name', document.querySelectorAll('.input')[0].value)
    file.append('speed', document.querySelectorAll('.input')[1].value)
    file.append('height', document.querySelectorAll('.input')[2].value)
    file.append('description', document.querySelectorAll('.textarea')[0].value)
    file.append('weigth', document.querySelectorAll('.input')[3].value)
    file.append('power', document.querySelectorAll('.input')[4].value)
    file.append('universe', document.querySelectorAll('#value-hidden')[0].value)
    file.append('super_hero_image-', document.querySelectorAll('.file-input')[0].files[0])

    await ApiCreate('POST', "api/v1/super-heros/", file, true).then(response => {
        console.log(response.status)
    })
}

function CadastroSuperHero() {
    const [select, setSelect] = useState('')
    if (localStorage.getItem('auth-token') == null) {

        return <Redirect to="/login" />
    }

    return (
        <>
            <input hidden="true" value={select} id="value-hidden">
            </input>
            <Navbar id="navbar">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src={navabar_logo} width="112" height="28" />
                    </a>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-light">
                                    <strong>Criar SH</strong>
                                </a>
                                <a className="button is-light">
                                    <strong>Logout</strong>
                                </a>
                                <a className="button is-primary">Batalhar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>
            <Container breakpoint="widescreen" id="container-cadastro">
                <h2 className="title is-2 is-white">Cadastro SuperHero</h2>
                <div className="columns">
                    <div className="column">
                        <div className="field">
                            <label className="label">Nome</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Nome" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Velocidade</label>
                            <div className="control">
                                <input className="input" type="number" placeholder="Velocidade" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Altura</label>
                            <div className="control">
                                <input className="input" type="number" placeholder="Altura" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Descrição</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="ex: Meu herói é top"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label">Peso</label>
                            <div className="control">
                                <input className="input" type="number" placeholder="Peso" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Poder</label>
                            <div className="control">
                                <input className="input" type="number" placeholder="Poder" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Universo</label>
                            <select className="select" onChange={(e) => { setSelect(e.target.value) }}>
                                <option>Select dropdown</option>
                                <option>MARVEL</option>
                                <option>DC COMICS</option>
                            </select>
                        </div>
                        <div className="field">
                            <label className="label">
                                Faça Upload do Avatar
                                </label>
                            <div className="file is-boxed has-name field">
                                <label className="file-label">
                                    <input className="file-input" type="file" name="resume" />

                                    <span className="file-cta">
                                        <span className="file-label">
                                            <span className="material-icons" style={{ "textAlign": "center" }}>
                                                backup
                                        </span>
                                            Upload Avatar
                                        </span>
                                    </span>
                                    <span className="file-name">
                                        *.png or *.jpg
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="control">
                    <button className="button is-link" onClick={() => { getDataSuperHero() }} >Cadastro</button>
                </div>
            </Container >
        </>
    )
}

export default CadastroSuperHero;