import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Menu, PageBody } from './AppStyled';
import MenuItem from './components/MenuItem';
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
                        <Route path="/second-screen">
                            <SecondScreen />
                        </Route>
                    </Switch>
                </PageBody>
            </Container>
        </BrowserRouter>
    );
}