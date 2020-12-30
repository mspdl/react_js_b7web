### English - #4: Redux: Connect and Dispatch
- To get information from Redux, we first need to import `connect` from `react-redux` in the component we will be using;
- All the code used by connect will be at the end of the component;
- None of the `connect ()` parameters are required;
- When using `connect`, we need to change the `export default` of our component:
    ```js
    export default connect (mapStateToProps) (ThisComponent)
    ```
    - we are exporting connect with two parameters and our component;
    - the first parameter will be a function responsible for obtaining state data and bringing it to the component as if it were `props`;
        - the method name is by default `mapStateToProps` but we can change it if necessary, which is not recommended;
        ```js
        const mapStateToProps = (state) => {
            return {
                name: state.user.name
            }
        }
        ```
        - name: will be the name of the variable accessed by props, in this case: `props.name`;
        - state: all states contained in `combineReducers` in the `reducers` folder sent by parameter;
        - state.user: element created in the exported list in the `combineReducers` component;
        - state.user.name: owned by Reducer user;
        - remembering that this method will be kept at the end of the component, before the `export default`
        - to access the information obtained through `mapStateToProps` within its component, just use `props.name`. For example:
            ```js
            Name: {props.name}
            ```
    - the second parameter will be a function to change state information, however, it is not mandatory;
        - the method name is by default `mapDispachToProps` but we can change it if necessary;
        ```js
        const mapDispatchToProps = (dispatch) => {
            return {
                setName: (newName) => dispatch ({
                    type: 'SET_NAME',
                    payload: {name: newName}
                })
            }
        }
        ```
        - within this method we will create a list of methods, which will be responsible for the actions within Reducer;
        - in the example `setName` is a method that will change the name, receiving `newName` as a parameter and calling it sending to the Reducer `UserReducer` the action` SET_NAME` and the parameter `name` with value `newName` through the `payload `;
        - within the component, the use of this function will look like this:
            ```js
            props.setName ('New name')
            ```

***

### Portuguese - #4: Redux: Connect e Dispatch
- Para pegar informações do Redux, primeiro precisamos importar o `connect` do `react-redux` no componente que iremos utilizar;
- Todo o código utilizado pelo connect ficará no fim do componente;
- Nenhum dos parametros do `connect()` é obrigatório;
- Quando utilizamos o `connect`, precisamos alterar o `export default` do nosso componente:
    ```js
    export default connect(mapStateToProps)(Class04)
    ```
    - estamos exportando o connect com dois parametros e o nosso componente
    - o primeiro parametro vai ser uma função responsável por obter dados dos states e trazer para o componente como se fosse `props`;
        - o nome do método é por padrão `mapStateToProps` mas podemos alterar caso necessário, o que não é recomendado;
        ```js
        const mapStateToProps = (state) => {
            return {
                name: state.user.name
            }
        }
        ```
        - name: será o nome da variavel acessada pelo props, nesse caso: `props.name`;
        - state: lista dos states contida no `combineReducers` da pasta `reducers` enviado por parametro;
        - state.user: elemento criado na lista exportada no componente `combineReducers`
        - state.user.name: propriedade do Redux user
        - lembrando que esse método será mantido no final do componente, antes do `export default`
        - para acessar a informação obtida através do `mapStateToProps` dentro do seu componente, basta utilizar `props.name`
    - o segundo parametro será uma função para alterar informações dos states, no entanto, não é obrigatório;
        - o nome do método é por padrão `mapDispachToProps` mas podemos alterar, caso necessário;
        ```js
        const mapDispatchToProps = (dispatch) => {
            return {
                setName: (newName) => dispatch({
                    type: 'SET_NAME',
                    payload: { name: newName }
                })
            }
        }
        ```
        - 
        - dentro desse método iremos criar uma lista de métodos, que serão responsáveis pelas ações dentro do Reducer;
        - no exemplo `setName` é um método que ira alterar o nome, recebendo `newName` como parametro e chamando enviando para o Reducer `UserReducer` a ação `SET_NAME` e o parametro `name` com valor `newName` através do `payload`;
        - dentro do componente, o uso dessa função ficará assim:
            ```js
            props.setName('New name')
            ```