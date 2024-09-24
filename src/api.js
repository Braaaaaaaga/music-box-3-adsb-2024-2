import axios from "axios"; 
// Importa a biblioteca axios, que é usada para fazer requisições HTTP. 
// O axios é amplamente utilizado para interagir com APIs, permitindo que você faça requisições GET, POST, PUT, DELETE, etc.

// Criação de uma instância personalizada do axios para a nossa API
const api = axios.create({ 
  // A função `axios.create()` permite criar uma instância do axios com configurações predefinidas.
  // Dessa forma, você pode definir uma URL base para todas as requisições e outras configurações padrões, 
  // como headers ou tempo limite, por exemplo.

  baseURL: "Coloque sua chave ou URL da API aqui" 
  // A `baseURL` define o endpoint base para as requisições.
  // Em vez de repetir a URL completa em cada requisição, você só precisa especificar o restante do caminho.
  // Exemplo: se você tiver uma API pública ou privada, aqui você pode usar uma URL genérica como:
  // "https://api.seuservico.com/v1".
  // No caso de usar uma chave de autenticação na URL (em APIs que funcionam assim), você a colocaria neste campo.
  // Exemplo: "https://api.seuservico.com/v1?apiKey=SUA_CHAVE".
});

export default api;
// Exporta a instância `api` para que ela possa ser utilizada em outros arquivos. 
// Ao invés de importar axios diretamente e configurar a URL base repetidamente, você pode importar `api` 
// e realizar as requisições de forma mais simples e consistente. 
