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
    ProductPrice,
    ProductQuantity,
    ProductQuantityAndPriceArea,
    ProductQuantityImage,
    ProductQuantityText
} from './styled';

export default (data) => {

    let price = parseInt(data.data.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <Container>
            <ProductArea>
                <ProductPhoto src={data.data.image} />
                <ProductInfoArea>
                    <ProductDetails>
                        <ProductName>{data.data.name}</ProductName>
                        <ProductIngredients>{data.data.ingredients}</ProductIngredients>
                    </ProductDetails>
                    <ProductQuantityAndPriceArea>
                        <ProductQuantity>
                            <ProductQuantityImage src="/assets/minus.png" />
                            <ProductQuantityText>9</ProductQuantityText>
                            <ProductQuantityImage src="/assets/plus.png" />
                        </ProductQuantity>
                        <ProductPrice>
                            {price}
                        </ProductPrice>
                    </ProductQuantityAndPriceArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton small={true}>Cancel</ProductButton>
                <ProductButton>Add to Cart</ProductButton>
            </ProductButtons>
        </Container>
    );
}