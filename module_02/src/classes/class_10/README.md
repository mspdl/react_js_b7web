### English - #10 Input field
- works very similar to the useState of class 09, only when declaring the input it is necessary to add the value property with the variable and the onChange with the set
    ```js
    const [text, setText] = useState('')
    <Input type='text' value={text} onChange={(e) => { setText(e.target.value) }}></Input>
    ```

***

### Portuguese - #10: Campo de Input
- funciona muito parecido com o useState da aula 09, só que ao declarar o input é necessário adicionar a propriedade value com a variavel e o onChange com o set
    ```js
    const [text, setText] = useState('')
    <Input type='text' value={text} onChange={(e) => { setText(e.target.value) }}></Input>
    ```