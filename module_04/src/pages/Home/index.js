import React, { useEffect, useState } from 'react';
import { PageContainer } from '../../components/MainComponents.js';
import { useApi } from '../../helpers/OlzAPI';
import { PageArea, SearchArea } from './styled.js';

function Home() {

    const api = useApi();

    const [stateLoc, setStateLoc] = useState('')
    const [stateList, setStateList] = useState([])

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    }, [])

    return <>
        <SearchArea>
            <PageContainer>
                <div className="search-box">
                    <form method="GET" action="/ads">
                        <input type="text" name="q" placeholder="What do you need?"></input>
                        <select value={stateLoc} onChange={(e) => setStateLoc(e.target.value)} required>
                            <option></option>
                            {stateList.map((state, index) =>
                                <option key={index} value={state._id}>{state.name}</option>
                            )}
                        </select>
                        <button>Search</button>
                    </form>
                </div>
                <div className="category-list"></div>
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