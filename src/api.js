import axios from "axios"; 

const api = axios.create({ 
  baseURL: "https://66e9ec4587e41760944b1f52.mockapi.io/musicas" 
});

export default api;