import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../../components/MainComponents.js';
import AdItem from '../../components/partials/AdItem';
import { useApi } from '../../helpers/OlzAPI';
import { PageArea, SearchArea } from './styled.js';

function Home() {

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

    return <>
        <SearchArea>
            <PageContainer>
                <div className="search-box">
                    <form method="GET" action="/ads">
                        <input type="text" name="search-query" placeholder="What do you need?"></input>
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
                <h2>Recent Ads</h2>
                <div className="ad-list">
                    {adList.map((ad, key) =>
                        <AdItem className='ad-item' key={key} data={ad} />
                    )}
                </div>
                <Link to="/ads" className='see-all-link'>See All</Link>

                <hr />

                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </PageArea>
        </PageContainer>
    </>
}

export default Home