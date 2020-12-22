### English - #9: useState
- with useState (React Hooks - shortcuts / facilities for React)
- with React we don't change the component, but the variable inside the component
- useState usage is similar to using props, so you can update the value in the interface automatically
- to use useState it is necessary to import it:
    `import React, { useState } from 'react'`
- to declare a useState it is necessary to declare a constant with two values, the first value is the variable that will be changed and the second is the function (by default it starts with set) that will change the value of the variable. This constant will be the same as useState in the default value:
    `const [count, setCount] = useState(0);`
- now to change the value just call the useState set function:
    `setCount(count + 1);`

***

### Portuguese - #9: useState
- com o useState (React Hooks - atalhos/facilidades para React)
- com React não alteramos o componente e sim a variável dentro do componente
- o uso useState é semelhante ao uso de uma props, com isso é possível atualizar o valor na interface automaticamente
- para utilizar o useState é necessário importá-lo:
    `import React, { useState } from 'react'`
- para declarar um useState é preciso declarar uma constante com dois valores, o primeiro valor é a váriavel que será alterada e o segundo é a função (por padrão começa com set) que ira alterar o valor da variavél. Essa constante será igual ao useState no valor padrão:
    `const [count, setCount] = useState(0);`
- agora para alterar o valor é só chamar a função de set do useState:
    `setCount(count + 1);`