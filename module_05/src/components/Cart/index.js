import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    CartArea,
    CartBody,
    CartHeader,
    CartIcon,
    CartText,
    ProductArea,
    ProductInfoArea,
    ProductItem,
    ProductName,
    ProductPhoto,
    ProductPrice,
    ProductQuantityArea
} from './styled';
export default () => {

    const products = useSelector(state => state.cart.products);

    const [showCartBody, setShowCartBody] = useState(true);

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
                <ProductArea>
                    {products.map((product) => (
                        <ProductItem key={product.id}>
                            <ProductPhoto src={product.image} />
                            <ProductInfoArea>
                                <ProductName>{product.name}</ProductName>
                                <ProductPrice>R$ {product.price.toFixed(2).replace('.', ',')}</ProductPrice>
                            </ProductInfoArea>
                            <ProductQuantityArea>

                            </ProductQuantityArea>
                        </ProductItem>
                    ))}
                </ProductArea>
            </CartBody>
        </CartArea >
    );
}