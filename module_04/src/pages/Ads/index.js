import React, { useEffect, useState } from 'react';
import { PageContainer } from '../../components/MainComponents.js';
import { useApi } from '../../helpers/OlzAPI';
import { PageArea } from './styled.js';

export default function Ads() {

    const api = useApi();

    const [stateList, setStateList] = useState([])
    const [categories, setCategories] = useState([])
    const [adList, setAdList] = useState([])

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

    useEffect(() => {
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort: 'desc',
                limit: 8
            });
            setAdList(json.ads);
        }
        getRecentAds();
    }, [])

    return (
        <PageContainer>
            <PageArea>
                <div className="left-side">
                    <form method="GET">
                        <input type="text" name="query" />
                        <div className="filter-name">State:</div>
                        <select name="state">
                            <option></option>
                            {stateList.map(state =>
                                <option key={state._id} value={state.name}>{state.name}</option>
                            )}
                        </select>
                        <div className="filter-name">Category:</div>
                        <ul>
                            {categories.map(category =>
                                <li key={category._id} className="category-item">
                                    <img src={category.img} alt={category.name}/>
                                    <span>{category.name}</span>
                                </li>
                            )}
                        </ul>
                    </form>
                </div>
                <div className="right-side">
                    rest of the content
                </div>
            </PageArea>
        </PageContainer>
    );
};