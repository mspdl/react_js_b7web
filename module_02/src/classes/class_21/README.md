### English - #21: Router: Basic 1
- Firstly, you need to install the `react router`:    
    ```
    npm install react-router-dom
    ```
- `BrowserRouter` will cover the entire site:
    ```js
    return <>
        <BrowserRouter></BrowserRouter>
    </>
    ```
- Using `Link` instead of `<a href>` only updates the necessary content on the page and not the entire page:
    - update entire page:
        ```js
        <a href='/about'>About</a>
        ```
    - update only the necessary content:
        ```js
            <Link to='/about'>About</Link>
        ```

***

### Portuguese - #21: Router: Básico 1
- Primeiramente é preciso instalar o `react router`:
    ```
    npm install react-router-dom
    ```
- O `BrowserRouter` vai cobrir todo o site:
    ```js
    return <>
        <BrowserRouter></BrowserRouter>
    </>
    ```
- Usar `Link` ao inves de `<a href>` faz com que apenas o conteúdo necessário atualize na página e não a página inteira:
    - atualizar página inteira:
        ```js
        <a href='/about'>About</a>
        ```
    - atualizar apenas o conteúdo necessário:
        ```js
            <Link to='/about'>About</Link>
        ```
