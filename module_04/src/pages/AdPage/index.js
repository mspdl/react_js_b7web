import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageContainer } from '../../components/MainComponents.js';
import { useApi } from '../../helpers/OlzAPI';
import { PageArea } from './styled.js';

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
                            ad-image div 
                        </div>
                        <div className="ad-info">
                            <div className="ad-name">
                                ad-name div
                            </div>
                            <div className="ad-description">
                                ad-description div
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    right-side div
                </div>
            </PageArea>
        </PageContainer>
    </>
}

export default AdPage