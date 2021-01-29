import React from 'react';
import { useHistory } from "react-router-dom";
import Header from '../../components/Header';
import { Container } from './styled';

export default () => {
    const history = useHistory();

    return (
        <Container>
            <Header />
        </Container>
    );
}