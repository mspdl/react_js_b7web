import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    CartArea,
    CartBody,
    CartHeader,
    CartIcon,
    CartText,
    ProductInfoArea,
    ProductItem,
    ProductName,
    ProductPhoto,
    ProductPrice,
    ProductQuantityArea,
    ProductQuantityIcon,
    ProductQuantityText,
    ProductsArea
} from './styled';
export default () => {

    const dispatch = useDispatch();

    let products = useSelector(state => state.cart.products);

    const [showCartBody, setShowCartBody] = useState(false);

    const handleCartHeaderClick = () => {
        setShowCartBody(!showCartBody);
    }

    const handleProductChange = (productId, type) => {
        dispatch({
            type: 'CHANGE_PRODUCT_CART_QUANTIY',
            payload: { productId, type }
        });
    }

    return (
        <CartArea>
            <CartHeader onClick={handleCartHeaderClick} clickable={products.length > 0 ? true : false}>
                <CartIcon src="/assets/cart.png" />
                <CartText>Shopping Cart ({products.length})</CartText>
                {showCartBody &&
                    <CartIcon src="/assets/down.png" />
                }
            </CartHeader>
            <CartBody show={showCartBody}>
                {products.length === 0 &&
                    <div>Cart is empty</div>
                }
                <ProductsArea>
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
                                    onClick={() => handleProductChange(product.id, '-')}
                                />
                                <ProductQuantityText>{product.quantity}</ProductQuantityText>
                                <ProductQuantityIcon
                                    src="/assets/plus.png"
                                    onClick={() => handleProductChange(product.id, '+')}
                                />
                            </ProductQuantityArea>
                        </ProductItem>
                    ))}
                </ProductsArea>
            </CartBody>
        </CartArea >
    );
}