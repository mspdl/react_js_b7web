### English - #7: Styling with StyledComponents (2/3)
- It is possible to apply component customization through props
     - property
        ```html
        <Button color='#0000FF'>Click here</Button>
        ```
    - component
        ```js
        const Button = styled.button`
            font-size: 19px;
            padding: 10px 15px;
            background-color: ${props => props.color};
        `;
        ```
- If you want to define a default value (in the case where the property is not informed), just add the condition:
    - First way:
        `background-color: ${props => props.color || 'white'};`
    - Second way:
        `background-color: ${props => props.disable === true ? '#CCCCCC' : '#0000FF'};`

***

### Portuguese - #7: Estilização com StyledComponents (2/3)
- É possível aplicar customização de componentes através de props
    - propriedade
        ```html
        <Button color='#0000FF'>Click here</Button>
        ```
    - componente
        ```js
        const Button = styled.button`
            font-size: 19px;
            padding: 10px 15px;
            background-color: ${props => props.color};
        `;
        ```
- Caso queira definir um valor padrão (no caso onde a propriedade não é informada), basta adicionar a condição:
    - Primeiro jeito:
        `background-color: ${props => props.color || 'white'};`
    - Segunda forma:
        `background-color: ${props => props.disable === true ? '#CCCCCC' : '#0000FF'};`