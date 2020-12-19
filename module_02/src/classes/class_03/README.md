### English - #3: Understading JSX
- JSX is not HTML
- In JSX you can only return one element, always
- A technique for returning multiple elements is to create these elements within an empty `<> </>` tag
- It is possible to add variables and parameters within JSX, to add the values, just inform them between keys
    ```js
    function App (){
    let name = 'Morgan'
    let age = 31
    return <div>My name is {name}. I'm {age} years old.</div>
    }
    ```
- In the attributes of the elements the syntax changes a little
    ```js
    let image = 'https://www.google.com.br/google.jpg'
    return <img src={image} />
    ```
    - For the class name, use `className =" class_name "` instead of `class =" class_name "`
    - In the case of style, use `style = {{width: 100}}` instead of `style =" width: 100 "`
    
***

### Portuguese - #3: Entendendo JSX
- JSX não é HTML
- No JSX só pode retornar um elemento, sempre
- Uma tecnica para retornar vários elementos é criar esses elementos dentro de uma tag vazia `<></>`
- É possível adicionar variaveis e parametros dentro do JSX, para adicionar os valores, basta informá-los entre chaves 
    ```js
    function App (){
    let name = 'Morgan'
    let age = 31
    return <div>My name is {name}. I'm {age} years old.</div>
    }
    ```
- Nos atributos dos elementos a sintaxe muda um pouco
    ```js
    let image = 'https://www.google.com.br/google.jpg'
    return <img src={image} />
    ```
    - No caso do nome da classe, utilize `className="class_name"` ao invez de `class="class_name"`
    - No caso do style, utilize `style={{width:100}}` ao invez de `style="width:100"`