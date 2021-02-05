import React from 'react';
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

    ProductQuantityArea
} from './styled';

export default (data) => {
    return (
        <Container>
            <ProductArea>
                <ProductPhoto src={data.data.image} />
                <ProductInfoArea>
                    <ProductDetails>
                        <ProductName>{data.data.name}</ProductName>
                        <ProductIngredients>{data.data.ingredients}</ProductIngredients>
                    </ProductDetails>
                    <ProductQuantityArea>
                        quantity
                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton>Cancel</ProductButton>
                <ProductButton>Add to Cart</ProductButton>
            </ProductButtons>
        </Container>
    );
}