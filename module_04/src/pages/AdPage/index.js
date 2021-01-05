import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageContainer } from '../../components/MainComponents.js';
import { useApi } from '../../helpers/OlzAPI';
import { PageArea, Fake } from './styled.js';

function AdPage() {

    const api = useApi();
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState([]);

    return <>
        <PageContainer>
            <PageArea>
                <div className="left-side">
                    <div className="box">
                        <div className="ad-image">
                            {loading && <Fake height={300} />}
                        </div>
                        <div className="ad-info">
                            <div className="ad-name">
                                {loading && <Fake height={20} />}
                            </div>
                            <div className="ad-description">
                                {loading && <Fake height={100} />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="box box-padding">
                        {loading && <Fake height={20} />}
                    </div>
                    <div className="box box-padding">
                        {loading && <Fake height={50} />}
                    </div>
                </div>
            </PageArea>
        </PageContainer>
    </>
}

export default AdPage