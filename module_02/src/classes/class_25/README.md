### English - #25: Router: Error 404
- Another way to add a standard route, that is, a route if no other route is found, is to create a treatment route at the end of the `Switch` with `path='*'`. For example:
    ```js
    <Switch>
        <Route exact path='/'>
            <Home></Home>
        </Route>
        <Route exact path='/about'>
            <About></About>
        </Route>
        <Route path='*'>
            <NotFound />
        </Route>
    </Switch>
    ```

***

### Portuguese - #25: Router: Erro 404
- Outra forma de adicionar uma rota padrão, ou seja, uma rota caso nenhuma outra rota seja encontrada, é criando uma rota de tratamento no final do `Switch` com o `path='*'`. Por exemplo:
    ```js
    <Switch>
        <Route exact path='/'>
            <Home></Home>
        </Route>
        <Route exact path='/about'>
            <About></About>
        </Route>
        <Route path='*'>
            <NotFound />
        </Route>
    </Switch>
    ```