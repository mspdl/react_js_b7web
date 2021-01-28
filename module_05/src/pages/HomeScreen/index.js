import React from 'react';
import { useHistory } from "react-router-dom";
import { Container, Title } from './styled';

export default () => {
    const history = useHistory();

    const handleButtonClick = () => {
        history.push('/second-screen');
    }

    return (
        <Container>
            <Title>Homepage</Title>
            <button onClick={handleButtonClick}>Go To Second Screen</button>
        </Container>
    );
}