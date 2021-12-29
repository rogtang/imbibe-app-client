export default {
  //API_ENDPOINT: "https://imbibe-server.herokuapp.com/api",
  API_ENDPOINT: window.location.hostname === "localhost"? 'http://localhost:8000/api' :'https://frozen-dawn-91192.herokuapp.com/api',
  //API_ENDPOINT: 'https://frozen-dawn-91192.herokuapp.com/api',
//API_ENDPOINT: 'http://localhost:8000/api',
  TOKEN_KEY: "imbibe-client-auth-token",
};
