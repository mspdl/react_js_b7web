### English - #16: Showing List
- To display a list of items in React, use the `map` function
    ```js
    {tasks.map((task) => (
        <li>{task.title}</li>
    ))}
    ```
- It is important to use the `key` (indexer) property on the first component within the map, otherwise the browser will show an error message. If your list does not have an indexer, just declare it inside the `map` function:
    ```js
    {tasks.map((task, index) => (
        <li key={index}>{task.title}</li>
    ))}
    ```

***

### Portuguese - #16: Exibindo Lista
- Para exibir uma lista de itens no React é preciso utilizar a função `map`
    ```js
    {tasks.map((task) => (
        <li>{task.title}</li>
    ))}
    ```
- É importante utilizar a propriedade `key` (indexador) no primeiro componente dentro do map, caso contrário o navegador dá uma mensagem de erro. Caso sua lista não tenha um indexador, basta declarar no `map`:
    ```js
    {tasks.map((task, index) => (
        <li key={index}>{task.title}</li>
    ))}
    ```