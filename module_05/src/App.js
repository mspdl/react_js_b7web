import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Menu, PageBody } from './AppStyled';
import Cart from './components/Cart';
import MenuItem from './components/MenuItem';
import PrivateRoute from './components/PrivateRoute';
import HomeScreen from './pages/HomeScreen';
import SecondScreen from './pages/SecondScreen';

export default () => {
    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem icon="/assets/store.png" link="/" />
                    <MenuItem icon="/assets/order.png" link="/orders" />
                    <MenuItem icon="/assets/profile.png" link="/profile" />
                </Menu>
                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <PrivateRoute path="/orders">
                            <div>ORDERS SCREEN</div>
                        </PrivateRoute>
                        <PrivateRoute path="/profile">
                            <div>PROFILE SCREEN</div>
                        </PrivateRoute>
                        <Route path="/second-screen">
                            <SecondScreen />
                        </Route>
                    </Switch>
                </PageBody>
                <Cart />
            </Container>
        </BrowserRouter>
    );
}