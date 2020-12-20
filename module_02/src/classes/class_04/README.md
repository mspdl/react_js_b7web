### English - #4: Components and Props
- it is possible to use one component inside the other as many times as necessary
    ```js
    function Welcome(){
        return <h1>Hello World!</h1>
    }
    function Class04 (){
        return <>
        <Welcome />
        </>
    }
    ```
- props = properties
- you can pass several props by parameter to a component, accessing them through a JSX expression
    ```js
    function Welcome(props) {
        return <h1>Hello, {props.name}!</h1>
    }
    function Class04() {
        return <>
            <Welcome name='Morgan' />
            <Welcome name='Peter' />
            <Welcome name='Ana' />
        </>
    }
    ```

***

### Portuguese - #4: Componentes e Props
- é possível usar um componente dentro do outro quantas vezes forem necessárias
    ```js
    function Welcome(){
        return <h1>Hello World!</h1>
    }
    function Class04 (){
        return <>
        <Welcome />
        </>
    }
    ```
- props = propriedades
- você pode passar diversas props por parametro para um componente, acessando-os através de uma expressão JSX
    ```js
    function Welcome(props) {
        return <h1>Hello, {props.name}!</h1>
    }
    function Class04() {
        return <>
            <Welcome name='Morgan' />
            <Welcome name='Peter' />
            <Welcome name='Ana' />
        </>
    }
    ```