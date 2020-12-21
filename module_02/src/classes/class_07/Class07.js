import React from 'react'
import './Class07.css'
import styled from 'styled-components'

const Site = styled.div`
    width: 400px;
    height: 400px;
    background-color: #00FF00;
`;

const Button = styled.button`
  font-size: 19px;
  padding: 10px 15px;
  background-color: ${props => props.disable === true ? '#CCCCCC' : '#0000FF'};
  color: ${props => props.disable === true ? '#FFF' : '##000'};
`;

function Class07() {

    return <>
        <Site>
            <Button disable={true}>Click here</Button>
            <Button disable={false}>Click here</Button>
        </Site>
    </>
}

export default Class07