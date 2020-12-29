### English - #3: Redux: Creating Store and Reducers
- Store must be the first thing to be created;
    - In most cases (and also recommended) is to add the Store to `index.js`;
    - To import Redux, import from the two libraries below:
        ``` js
        import {createStore} from 'redux';
        import {Provider} from 'react-redux';
        ```
        - createStore is for creating the store
        - Provider is the integrator
- To create the store:
    ```js
    const store = createStore (Reducers)
    ```
    - the parameter of the createStore will be the combineReducer, a component that unites all reducers;
    - this combineReducers will be created inside the file `index.js` which will be inside the folder `reducers`;
        ```js
        import {combineReducers} from 'redux';
        import UserReducer from './UserReducer';

        export default combineReducers ({
            users: UserReducer
        });
        ```
    - we will need to import the `combineReducers` from redux and all the Reducers that we will use in the application;
    - next we will export a list of all imported Reducers;
- To create a Reducer, the ideal would be to create a folder called `reducers` within `src` folder;
    - The name of the Reducer is usually something related to the Reducer plus the word Reducer, for example: `UserReducer`;
    - Inside the component there will be a function that will receive two parameters;
        - it is also recommended to create an initial value for the state to be organized and have an initial value, for example:
            ```js
            const initialState = {
                name: ''
            }
            function UserReducer (state = initialState, action) {
                switch (action.type) {
                case 'SET_NAME':
                    return {... state, name: action.payload.name}
                }
                return state;
            }
            ```
            - In the code a switch was used to know what the action would be, and if the action is SET_NAME it will return a copy of the state with the updated name through the payload
            - state: this will be the value that will be returned when calling the function
            - action: is the action that will be performed
- All components that need Store information needed to be inside the Provider component;
    - For example, in the `index.js` file it would look like this:
        ```js
        ReactDOM.render (
            <Provider store = {store}>
                {<App />}
            </Provider>,
            document.getElementById ('root')
        );
        ```

***

### Portuguese - #3: Redux: Criando Store e Reducers
 - Store deve ser a primeira coisa a ser criada;
 - Na maioria dos casos (e também o recomendado) é adicionar o Store no `index.js`;
 - Para importar o Redux, importe das duas bibliotecas abaixo:
    ```js
    import { createStore } from 'redux';
    import { Provider } from 'react-redux';
    ```
    - createStore é para criar o store
    - Provider é o integrador
- Para criar o store:
    ```js
    const store = createStore(Reducers)
    ```
    - o parametro do createStore será o combineReducer, um componente que une todos os reducers;
    - esse combineReducers será criado dentro do arquivo `index.js` que ficará dentro da pasta `reducers`;
        ```js
        import { combineReducers } from 'redux';
        import UserReducer from './UserReducer';

        export default combineReducers({
            users: UserReducer
        });
        ```
    - precisaremos importar o `combineReducers` do redux e todos os Reducers que vamos usar na aplicação;
    - em seguida iremos exportar uma lista com todos os Reducers importados;
- Para criar um Reducer, o ideal seria criar uma pasta chamada `Reducers` dentro do `src`;
    - O nome do Reducer geralmente é algo relacionado ao Reducer mais a palavra Reducer, por exemplo: `UserReducer`;
    - Dentro do componente terá uma função que receberá dois parametros;
        - também é recomendado criar um valor inicial para o state para ter organização e ter um valor inicial, por exemplo:
            ```js
            const initialState = {
                name: ''
            }
            function UserReducer(state = initialState, action) {
                switch (action.type) {
                case 'SET_NAME':
                    return { ...state, name: action.payload.name }
                }
                return state;
            }
            ```
            - No código foi utilizado um switch para saber qual seria a ação, e caso a ação for SET_NAME irá retornar uma cópia do state com o name atualizado através do payload
            - state: esse será o valor que será retornado ao chamar a função
            - action: é a ação que será executada
- Todos os componentes que precisam das informações do Store precisaram ficar dentro do componente Provider;
    - Por exemplo, no arquivo `index.js` ficaria assim:
        ```js
        ReactDOM.render(
            <Provider store={store}>
                {<App />}
            </Provider>,
            document.getElementById('root')
        );
        ```
