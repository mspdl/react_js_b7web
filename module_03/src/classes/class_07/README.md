### English - #7: Redux: Persist Data
- in order to keep data when updating the page or closing the browser, we will need to persist this data;
- firstly we need to install the redux-persist library:
    ```
    npm install redux-persist
    ```
- it will be necessary to create a new file inside `src` with the name` store.js`;
    - we are creating this file because we will need several information, and placing these information within a file makes the code more organized;
    - inside this file we will import the libraries:
        ```js
        import {createStore} from 'redux'
        import {persistReducer, persistStore} from 'redux-persist'
        import storage from 'redux-persist / lib / storage'
        import Reducers from './reducers'
        ```
    - we will create a constant to add our settings:
        ```js
        const persistConfig = {
            key: 'root',
            storage: storage,
            whitelist: ['user']
        }
        ```
        - key = is a key used for encryption, we usually assign `'root'`
        - storage = is the storage imported from `'redux-persist/lib/storage'`
        - whitelist = optional, receives a list of Reducers;
            - when not informed, all Reducers that have been imported will have their information persisted;
            - when informed, only those informed Reducers will have their data persisted;
    - now let's create our persistReducer:
        ```js
        const persistedReducer = persistReducer(persistConfig, Reducers)
        ```
        - will use the `persistReducer` method of the `redux-persist` library with the two parameters:
            - persistedConfig = the configurations we created;
            - Reducers = our list of reducers;
    - we also created the store:
        ```js
        const store = createStore (persistedReducer)
        ```
    - and finally the persistor:
        ```js
        const persistor = persistStore (store)
        ```
    - and at last we just need to export the store and the persistor:
        ```js
        export {store, persistor}
        ```
- within our `index.js` we will need to make some changes:
    - delete the `store` const because we use it inside the `store.js` that we just created;
    - import `store` and `persistor` from `store.js` and also `PersistGate` from `redux-persist/integration/react`;
        ```js
        import {store, persistor} from './store';
        import {PersistGate} from 'redux-persist / integration / react'
        ```
    - organize the application components:
        ```js
        ReactDOM.render (
            <Provider store = {store}>
                <PersistGate loading = {null} persistor = {persistor}>
                    <App />
                </PersistGate>
            </Provider>,
            document.getElementById ('root')
            );
        ```
        - Provider = will continue as it was, responsible for passing Reducers data to the components within it;
            - storage = are the Reducers sent by `combineReducers`;
        - PersistGate = a component that serves to control when the information from the Reducers will be available and thus when it will load the components into it;
            - loading = you can add something to display while Reducers are being loaded;
                - by default the value is `{null}`;
            - persistor = is the configured persistor, which will persist the data from the Provider Reducers;

***

### Portuguese - #7: Redux: Persistir Dados
- para não perder os dados ao atualizar a página ou fechar o navegador, vamos precisar persistir esses dados; 
- primeiramente precisamos instalar a biblioteca redux-persist:
    ```
    npm install redux-persist
    ```
- será necessário criar um novo arquivo dentro de `src` com nome `store.js`;
    - estamos criando esse arquivo porque precisaremos de várias alterações, e colocando essas alterações dentro de um arquivo deixa o código mais organizado;
    - dentro desse arquivo iremos importar as bibliotecas:
        ```js
        import { createStore } from 'redux'
        import { persistReducer, persistStore } from 'redux-persist'
        import storage from 'redux-persist/lib/storage'
        import Reducers from './reducers' 
        ```
    - iremos criar uma constante para adicionar nossas configurações:
        ```js
        const persistConfig = {
            key: 'root',
            storage: storage,
            whitelist: ['user']
        }
        ```
        - key = é uma chave utilizada para criptografia, normalmente atribuimos `'root'`;
        - storage = é o storage importado de `'redux-persist/lib/storage'`;
        - whitelist = opcional, recebe uma lista de Reducers;
            - quando não informado, todos os Reducers que foram importados terão suas informações persistidas;
            - quando informado, somente aqueles informados terão seus dados persistidos;
    - agora vamos criar nosso persistReducer:
        ```js
        const persistedReducer = persistReducer(persistConfig, Reducers)
        ```
        - vai utilizar o método `persistReducer` da biblioteca `redux-persist` com os dois parametros:
            - persistConfig = as configurações que criamos;
            - Reducers = nossa lista de reducers;
    - criamos também o store:
        ```js
        const store = createStore(persistedReducer)
        ```
    - e por último o persistor:
        ```js
        const persistor = persistStore(store)
        ```
    - para finalizar só precisamos exportar o store e o persistor
        ```js
        export {store, persistor}
        ```
- dentro do nosso `index.js` precisaremos fazer algumas alterações:
    - apagar o `store` pois utilizamos ele dentro do `store.js` que acabamos de criar;
    - importar o `store` e o `persistor` do `store.js` e também o `PersistGate`;
        ```js
        import { store, persistor } from './store';
        import { PersistGate } from 'redux-persist/integration/react'
        ```
    - organizar os componentes da aplicação:
        ```js
        ReactDOM.render(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>,
            document.getElementById('root')
            );
        ```
        - Provider = continuará como era, responsável por repassar os dados dos Reducers aos componentes dentro dele;
            - storage = são os Reducers enviados pelo `combineReducers`;
        - PersistGate = um componente que serve para controlar quando as informações dos Reducers estarão disponíveis e assim quando irá carregar os componentes dentro dele;
            - loading = pode adicionar algo para mostrar enquanto os Reducers são carregados;
                - por padrão o valor é `{null}`;
            - persistor = é o persistor configurado, que fará a persistencia dos dados dos Reducers do Provider;