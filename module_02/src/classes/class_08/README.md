### English - #8: Styling with StyledComponents (3/3)
- extend the use of the style to another component, when declaring the constant
    ```js
    const Button = styled.button`
        font-size: 19px;
        padding: 10px 15px;
        border: 3px solid #FF0000;
        color: #FF0000;
        background-color: #FFF;
        margin: 5px;
        border-radius: 5px;
    `;

    const LittleButton = styled(Button)`
        padding: 5px 10px;
        font-size: 16px
    `;
    ```
- this way it is much easier to configure the styling of several components

***

### Portuguese - #8: Estilização com StyledComponents (3/3)
 - estender o uso do style para outro componente, no momento da declaração da constante
    ```js
    const Button = styled.button`
        font-size: 19px;
        padding: 10px 15px;
        border: 3px solid #FF0000;
        color: #FF0000;
        background-color: #FFF;
        margin: 5px;
        border-radius: 5px;
    `;

    const LittleButton = styled(Button)`
        padding: 5px 10px;
        font-size: 16px
    `;
    ```
- dessa forma é muito mais fácil configurar a estilização de diversos componentes