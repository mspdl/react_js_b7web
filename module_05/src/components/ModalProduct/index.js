import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    Container,
    ProductArea,
    ProductButton,
    ProductButtons,
    ProductDetails,
    ProductInfoArea,
    ProductIngredients,
    ProductName,
    ProductPhoto,
    ProductPrice,
    ProductQuantity,
    ProductQuantityAndPriceArea,
    ProductQuantityImage,
    ProductQuantityText
} from './styled';

export default ({ data, setStatus }) => {

    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setQuantity(1);
    }, [data])

    const handleCancelButton = () => {
        setStatus(false);
    }

    const handleMinusQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handlePlusQuantity = () => {
        setQuantity(quantity + 1);
    }

    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_PRODUCT',
            payload: { data, quantity }
        });
        setStatus(false);
    }

    return (
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image} />
                <ProductInfoArea>
                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                    </ProductDetails>
                    <ProductQuantityAndPriceArea>
                        <ProductQuantity>
                            <ProductQuantityImage onClick={handleMinusQuantity} src="/assets/minus.png" />
                            <ProductQuantityText>{quantity}</ProductQuantityText>
                            <ProductQuantityImage onClick={handlePlusQuantity} src="/assets/plus.png" />
                        </ProductQuantity>
                        <ProductPrice>
                            R$ {(data.price * quantity).toFixed(2)}
                        </ProductPrice>
                    </ProductQuantityAndPriceArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton small={true} onClick={handleCancelButton}>Cancel</ProductButton>
                <ProductButton onClick={handleAddToCart}>Add to Cart</ProductButton>
            </ProductButtons>
        </Container>
    );
}