import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'

function Routes() {
    return <>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path='/login'>
                <Login />
            </Route>
            <Route exact path='/register'>
                <Register />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    </>
}

export default Routes