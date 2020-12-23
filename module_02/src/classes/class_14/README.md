### English - #14: Splitting in Components
- When it is necessary to use a component several times, it is recommended that you create a separate file for that component and import it, to use as many times as necessary;
- It is possible to pass parameters to the components through `props`
     - in the component:
         ```js
        function SearchBox(props) {
            return <>
                <InputText 
                    type='text' 
                    placeholder={props.defaultPhrase ?? 'Type something...'}
                />
            </>
        }
        ```
    - when calling the component:
        `<SearchBox defaultPhrase='Search...'/>`

***

### Portuguese - #14: Separando em Componentes
- Quando é necessário utilizar um componente diversas vezes, é recomendado que crie um arquivo separadamente para esse componente e o importe, para utilizar quantas vezes forem necessárias;
- É possível passar parametros para os componentes através de `props`
    - no componente:
        ```js
        function SearchBox(props) {
            return <>
                <InputText 
                    type='text' 
                    placeholder={props.defaultPhrase ?? 'Type something...'}
                />
            </>
        }
        ```
    - na chamada do componente:
        `<SearchBox defaultPhrase='Search...'/>`
