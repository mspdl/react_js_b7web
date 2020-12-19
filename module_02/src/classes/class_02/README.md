### English - #2: Classes and Functions
- Each element of the page can be considered a component
- Everything in React comes down to components
- There are a few ways to create a component:
    1. Classes
        - Before, you could only create a component through classes
        ```js
        import React from 'react';
        class App extends React.Component {
            render () {
                return <h1> Test 123 </h1>
            }
        }
        ```
     2. Functions
        ```js
        function App () {
            return <h1> Testing 321 </h1>
        }
        ```
    3. Variables
        1. Normal way
            ```js
            let App = () => {
                return <h1> Testing abc </h1>
            }
            ```
        2. Short way
        ```js
        let App = () => <h1> Test 10, 11, 12 ... </h1>
        ```
- To access a component, you must export it: `export default App;`

***

### Portuguese - #2: Classes e Funções
- Cada elemento da página pode ser considerado um componente
- Tudo no React se resume à componentes
- Existem algumas formas de criar um componente:
    1. Classes
        - Antes só se conseguia criar um componente através de classes
        ```js
        import React from 'react';
        class App extends React.Component {
            render() {
                return <h1>Test 123</h1>
            }
        }
        ```
    2. Funções
        ```js
        function App(){
            return <h1>Testing 321</h1>
        }
        ```
    3. Variavéis
        1. Jeito Normal
            ```js
            let App = () => {
                return <h1>Testing abc</h1>
            }
            ```
        2. Jeito Curto
        ```js
        let App = () => <h1>Test 10, 11, 12 ...</h1>
        ```
- Para acessar um componente é preciso exportá-lo: `export default App;`