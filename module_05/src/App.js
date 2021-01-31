import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactToolTip from 'react-tooltip';
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
                    <MenuItem title="Store" icon="/assets/store.png" link="/" />
                    <MenuItem title="Orders" icon="/assets/order.png" link="/orders" />
                    <MenuItem title="Profile" icon="/assets/profile.png" link="/profile" />
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
                <ReactToolTip id="tip-top" place="top" effect="solid" />
                <ReactToolTip id="tip-right" place="right" effect="solid" />
            </Container>
        </BrowserRouter>
    );
}