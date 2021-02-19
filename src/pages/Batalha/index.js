import React, { Component, useEffect, useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { Button, Container, Notification, Navbar } from 'react-bulma-components'
import 'bulma/css/bulma.css'
import ApiCreate from '../../services/api'
import navabar_logo from '../../assets/superhero.png'
import Card from '../../components/card'
import CadastroSuperHero from '../CadastroSuperHero'
import $, { get } from 'jquery'
import ReactModal from 'react-modal';

import Modal from '../../components/card'
import { within } from '@testing-library/react';

function get_heros_combat() {
    const uud_token_storage = localStorage.getItem('uuid-token')
    return ApiCreate('GET', 'api/v1/users/' + uud_token_storage + '/super_hero/').then(response => {
        return response.data
    })
}

function Batalha() {
    const [superHero, setsuperHero] = useState([])

    useEffect(async () => {
        const data_hero = await get_heros_combat()
        console.log(data_hero)
        setsuperHero(data_hero)
    }, [])

    const [select_fs, setselect_fs] = useState(0)
    const [select_sd, setselect_sd] = useState(0)

    const data = {
        "first_superhero": select_fs.toString(),
        "second_superhero": select_sd.toString()
    }
    const [winner, setwinner] = useState(0)
    const [instance_winner, setinstance_winner] = useState({})


    async function define_winner() {
        const winner_response = await ApiCreate('POST', "api/v1/combat/", data)
            .then(async (response) => {
                setwinner(response.data)
                setinstance_winner(await ApiCreate('GET', `api/v1/super-heros/${response.data.winner}/`).then(response => { return response.data }))
            }).catch(error => {
                console.error(error)
            })
    }

    return (
        <>
            <ReactModal
                isOpen={true}
                parentSelector={
                    () => document.getElementById('root')
                }
                preventScroll={
                    false
                }
            >
                <h2 className="title">Escolha seus Superheros</h2>
                <div className="row">
                    <div className="columns">
                        <div className="column">
                            <div className="select" >
                                <select onChange={(e) => { setselect_sd(e.target.value) }}>
                                    <option disabled selected> Escolha o primeiro heŕoi</option>
                                    {
                                        superHero.map((item) => {
                                            return (
                                                <option key={item.id} value={item.id}>{item.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="column">
                            <div className="select">
                                <select onChange={(e) => { setselect_fs(e.target.value) }}>
                                    <option disabled selected>Escolha o primeiro heŕoi</option>
                                    {
                                        superHero.map((item) => {
                                            return (
                                                <option key={item.id} value={item.id}>{item.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="column">
                            <button class="button  is-link" onClick={define_winner} >COMECAR A BATALHA</button>
                        </div>
                    </div>

                </div>
                {winner != 0 &&
                    <Notification>
                        <h6 className="title">O vencedor é {instance_winner.id}</h6>

                    </Notification>
                }
            </ReactModal >
            <Navbar className="navbar" id="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src={navabar_logo} width="112" height="28" />
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true">
                        </span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link to="/cadastro-super-hero" className="button is-light">
                                    <strong>Criar SH</strong>
                                </Link>
                                <Link to="/logout" className="button is-light">
                                    <strong>Logout</strong>
                                </Link>
                                <Link to="/batalhar" className="button is-primary">
                                    Batalhar
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>
            <Container breakpoint="fullscreen" id="container-cadastro">
            </Container>
        </>
    )
}

export default Batalha;