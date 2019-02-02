import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from '../dashboard/dashboard'
import PokemonStats from '../pokemon/pokemonStats'

export default props => (

    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Dashboard} />
            <Route path="/pokemonStats" exact={true} component={PokemonStats} />
        </Switch>
    </BrowserRouter>
)