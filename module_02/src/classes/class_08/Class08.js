import React from 'react'
import styled from 'styled-components'

const Site = styled.div`
    width: 400px;
    height: 400px;
    background-color: #00FF00;
`;

const Button = styled.button`
    font-size: 19px;
    padding: 10px 15px;
    border: 3px solid #FF0000;
    color: #FF0000;
    background-color: #FFF;
    margin: 5px;
    border-radius: 5px;
`;

const LittleButton = styled(Button)`
    padding: 5px 10px;
    font-size: 16px
`;

function Class08() {

    return <>
        <Site>
            <Button>Click here</Button>
            <LittleButton>Click here</LittleButton>
        </Site>
    </>
}

export default Class08