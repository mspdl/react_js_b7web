import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../../components/MainComponents.js';
import { useApi } from '../../helpers/OlzAPI';
import { PageArea, SearchArea } from './styled.js';

function Home() {

    const api = useApi();

    const [stateList, setStateList] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    }, [])

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    }, [])

    return <>
        <SearchArea>
            <PageContainer>
                <div className="search-box">
                    <form method="GET" action="/ads">
                        <input type="text" name="q" placeholder="What do you need?"></input>
                        <select name="state">
                            {stateList.map((state, index) =>
                                <option key={index} value={state.name}>{state.name}</option>
                            )}
                        </select>
                        <button>Search</button>
                    </form>
                </div>
                <div className="category-list">
                    {categories.map((category, index) =>
                        <Link key={index} to={`/ads?cat=${category.slug}`} className="category-item">
                            <img src={category.img}></img>
                            <span>{category.name}</span>
                        </Link>
                    )}
                </div>
            </PageContainer>
        </SearchArea>
        <PageContainer>
            <PageArea>
                ...
            </PageArea>
        </PageContainer>
    </>
}

export default Home