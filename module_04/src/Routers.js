import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

function Routers() {
    return <>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
        </Switch>
    </>
}

export default Routers