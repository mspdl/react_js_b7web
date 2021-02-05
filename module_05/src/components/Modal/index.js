import React from 'react';
import { Container, ModalBody } from './styled';

export default ({ children, status, setStatus }) => {

    const handleModalClick = (e) => {
        if (e.target.classList.contains("modal-background")) {
            setStatus(false);
        }
    }

    return (
        <Container
            className="modal-background"
            status={status}
            onClick={handleModalClick}
        >
            <ModalBody>
                {children}
            </ModalBody>
        </Container>
    );
}