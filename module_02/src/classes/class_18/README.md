### English - #18: Marking as done
- To update the value of an item in a useState list, it is necessary to create a new list with the useState list, change the value of the item in that new list and use that new list in the useState set. It is necessary to send the index of the respective item to know which item in the list will be changed
    - function:
         ```js
        function handleClickTask(index) {
            let newTaskList = [...tasks]
            newTaskList[index].done = !newTaskList[index].done
            setTasks(newTaskList)
        }
        ```
    - function call:
         ```js
        key={index}
        ={() => handleClickTask(index)}
        ```

***

### Portuguese - #18: Marcando como feito
- Para atualizar o valor de um item de uma lista do useState é preciso criar uma nova lista com a lista do useState, alterar o valor do item dessa nova lista e usar essa nova lista no set do useState. É preciso enviar o index do item em questão para saber qual item da lista será alterado
    - função:
        ```js
        function handleClickTask(index) {
            let newTaskList = [...tasks]
            newTaskList[index].done = !newTaskList[index].done
            setTasks(newTaskList)
        }
        ```
    - chamada da função:
        ```js
        key={index}
        ={() => handleClickTask(index)}
        ```