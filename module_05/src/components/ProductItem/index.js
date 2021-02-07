import React from 'react';
import {
    Container,
    ProductButton,
    ProductButtonArea,
    ProductInfoArea,
    ProductIngredients,
    ProductName,
    ProductPhoto,
    ProductPhotoArea,
    ProductPrice
} from './styled';


export default ({ data, onClick }) => {

    const handleClick = () => {
        onClick(data);
    }

    return (
        <Container onClick={handleClick}>
            <ProductPhotoArea>
                <ProductPhoto src={data.image} />
            </ProductPhotoArea>
            <ProductInfoArea>
                <ProductName>{data.name}</ProductName>
                <ProductPrice>
                    R$ {data.price.toFixed(2).replace('.', ',')}
                </ProductPrice>
                <ProductIngredients>{data.ingredients}</ProductIngredients>
            </ProductInfoArea>
            <ProductButtonArea>
                <ProductButton src="/assets/next.png" />
            </ProductButtonArea>
        </Container>
    );
}