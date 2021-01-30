import React, { useState } from 'react';
import Header from '../../components/Header';
import { Container } from './styled';

export default () => {

    const [headerSearch, setHeaderSearch] = useState('')

    return (
        <Container>
            <Header
                search={headerSearch}
                onSearch={setHeaderSearch}
            />
        </Container>
    );
}