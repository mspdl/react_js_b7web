import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import api from '../../api';
import CategoryItem from '../../components/CategoryItem';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import ModalProduct from '../../components/ModalProduct';
import ProductItem from '../../components/ProductItem';
import {
    CategoryArea,
    CategoryList,
    Container,
    ProductArea,
    ProductList,
    ProductPaginationArea,
    ProductPaginationItem
} from './styled';

let searchTimer = null;

export default () => {

    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const [modalStatus, setModalStatus] = useState(false);
    const [modalData, setModalData] = useState({});

    const [activeCategory, setActiveCategory] = useState(0);
    const [activePage, setActivePage] = useState(1);
    const [activeSearch, setActiveSearch] = useState('');

    const getProducts = async () => {
        const productsFromAPI = await api.getProducts(activeCategory, activePage, activeSearch);
        if (productsFromAPI.error === '') {
            setProducts(productsFromAPI.result.data);
            setTotalPages(productsFromAPI.result.pages);
            setActivePage(productsFromAPI.result.page);
        }
    }

    const getCategories = async () => {
        const categoriesFromAPI = await api.getCategories();
        if (categoriesFromAPI.error === '') {
            setCategories(categoriesFromAPI.result);
        }
        ReactTooltip.rebuild();
    }

    useEffect(() => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
            setActiveSearch(headerSearch);
        }, 2000);
    }, [headerSearch]);

    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {
        getProducts();
    }, [activeCategory]);

    useEffect(() => {
        setProducts([]);
        getProducts();
    }, [activeCategory, activePage, activeSearch]);

    const handleProductClick = (data) => {
        setModalData(data);
        setModalStatus(true);
    }

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
            {products.length > 0 &&
                <ProductArea>
                    <ProductList>
                        {products.map((product, index) => (
                            <ProductItem
                                key={index}
                                data={product}
                                onClick={handleProductClick}
                            />
                        ))}
                    </ProductList>
                </ProductArea>
            }

            {totalPages > 1 &&
                <ProductPaginationArea>
                    {Array(totalPages).fill(0).map((productPage, index) => (
                        <ProductPaginationItem
                            key={index}
                            active={activePage}
                            current={index + 1}
                            onClick={() => setActivePage(index + 1)}
                        >
                            {index + 1}
                        </ProductPaginationItem>
                    ))}
                </ProductPaginationArea>
            }

            <Modal status={modalStatus} setStatus={setModalStatus}>
                <ModalProduct data={modalData} />
            </Modal>
        </Container>
    );
}