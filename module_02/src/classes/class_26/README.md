### English - #26: Router: Redirect
- Redirect is used to route accesses from one location to another.
- There are two ways to use Redirect.
    - The first within a Switch:
        ```js
        <Switch>
            <Route exact path='/'>
                <Home></Home>
            </Route>
            <Route exact path='/about'>
                <About></About>
            </Route>
            <Route exact path='/about-us'> 
                <Redirect to='about'></Redirect>
            </Route>
            <Route path='*'>
                <NotFound />
            </Route>
        </Switch>
        ```
        - in this case, when the user tries to access `/about-us`, they will be directed to the `/ about` page
        - it is possible to create several conditionals within this component, we will see in the next class;
    - The second is through programmatic redirection, using the react hook `useHistory` we change the page address:
        ```js
        import { useHistory } from 'react-router-dom'
        let history = useHistory(); 
        history.replace('/about')
        ```
        - we can use this in various places like buttons, for example

***

### Portuguese - #26: Router: Redirect
- Redirect é utilizado para encaminhar acessos de um local para outro.
- Existem duas formas de utilizar o Redirect. 
    - A primeira dentro de um Switch:
        ```js
        <Switch>
            <Route exact path='/'>
                <Home></Home>
            </Route>
            <Route exact path='/about'>
                <About></About>
            </Route>
            <Route exact path='/about-us'> 
                <Redirect to='about'></Redirect>
            </Route>
            <Route path='*'>
                <NotFound />
            </Route>
        </Switch>
        ```
        - nesse caso o quando o usuario tentar acessar `/about-us` será directionado para a página `/about`
        - é possível criar diversas condicionais dentro desse componente, veremos na próxima aula;
    - A segunda é através de redirecionamento programatico, utilizando o react hook `useHistory` mudamos o endereço da página:
        ```js
        import { useHistory } from 'react-router-dom'
        let history = useHistory(); 
        history.replace('/about')
        ```
        - podemos utilizar isso em vários locais como botões, por exemplo
