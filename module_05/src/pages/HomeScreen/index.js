import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import api from '../../api';
import CategoryItem from '../../components/CategoryItem';
import Header from '../../components/Header';
import { CategoryArea, CategoryList, Container } from './styled';

export default () => {

    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setCategories] = useState([]);

    const [activeCategory, setActiveCategory] = useState(0);

    const getCategories = async () => {
        const categoriesFromAPI = await api.getCategories();
        if (categoriesFromAPI.error === '') {
            setCategories(categoriesFromAPI.result);
        }
        ReactTooltip.rebuild();
    }
    
    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {

    }, [activeCategory]);

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
            {categories.length > 0 &&
                <CategoryArea>
                    Select a category:
                    <CategoryList>
                        <CategoryItem
                            data={{
                                id: 0,
                                name: 'All categories',
                                image: '/assets/food-and-restaurant.png'
                            }}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        />
                        {categories.map((category, index) => (
                            <CategoryItem
                                key={index}
                                data={category}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                            />
                        ))}
                    </CategoryList>
                </CategoryArea>
            }
        </Container>
    );
}