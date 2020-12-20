import React from 'react'
import './Class06.css'
import styled from 'styled-components'

const Title = styled.h1`
    color: pink;
    font-family: verdana
`;

const Site = styled.div`
    width: 400px;
    height: 400px;
    background-color: blue;
`;

function Class06() {

    return <>
        <Site>
            <Title>Nice Title</Title>
        </Site>
    </>
}

export default Class06