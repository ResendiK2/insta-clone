import axios from "axios";

const axiosConfig = {
  baseURL: "https://treinamento-nodejs-app-masters.herokuapp.com",
};

if (localStorage.getItem("auth-token")) {
  axiosConfig.headers = {
    Authorization: localStorage.getItem("auth-token"),
  };
}

export const API = axios.create(axiosConfig);

export const setAuthToken = (token) => {
  const authToken = `Bearer ${token}`;
  // Salvar o token no localStorage
  localStorage.setItem("auth-token", authToken);
  // Definir o padrão do axios (header)
  API.defaults.headers.common["Authorization"] = authToken;
};

export const setUserName = (username) => {
  const userName = username;
  // Salvar o token no localStorage
  localStorage.setItem("userName", userName);
};
