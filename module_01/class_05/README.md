### English - #5: Adding React to a website via CDN
- There are 2 ways to use React on your website:
     1. Only in part of the site (via CDN (URL)) Not recommended
     2. Project made entirely in React
- In this class, it is talked about and explained just how a normal website works with the addition of React via CDN
     - It is necessary to use react and react-dom libraries
    ```js
    <script>
        let button1 = React.createElement('button', {}, 'Click Here');
        ReactDOM.render(button1, document.getElementById('button1'));
    </script>
    ```
    - To code it simpler, use babel
    ```js
     <script type="text/babel">
        let button2 = <button>New Click Here</button>
        ReactDOM.render(
            button2,
            document.getElementById('button2')
        );
    </script>
    ```
    
***

### Portuguese - #5: Adicionando o React a um site via CDN
- Existem 2 formas de usar React no seu site:
    1. Apenas em uma parte do site (via CDN (URL)) Não recomendado
    2. Projeto feito todo em React
- Nessa aula é falado e explicado apenas como funciona um site normal com adição de React via CDN
    - É necessário utilizar bibliotecas do react e react-dom
    ```js
    <script>
        let button1 = React.createElement('button', {}, 'Click Here');
        ReactDOM.render(button1, document.getElementById('button1'));
    </script>
    ```
    - Para utilizar o código de forma mais simples é utilizado o babel
    ```js
     <script type="text/babel">
        let button2 = <button>New Click Here</button>
        ReactDOM.render(
            button2,
            document.getElementById('button2')
        );
    </script>
    ```