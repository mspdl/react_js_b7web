import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Menu, PageBody } from './AppStyled';
import MenuItem from './components/MenuItem';
import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';


export default () => {
    const name = useSelector(state => state.user.name);

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
                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                    </Switch>
                </PageBody>
            </Container>
        </BrowserRouter>
    );
}