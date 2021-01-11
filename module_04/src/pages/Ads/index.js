import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { PageContainer } from '../../components/MainComponents.js';
import AdItem from '../../components/partials/AdItem';
import { useApi } from '../../helpers/OlzAPI';
import { PageArea } from './styled.js';

let timer;
const ITEMS_PER_PAGE = 8;

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

    const [adsTotal, setAdsTotal] = useState(0);
    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const [resultOpacity, setResultOpacity] = useState(1);
    const [loading, setLoading] = useState(true);

    let pagination = [];

    for (let i = 1; i <= pageCount; i++) {
        pagination.push(i);
    }

    async function getAdList() {
        setLoading(true);
        let offset = (currentPage -1) * ITEMS_PER_PAGE;
        const json = await api.getAds({
            sort: 'desc',
            limit: ITEMS_PER_PAGE,
            q: searchQuery,
            cat: category,
            state,
            offset: offset
        });
        setAdList(json.ads);
        setAdsTotal(json.total);
        setResultOpacity(1);
        setLoading(false);
    }

    useEffect(() => {
        if (adList.length > 0) {
            setPageCount(Math.ceil(adsTotal / adList.length));
        } else {
            setPageCount(0);
        }
    }, [adsTotal]);

    useEffect(() => {
        setResultOpacity(0.3);
        getAdList();
    }, [currentPage])

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
        });

        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(getAdList(), 20000);
        setResultOpacity(0.3);
        setCurrentPage(1);
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
                        <div className="filter-name" >Category:</div>
                        <ul>
                            {categories.map(cat =>
                                <li
                                    key={cat._id}
                                    className={category === cat.slug ? 'category-item active' : 'category-item'}
                                    onClick={() => setCategory(cat.slug)}>
                                    <img src={cat.img} alt={cat.name} />
                                    <span>{cat.name}</span>
                                </li>
                            )}
                        </ul>
                    </form>
                </div>
                <div className="right-side">
                    <h2>Results</h2>
                    {loading && adList.length === 0 &&
                        <div className="list-warning">Loading</div>
                    }
                    {!loading && adList.length === 0 &&
                        <div className="list-warning">No results found.</div>
                    }
                    <div className="list" style={{ opacity: resultOpacity }}>
                        {adList.map((ad, index) =>
                            <AdItem key={index} data={ad} />
                        )}
                    </div>

                    {pageCount > 1 &&
                        <div className="pagination">
                            {pagination.map(page =>
                                <div onClick={() => setCurrentPage(page)} key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>{page}</div>
                            )}
                        </div>
                    }
                </div>
            </PageArea>
        </PageContainer>
    );
};