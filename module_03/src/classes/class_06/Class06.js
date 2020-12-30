import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import PrivatePage from './pages/PrivatePage';

document.title = 'Module 03 - Class 06'

function Class06() {

    const isLogged = true;

    function PrivateRoute({ children, ...rest }) {
        return <>
            <Route {...rest}>
                {isLogged ? children : <Redirect to='/login' />}
            </Route>
        </>
    }

    return <>
        <BrowserRouter>
            <Header />

            <Switch>
                <Route exact path='/'>
                    <Home></Home>
                </Route>
                <PrivateRoute exact path='/private-page'>
                    <PrivatePage />
                </PrivateRoute>
                <Route exact path='/about'>
                    <About />
                </Route>
                <Route exact path='/login'>
                    <Login />
                </Route>
                <Route path='*'>
                    <NotFound />
                </Route>
            </Switch>

            <Footer />
        </BrowserRouter>
    </>
}

export default Class06