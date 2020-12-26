### English - #24: Router: Query
- We don't need to change the route to get the query:
    ```js
    <Route path='/category'>
    ```
- The address now needs to contain the parameters that we will use, in the example I am using `categoryName`:
    ```js
    <li><Link to='/category?categoryName=sports'>Sports</Link></li>
    <li><Link to='/category?categoryName=news'>News</Link></li>
    <li><Link to='/category?categoryName=travel'>Travel</Link></li>
    ```
- In the component used, it will be necessary to create a function to obtain the query and then instantiate it inside for use:
    ```js
    function useQuery() { return new URLSearchParams(useLocation().search) }
    let query = useQuery()
    let category = query.get('categoryName')
    ```

***

### Portuguese - #24: Router: Query
- Não precisamos mudar a rota para pegar a query:
    ```js
    <Route path='/category'>
    ```
- O endereço agora precisa conter os parametros que iremos utlizar, no exemplo estou usando `categoryName`:
    ```js
    <li><Link to='/category?categoryName=sports'>Sports</Link></li>
    <li><Link to='/category?categoryName=news'>News</Link></li>
    <li><Link to='/category?categoryName=travel'>Travel</Link></li>
    ```
- No componente utilizado, será preciso criar uma função para obter o query e depois instanciar dentro para utilização:
    ```js
    function useQuery() { return new URLSearchParams(useLocation().search) }
    let query = useQuery()
    let category = query.get('categoryName')
    ```