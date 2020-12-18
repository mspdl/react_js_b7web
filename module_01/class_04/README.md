### English - #4: How does react work?
- JavaScript = direct DOM manipulation (screen elements)
     - Processing weight (renders the entire screen or at least the part you are updating)
     - High processing cost on pages with a lot of information
- React = Virtual DOM (replica of what is on the screen, but straight from memory)
     - Change the Virtual DOM, then compare the Virtual DOM with the screen DOM and update only what has been changed;
     - Much faster;
     
***

### Portuguese - #4: Como o React funciona?
- JavaScript = Manipulação direta de DOM (elementos da tela)
    - Peso de processamento (renderiza toda a tela ou pelo menos o trecho que você está atualizando)
    - Custo de processamento alto em páginas com muita informação
- React = Virtual DOM (réplica do que está na tela, mas direto da memória)
    - Altera o DOM Virtual, depois compara o DOM Virtual com o DOM da tela e atualiza apenas o que foi alterado;
    - Muito mais rápido;