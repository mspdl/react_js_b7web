### English - #22: Router: Basic 2
- First we need to use the Switch component of the react-router-dom. The Switch works similar to the normal switch of any programming language, only with routes;
- Inside the Switch we will have a list of Route, also from react-router-dom
    ```js
    <Switch>
        <Route exact path = '/'>
            <Home> </Home>
        </Route>
        <Route exact path = '/ about'>
            <About> </About>
        </Route>
        <Route component = {NotFound}> </Route>
    </Switch>
    ```
    - about the parameters used in Route, we can say:
        - `path` = is like the `case` of the switch. If the route is the same as `path`, all content within that Route will be displayed;
        - `exact` = always used for home. This property means that the route must be the same as the one in `path`
            - For example: if the address is `/about1` and the `exact` property is set to `path='/about'` the content inside the Route will not be shown. However, if the `/about1` route is accessed without the `exact` route, it will access the Route content with `path='/about'`
        - here I also used the `component`, which would be like a `default` of the switch, if the requested route is not in any of the previous routes, the content of the parameter of the `component` property will be shown

***

### Portuguese - #22: Router: Básico 2
- Primeiramente precisamos utilizar o componente Switch do react-router-dom. O Switch funciona parecido com switch normal de qualquer linguagem de programação, só que com rotas;
- Dentro do Switch teremos uma lista de Route, também do react-router-dom
    ```js
    <Switch>
        <Route exact path='/'>
            <Home></Home>
        </Route>
        <Route exact path='/about'>
            <About></About>
        </Route>
        <Route component={NotFound}></Route>
    </Switch>
    ```
    - sobre os parametros utilizados no Route, podemos dizer:
        - `path` = é como o `case` do switch. Caso a rota seja igual a do `path`, todo conteúdo dentro desse Route será exibido;
        - `exact` = sempre usado para home. Essa propriedade significa que a rota precisa ser igual ao que está no `path`
            - Por exemplo: se o endereço for `/about1` e a propriedade `exact` estiver definida com `path='/about'` o conteúdo dentro da Route não será mostrado. No entanto se a rota `/about1` for acessado sem o exact no Route, ele vai acessar o conteúdo do Route com `path='/about'`
        - aqui também utilizei o `component`, que seria como um `default` do switch, caso a rota solicitada não esteja em nenhum dos Route anteriores, será mostrado o conteúdo do parametro da propriedade `component`