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

    let price = parseInt(data.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

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
                    {price}
                </ProductPrice>
                <ProductIngredients>{data.ingredients}</ProductIngredients>
            </ProductInfoArea>
            <ProductButtonArea>
                <ProductButton src="/assets/next.png" />
            </ProductButtonArea>
        </Container>
    );
}