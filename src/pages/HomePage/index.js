import React, { Component, useState, useEffect } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { Button, Container, Notification, Navbar } from 'react-bulma-components'
import 'bulma/css/bulma.css'
import navabar_logo from '../../assets/superhero.png'
import Card from '../../components/card'
import CadastroSuperHero from '../CadastroSuperHero'
import Slider from "react-slick";
import ApiCreate from '../../services/api'



async function getSuperHeros() {
    const uud_token_storage = localStorage.getItem('uuid-token')
    return ApiCreate('GET', 'api/v1/users/' + uud_token_storage + '/super_hero/')
        .then(response => {
            return response.data
        }).catch(error => {
            if (error.response.status == 404) {
                return error.response.status
            }
            return error
        })
}
async function getToken() {
    const token = localStorage.getItem('auth-token')
    ApiCreate('GET', 'get-uuid-token/' + token + '/').then(response => {
        localStorage.setItem('uuid-token', response.data)
    })
}

function HomePage() {
    const [superHeros, setsuperheros] = useState([])

    useEffect(async () => {
        const data = await ApiCreate('GET', 'api/v1/users/' + localStorage.getItem('uuid-token') + '/super_hero/')
        console.log(data.data)
        setsuperheros(data.data)
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: superHeros.length
    };
    return (
        <>
            <Navbar className="navbar" id="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src={navabar_logo} width="112" height="28" />
                    </a>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                        data-target="navbarBasicExample">
                        <span aria-hidden="true">
                        </span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu" >
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link to="/cadastro-super-hero" className="button is-light">
                                    <strong>Criar SH</strong>
                                </Link>
                                <Link to="/batalhar" className="button is-primary">
                                    Batalhar
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>
            <div>
            </div>

            <Container breakpoint="fullscreen" id="container-cadastro">
                <h2 className="title is-2 is-white">Favoritos SH</h2>
                <div id="carousel-demo" className="carousel">
                    <Slider {...settings}>
                        {superHeros.map(item => {
                            return (
                                item.stared == true &&
                                <div className="columns" key={item.toString()}>
                                    <div className="column" >
                                        <div className="item-2">
                                            <div>
                                                <Card
                                                    title={item.name}
                                                    image="https://external-content.duckduckgo.com/iu/?u=https://static.zerochan.net/Superman.(Character).full.2527499.jpg&f=1&nofb=1"
                                                    description={item.description}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                <h2 className="title is-2 is-white">SuperHero</h2>
                <div id="carousel-demo" className="carousel">
                    <Slider {...settings}>
                        {superHeros.map(item => {
                            return (
                                item.stared == false &&
                                <div className="columns" key={item.toString()}>
                                    <div className="column" >
                                        <div className="item-2">
                                            <div>
                                                <Card
                                                    title={item.name}
                                                    image="https://external-content.duckduckgo.com/iu/?u=https://static.zerochan.net/Superman.(Character).full.2527499.jpg&f=1&nofb=1"
                                                    description={item.description}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </Container>
        </>
    )
}


export default HomePage;