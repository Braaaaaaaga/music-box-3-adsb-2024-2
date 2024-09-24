import api from "./api";
// Aqui estamos importando a instância `api` que foi criada anteriormente usando o axios.
// Isso significa que todas as requisições HTTP que fizermos usando `api` terão a URL base definida no arquivo `api.js`.

function App() {
  // Definindo o componente principal `App`. Em React, componentes são funções que retornam JSX (uma sintaxe semelhante a HTML).

  function listar() {
    // A função `listar` é executada quando o botão for clicado. Ela faz uma requisição GET à API.

    console.log(api.get());
    // Aqui, estamos tentando fazer uma requisição GET utilizando a instância `api`. 
    // No entanto, `api.get()` retorna uma "Promise", e você precisa lidar com ela adequadamente para obter o resultado.
    // Este `console.log()` não mostrará a resposta diretamente. 
    // Para capturar e exibir o resultado da requisição corretamente, você pode usar `.then()` ou `async/await`. 
  }

  return (
    <>
      {/* O JSX aqui define a estrutura visual do componente. */}
      <h1>Titulo</h1>
      {/* Este é o título da página. Em React, o conteúdo HTML é retornado usando JSX dentro das funções de componentes. */}

      <button onClick={listar}>Listar</button>
      {/* Aqui temos um botão, que ao ser clicado, chama a função `listar`. 
      O evento `onClick` em React é usado para atribuir uma função que será executada quando o botão for clicado. */}
    </>
  );
}

export default App;
// O componente `App` é exportado como o padrão do módulo, para que possa ser importado em outros arquivos.
