import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Category from './pages/Category';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

document.title = "Module 02 - Class 24"

function Class24() {

    return <>
        <BrowserRouter>
            <Header />

            <Switch>
                <Route exact path='/'>
                    <Home></Home>
                </Route>
                <Route exact path='/about'>
                    <About></About>
                </Route>
                <Route path='/category'>
                    <Category></Category>
                </Route>
                <Route component={NotFound}></Route>
            </Switch>

            <Footer />
        </BrowserRouter>
    </>

}

export default Class24