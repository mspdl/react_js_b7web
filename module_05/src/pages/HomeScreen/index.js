import React, { useEffect, useState } from 'react';
import api from '../../api';
import Header from '../../components/Header';
import { Container } from './styled';

export default () => {

    const [headerSearch, setHeaderSearch] = useState('');

    useEffect(() => {
        const getCategories = async () => {
            const categories = await api.getCategories();
            console.log(categories);
        }
        getCategories();
    }, []);

    return (
        <Container>
            <Header
                search={headerSearch}
                onSearch={setHeaderSearch}
            />
        </Container>
    );
}