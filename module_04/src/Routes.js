import React from 'react'
import { Switch } from 'react-router-dom'
import RouteHandler from './components/RouteHandler'
import About from './pages/About'
import AddAd from './pages/AddAd'
import AdPage from './pages/AdPage'
import Ads from './pages/Ads'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'

function Routes() {
    return (
        <Switch>
            <RouteHandler exact path="/">
                <Home />
            </RouteHandler>
            <RouteHandler exact path="/about">
                <About />
            </RouteHandler>
            <RouteHandler exact path='/login'>
                <Login />
            </RouteHandler>
            <RouteHandler exact path='/register'>
                <Register />
            </RouteHandler>
            <RouteHandler exact path='/ad/:id'>
                <AdPage />
            </RouteHandler>
            <RouteHandler exact path='/ads'>
                <Ads />
            </RouteHandler>
            <RouteHandler private exact path='/post-an-add'>
                <AddAd />
            </RouteHandler>
            <RouteHandler>
                <NotFound />
            </RouteHandler>
        </Switch>
    );
}

export default Routes