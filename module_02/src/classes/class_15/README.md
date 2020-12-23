### English - #15: Exchanging data between components
- it is possible to send a function as a parameter to the component and within that component change a value of the component that invoked it
    - component you invoked (`App`)
        ```js
        function handleSearchInput(newText) {
            setSearchText(newText)
        }
        <SearchBox
            defaultPhrase='Search...'
            onChangeText={handleSearchInput}
        />
        ```
    - invoked component (`SearchBox (props)`)
        ```js
        props.onChangeText(text)
        ```

***

### Portuguese - #15: Trocando dados entre Componentes
- é possível enviar uma função como parametro para o componente e dentro desse componente alterar um valor do componente que o invocou
    - componente que invocou (`App`)
        ```js
        function handleSearchInput(newText) {
            setSearchText(newText)
        }
        <SearchBox
            defaultPhrase='Search...'
            onChangeText={handleSearchInput}
        />
        ```
    - componente invocado (`SearchBox(props)`)
        ```js
        props.onChangeText(text)
        ```