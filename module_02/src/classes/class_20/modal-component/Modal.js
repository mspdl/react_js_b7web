import React from 'react'
import styled from 'styled-components'

const ModalBackground = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 90;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalArea = styled.div`
    background-color: #FFF;
    padding: 10px;
`


function Modal(props) {
    return <>
        <ModalBackground>
            <ModalArea>
                {props.children}
            </ModalArea>
        </ModalBackground>

    </>
}

export default Modal