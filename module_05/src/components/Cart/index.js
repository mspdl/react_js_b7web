import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    ProductQuantityArea,
    ProductQuantityIcon,
    ProductQuantityText
} from './styled';
export default () => {

    const dispatch = useDispatch();

    const products = useSelector(state => state.cart.products);

    const [showCartBody, setShowCartBody] = useState(true);

    const handleCartHeaderClick = () => {
        setShowCartBody(!showCartBody);
    }

    const handleProductChange = (productId, name, type) => {
        dispatch({
            type: 'CHANGE_PRODUCT_QUANTIY',
            payload: { productId, type }
        });
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
                                <ProductQuantityIcon
                                    src="/assets/minus.png"
                                    onClick={() => handleProductChange(product.id, product.name, '-')}
                                />
                                <ProductQuantityText>{product.quantity}</ProductQuantityText>
                                <ProductQuantityIcon
                                    src="/assets/plus.png"
                                    onClick={() => handleProductChange(product.id,product.name, '+')}
                                />
                            </ProductQuantityArea>
                        </ProductItem>
                    ))}
                </ProductArea>
            </CartBody>
        </CartArea >
    );
}