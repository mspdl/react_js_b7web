import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Container, Title } from './styled';

export default () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const name = useSelector(state => state.user.name);

    const handleTextChange = (e) => {
        dispatch({
            type: 'SET_NAME',
            payload:{
                name: e.target.value
            }
        });
    }

    return (
        <Container>
            <Title>{name}'s Second Screen</Title>
            <input type="text" value={name} onChange={handleTextChange} />
            <button onClick={()=>history.goBack()}>Go Back</button>
        </Container>
    );
}