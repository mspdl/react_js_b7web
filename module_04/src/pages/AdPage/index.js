import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { PageContainer } from '../../components/MainComponents.js';
import { useApi } from '../../helpers/OlzAPI';
import { Fake, PageArea } from './styled.js';

function AdPage() {

    const api = useApi();
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState({});

    useEffect(() => {
        const getAdInfo = async (id) => {
            const json = await api.getAd(id, true);
            console.log(json)
            setAdInfo(json);
            setLoading(false);
        }
        getAdInfo(id);
    }, [])

    return <>
        <PageContainer>
            <PageArea>
                <div className="left-side">
                    <div className="box">
                        <div className="ad-image">
                            {loading && <Fake height={300} />}
                            {adInfo.images &&
                                <Slide>
                                    {adInfo.images.map((adImage, index) =>
                                        <div key={index} className="each-slide">
                                            <img src={adImage} alt="" />
                                        </div>
                                    )}
                                </Slide>
                            }
                        </div>
                        <div className="ad-info">
                            <div className="ad-name">
                                {loading && <Fake height={20} />}
                                {adInfo.title && <h2>{adInfo.title}</h2>}
                                {adInfo.dateCreated &&
                                    <small>Created Date: {moment(adInfo.dateCreated).fromNow()}</small>
                                }
                            </div>
                            <div className="ad-description">
                                {loading && <Fake height={100} />}
                                {adInfo.description}
                                <hr />
                                {adInfo.views &&
                                    <small>Views: {adInfo.views}</small>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="box box-padding">
                        {loading && <Fake height={20} />}
                        {adInfo.priceNegotiable && "Negotiable Price"}
                        {!adInfo.priceNegotiable && adInfo.price &&
                            <div className="price">Price: <span>{parseInt(adInfo.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></div>
                        }
                    </div>
                    {loading && <Fake height={50} />}
                    {adInfo.userInfo && <>
                        <a href={`mailto:${adInfo.userInfo.email}`} target="_blank" className="contact-seller-link">Contact Seller</a>
                        <div className="box box-padding">
                            <strong>{adInfo.userInfo.name}</strong>
                            <small>E-mail: {adInfo.userInfo.email}</small>
                            <small>Estate: {adInfo.stateName}</small>
                        </div>
                    </>}
                </div>
            </PageArea>
        </PageContainer>
    </>
}

export default AdPage