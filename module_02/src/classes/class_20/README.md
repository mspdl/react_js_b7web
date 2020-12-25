### English - #20: Modal
- To display components inside another component, you must use `children`
    - component call:
        ```js
        <Modal>
           <h1>Hello World!</h1>
       </Modal>
        ```
    - in the component:
        ```js
        function Modal(props) {
            return <>
                {props.children}
            </>
        }
        ```
***

### Portuguese - #20: Modal
- Para exibir componentes dentro de outro componente, é preciso utilizar `children`
    - chamada do componente:
        ```js
        <Modal>
           <h1>Hello World!</h1>
       </Modal>
        ```
    - no componente:
        ```js
        function Modal(props) {
            return <>
                {props.children}
            </>
        }
        ```