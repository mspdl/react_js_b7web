### English - #27: Router: Private Routes (Access Control)
- We can create targeting conditions within the Route component or in another component to access specific pages. You can do this in two ways:
    - Directly inside the component:
        ```js
        const isLogged = true;
        <Route exact path='/private-page'>
            {isLogged ? <PrivatePage /> : <Redirect to='/login'>}
        </Route>
        ```
        - in this example a boolean variable was created and we used it to make the condition. If true access the `Private` page, otherwise access the `Login` page
    - Create a new private route component:
        - component:
            ```js
            function PrivateRoute({ children, ...rest }) {
                return <>
                    <Route {...rest}>
                        {isLogged ? children : <Redirect to='/login' />}
                    </Route>
                </>
            }
            ```
        - component call:
            ```js
            <PrivateRoute exact path='/private-page'>
                <PrivatePage />
            </PrivateRoute>
            ```

***

### Portuguese - #27: Router: Rotas Privadas (Controle de acesso)
 - Podemos criar condições de direcionamento dentro do componente Route ou em outro componente para acessar páginas específicas. É possível fazer isso de duas formas:
    - Diretamente dentro do componente:
        ```js
        const isLogged = true;
        <Route exact path='/private-page'>
            {isLogged ? <PrivatePage /> : <Redirect to='/login'>}
        </Route>
        ```
        - nesse exemplo foi criado uma váriavel boleana e usamos ela para fazer a condição. Caso seja verdadeiro acessa a página `Private`, senão acessa a página `Login`
    - Criar um novo componente de rota privada:
        - componente:
            ```js
            function PrivateRoute({ children, ...rest }) {
                return <>
                    <Route {...rest}>
                        {isLogged ? children : <Redirect to='/login' />}
                    </Route>
                </>
            }
            ```
        - chamada do componente:
            ```js
            <PrivateRoute exact path='/private-page'>
                <PrivatePage />
            </PrivateRoute>
            ```