import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom' ;


import Logon from './pages/logon';
import Register from './pages/register';
import Home from './pages/home';
import Veiculos from './pages/veiculos';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/home" component={Home} />
                <Route path="/veiculos" component={Veiculos} />
            </Switch>
        </BrowserRouter>
    );
}