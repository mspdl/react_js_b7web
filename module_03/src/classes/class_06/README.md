### English - #6: Redux with Hooks
- the ways we were using in previous classes to obtain and edit data are the most difficult way, but there are still applications written using those methods and that is why it was important to learn them;
- to obtain information in a simpler way, just remove `connect` and use `useSelector`, both from `react-redux`;
    - therefore, we will no longer need `props`;
    - we just need to import the state into a local variable, for example:
        ```js
        const name = useSelector (state => state.user.name)
        ```
        - within the `useSeletor` method, an anonymous function with the state is passed (map of all Reducers, contained in the `combineReducers` component);
- we also no longer need `connect` to change information (or call actions) of Reducers, we only need `useDispatch`;
    - we created a local variable to better use `useDispatch`: `dispatch = useDispatch()`
    - and to use it:
        ```js
        dispatch ({
            type: 'SET_NAME',
            payload: {name: name}
        })
        ```
        - when calling `dispatch` we need to send a json as a parameter;
            - inside this json we will have the properties:
                - type = which is the registered action on Reducer
                - payload = is the parameter that Reducer is waiting to receive to update the Reducer value

***

### Portuguese - #6: Redux com Hooks
- as formas que estavamos utilizando nas aulas anteriores para obter e editar dados são a forma mais díficil, mas ainda existem aplicações escritas utilizando aqueles métodos e por isso foi importante aprende-lás;
- para obter informações de uma forma mais simples, basta remover o `connect` e utilizar o `useSelector`, ambos do `react-redux`;
    - sendo assim não precisaremos mais de `props`;
    - apenas precisamos importar o state em uma váriavel local, por exemplo:
        ```js
        const name = useSelector(state => state.user.name)
        ```
        - dentro do método `useSeletor` é passado uma função anonima com o state (map de todos os Reducers, contido no componente `combineReducers`);
- também não precisamos mais do `connect` para alterar informações (ou chamar ações) dos Reducers, precisamos apenas do `useDispatch`;
    - criamos uma variavel local para utilizar melhor o `useDispatch`: `dispatch = useDispatch()`
    - e para utilizá-la:
        ```js
        dispatch({
            type: 'SET_NAME',
            payload: { name: name }
        })
        ```
        - ao chamar o `dispatch` precisamos enviar um json como parametro;
            - dentro desse json teremos as propriedades:
                - type = que é a ação cadastrada no Reducer
                - payload = é o parametro que o Reducer está esperando receber para atualizar o valor do Reducer