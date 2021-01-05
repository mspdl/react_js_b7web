import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './pages/About'
import AdPage from './pages/AdPage'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'

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
            <Route exact path='/ad/:id'>
                <AdPage />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    </>
}

export default Routes