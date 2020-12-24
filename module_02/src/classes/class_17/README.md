### English - #17: Adding New Items
- To add an item to a list on useState, you need to copy that list to a new list, add the new item to the new list and then call that new list on the useState set:
    ```js
    const [tasks, setTasks] = useState([])
    let newTaskList = [...tasks, { title: 'newTaskTitle', done: false }]
    setTasks(newTaskList)
    ```

***

### Portuguese - #17: Adicionando Novos Itens
- Para adicionar um item à uma lista no useState, é necessário copiar essa lista em uma nova lista, adicionar o novo item à nova lista e então chamar essa nova lista no set do useState:
    ```js
    const [tasks, setTasks] = useState([])
    let newTaskList = [...tasks, { title: 'newTaskTitle', done: false }]
    setTasks(newTaskList)
    ```