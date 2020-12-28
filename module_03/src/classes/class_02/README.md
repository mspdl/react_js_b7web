### English - #2: Redux: Introduction
- To install redux, simply run the command below on the terminal:
    ```
    npm install redux react-redux
    ```
    - two libraries will be installed:
        - redux = redux library
        - react-redux = integration of Redux with React
  - Everything inside the application must have access to Redux and for that, a place is needed for that;
  - There are three main concepts of Redux:
    - Store:
        - Place where all Redux data will be;
        - Within the Store there are one or more Reducers;
    - Reducers:
        - Each Reducer is responsible for reserving data about a specific type of information;
    - Actions:
        - It is literally the actions that will make the management of the information contained within the Reducers, an example of an action would be the setter methods;

***

### Portuguese - #2: Redux: Introdução
- Para instalar o redux, basta rodar o comando abaixo no terminal:
    ```
    npm install redux react-redux
    ```
    - serão instaladas duas bibliotecas:
        - redux = biblioteca do redux
        - react-redux = integração do Redux com o React
 - Tudo que tem dentro da aplicação tem que ter acesso ao Redux e pra isso é necessário um local para isso;
 - Exsitem três conceitos principais do Redux:
    - Store:
        - Local onde ficarão todos os dados do Redux;
        - Dentro do Store ficam um ou mais Reducers;
    - Reducers:
        - Cada Reducer é responsável por reservar dados sobre um tipo específico de informação;
    - Actions:
        - São literalmente as ações que farão o gerenciamento das informações contidas dentro dos Reducers, um exemplo de ação seria os métodos setters;