import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CartArea, CartBody, CartHeader, CartIcon, CartText } from './styled';
export default () => {

    const products = useSelector(state => state.cart.products);

    const [showCartBody, setShowCartBody] = useState(false);

    const handleCartHeaderClick = () => {
        setShowCartBody(!showCartBody);
    }

    return (
        <CartArea>
            <CartHeader onClick={handleCartHeaderClick}>
                <CartIcon src="/assets/cart.png" />
                <CartText>Shopping Cart ({products.length})</CartText>
                {showCartBody &&
                    <CartIcon src="/assets/down.png" />
                }
            </CartHeader>
            <CartBody show={showCartBody}>
                <div style={{width:50, height: 300, backgroundColor: 'red'}}></div>
                Cart Body
            </CartBody>
        </CartArea >
    );
}