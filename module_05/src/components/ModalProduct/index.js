import React from 'react';
import {
    Container,
    ProductArea,
    ProductButtons,
    ProductDetails,
    ProductInfoArea,
    ProductPhoto,
    ProductQuantityArea
} from './styled';

export default () => {
    return (
        <Container>
            <ProductArea>
                <ProductPhoto src="" />
                <ProductInfoArea>
                    <ProductDetails></ProductDetails>
                    <ProductQuantityArea></ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>

            </ProductButtons>
        </Container>
    );
}