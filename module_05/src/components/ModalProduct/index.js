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

export default (data) => {
    return (
        <Container>
            <ProductArea>
                <ProductPhoto src={data.data.image} />
                <ProductInfoArea>
                    <ProductDetails>
                        {data.data.name}
                    </ProductDetails>
                    <ProductQuantityArea>
                        quantity
                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>

            </ProductButtons>
        </Container>
    );
}