import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { PageContainer } from '../../components/MainComponents.js';
import { useApi } from '../../helpers/OlzAPI';
import { PageArea } from './styled.js';

export default function Ads() {

    const api = useApi();

    const history = useHistory();

    const useQueryString = () => {
        return new URLSearchParams(useLocation().search);
    }

    const query = useQueryString();

    const [searchQuery, setSearchQuery] = useState(query.get('search-query') != null ? query.get('search-query') : '');
    const [category, setCategory] = useState(query.get('cat') != null ? query.get('cat') : '');
    const [state, setState] = useState(query.get('state') != null ? query.get('state') : '');


    const [stateList, setStateList] = useState([])
    const [categories, setCategories] = useState([])
    const [adList, setAdList] = useState([])

    useEffect(() => {
        let queryString = [];
        if (searchQuery) {
            queryString.push(`search-query=${searchQuery}`)
        }
        if (category) {
            queryString.push(`cat=${category}`)
        }
        if (state) {
            queryString.push(`state=${state}`)
        }
        history.replace({
            search: `?${queryString.join('&')}`
        })
    }, [searchQuery, category, state])

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
                        <input
                            type="text"
                            name="search-query"
                            placeholder="What are you looking for?"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div className="filter-name">State:</div>
                        <select
                            name="state"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        >
                            <option></option>
                            {stateList.map(state =>
                                <option key={state._id} value={state.name}>{state.name}</option>
                            )}
                        </select>
                        <div className="filter-name">Category:</div>
                        <ul>
                            {categories.map(cat =>
                                <li
                                    key={cat._id}
                                    className={category === cat.slug ? 'category-item active' : 'category-item'}
                                    onClick={() => setCategory(cat.slug)}
                                >
                                    <img src={cat.img} alt={cat.name} />
                                    <span>{cat.name}</span>
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