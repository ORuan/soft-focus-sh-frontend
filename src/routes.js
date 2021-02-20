import { Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import CadastroSuperHero from './pages/CadastroSuperHero';
import HomePage from './pages/HomePage';
import Batalha from './pages/Batalha';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Login} path="/login" exact/>
            <Route component={CadastroSuperHero} path="/cadastro-super-hero" exact/>
            <Route component={Cadastro} path="/cadastro-users" exact/>
            <Route component={Batalha} path="/batalhar" exact/>
            <Route component={HomePage} path="/" exact/>
        </BrowserRouter>
    );
}
export default Routes;