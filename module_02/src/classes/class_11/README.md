### English - #11: Conditional Display
- conditional display are good to facilitate what will be shown on the screen through conditions
  - there are some ways to do this.
     - the first one is declaring the condition and then &&:
         ```js
        {text.length > 0 &&
            <p>Text size: {text.length} character</p>
        }
        ```
        - in this case, the return is for a single component, so if you need to add other components, you need to add a global tag, for example:
            ```js
            {text.length > 0 && <>
                <h3>Text Counter</h3>
                <p>Text size: {text.length} character</p>
            </>} 
            ```
    - the second way is to make a tender condition:
        `<p>Text size: {text.length} character{text.length !== 1 ? 's' : ''}</p>`
        - for bigger information, we can break into lines:
            ```js
            {isLogged
                ? <button onClick={() => { setIsLogged(false) }}>Log out</button>
                : <button onClick={() => { setIsLogged(true) }}>Log in</button>}
            ```
***

### Portuguese - #11: Condicional de Exibição
 - condicional de exibição serve para facilitar o que vai ser mostrado na tela através de condições
 - existem algumas formas de fazer isso.
    - a primeira delas é declarando a condição e depois && :
        ```js
        {text.length > 0 &&
            <p>Text size: {text.length} character</p>
        }
        ```
        - nesse caso, o retorno é de um único componente, então se precisar adicionar outros componentes, é preciso adicionar uma tag global, por exemplo:
            ```js
            {text.length > 0 && <>
                <h3>Text Counter</h3>
                <p>Text size: {text.length} character</p>
            </>} 
            ```
    - o segundo jeito é fazer uma condição ternaria:
        `<p>Text size: {text.length} character{text.length !== 1 ? 's' : ''}</p>`
        - para informações maiores, podemos quebrar em linhas:
            ```js
            {isLogged
                ? <button onClick={() => { setIsLogged(false) }}>Log out</button>
                : <button onClick={() => { setIsLogged(true) }}>Log in</button>}
            ```