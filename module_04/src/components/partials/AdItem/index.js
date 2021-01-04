import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from './styled';

function AdItem(props) {

    let price = '';
    if (props.data.priceNegotiable) {
        price = "Negotiable Price"
    } else {
        price = parseInt(props.data.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return <>
        <Item className="ad-item">
            <Link to={`/ad/${props.data.id}`}>
                <div className="item-img">
                    <img src={props.data.image} alt="" />
                </div>
                <div className="item-name">{props.data.title}</div>
                <div className="item-price">{price}</div>
            </Link>
        </Item>
    </>

}

export default AdItem