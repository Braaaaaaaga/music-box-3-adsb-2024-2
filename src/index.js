import React from 'react';
// Importa a biblioteca React. O React é necessário para criar componentes e construir a interface de usuário de forma declarativa.
// Esta linha é essencial para que o JSX funcione, pois o JSX é convertido em chamadas de funções React.

import ReactDOM from 'react-dom/client';
// Importa o `ReactDOM`, que é a biblioteca responsável por manipular a renderização de componentes React no DOM (Document Object Model) do navegador.
// O `react-dom/client` é uma versão otimizada da API de renderização, usada com o React 18+.

import App from './App';
// Importa o componente `App` que foi definido no arquivo `App.js`. Este componente será o principal da aplicação e conterá a lógica e interface visual.

const root = ReactDOM.createRoot(document.getElementById('root'));
// Aqui estamos criando o ponto de "montagem" da aplicação React. 
// `ReactDOM.createRoot()` cria a raiz onde o React irá renderizar o conteúdo da aplicação, associando-o ao elemento `<div id="root">` no arquivo `index.html`.
// Esse div com ID 'root' serve como o contêiner principal para toda a aplicação React.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// A função `render()` é responsável por renderizar o componente `App` dentro da raiz que criamos.
// O `React.StrictMode` é um recurso utilizado para identificar possíveis problemas no código durante o desenvolvimento. 
// Ele não afeta o comportamento final da aplicação em produção, mas emite avisos no console para práticas que podem causar bugs ou problemas de desempenho.
// Dentro de `<React.StrictMode>`, o componente `App` é renderizado, e toda a aplicação começa a funcionar a partir deste ponto.