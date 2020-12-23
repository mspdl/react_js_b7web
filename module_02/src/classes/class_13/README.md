### English - #13: Life Cycle (useEffect)
- useEffect is a React WebHook that works as an observer. In his declaration a method and a list of variables is informed, whenever a variable in the list is changed the method is called
    ```js
    useEffect(() => {document.title = 'Count: ' + count}, [count])
    ```
- when the list of variables is declared empty, the useEffect method is used only once when starting the page
    `useEffect(() => { alert('Welcome!') }, [])`

***

### Portuguese - #13: Ciclo de Vida (useEffect)
- useEffect é um WebHook do React que funciona como um observador. Na declaração dele é informado um método e uma lista de variaveis, sempre que uma variavel da lista é alterada o método é chamado
    ```js
    useEffect(() => {document.title = 'Count: ' + count}, [count])
    ```
- quando a lista de variaveis é declarada vazia, o método do useEffect é utilizado apenas uma vez ao iniciar a página
    `useEffect(() => { alert('Welcome!') }, [])`