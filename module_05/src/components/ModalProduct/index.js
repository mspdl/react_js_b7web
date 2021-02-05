import React, { useEffect, useState } from 'react';
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

export default (data, setStatus) => {
    
    const [quantity, setQuantity] = useState(1);

    useEffect(()=>{
        setQuantity(1);
    },[data])
    
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
                            <ProductQuantityImage onClick={handleMinusQuantity} src="/assets/minus.png" />
                            <ProductQuantityText>{quantity}</ProductQuantityText>
                            <ProductQuantityImage onClick={handlePlusQuantity} src="/assets/plus.png" />
                        </ProductQuantity>
                        <ProductPrice>
                            R$ {(data.data.price * quantity).toFixed(2)}
                        </ProductPrice>
                    </ProductQuantityAndPriceArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton small={true} onClick={handleCancelButton}>Cancel</ProductButton>
                <ProductButton>Add to Cart</ProductButton>
            </ProductButtons>
        </Container>
    );
}