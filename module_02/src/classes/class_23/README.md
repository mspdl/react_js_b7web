### English - #23: Router: Parameters in the URL
- it is possible to obtain values through the given address, just use `:` in the `path` parameter of the` Route` component;
     ```js
     <Route path = '/category/:category'>
     ```
- to capture this value, the `useParam` hook of the `react-router-dom` library will be used inside the component:
     ```js
     let {category} = useParams ()
    ```
- it is possible to capture several parameters, if necessary:
    ```js
    <Route path='/product/:productCategory/:idProduct'>
    let { productCategory } = useParams()
    let { idProduct } = useParams()
    ```

***

### Portuguese - #23: Router: Parâmetros na URL
- é possível obter valores através do endereço informado, basta utilizar `:` no parametro `path` do componente `Route`;
    ```js
    <Route path='/category/:category'>
    ```
- para capturar esse valor, será utilizado o hook `useParam` da biblioteca `react-router-dom` dentro do componente:
    ```js
    let { category } = useParams()
    ```
- é possível capturar vários parametros, caso seja necessário:
    ```js
    <Route path='/product/:productCategory/:idProduct'>
    let { productCategory } = useParams()
    let { idProduct } = useParams()
    ```