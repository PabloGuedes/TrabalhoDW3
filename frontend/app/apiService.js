import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    console.error("Erro ao realizar login:", error);
    throw error;
  }
};

export const getFinanceiros = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/financeiro`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao obter dados financeiros:", error);
    throw error;
  }
};

export const createFinanceiro = async (token, data) => {
  try {
    const response = await axios.post(`${API_URL}/financeiro`, data, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao criar registro financeiro:", error);
    throw error;
  }
};

export const updateFinanceiro = async (token, id, data) => {
  try {
    const response = await axios.put(`${API_URL}/financeiro/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar registro financeiro:", error);
    throw error;
  }
};

export const deleteFinanceiro = async (token, id) => {
  try {
    const response = await axios.delete(`${API_URL}/financeiro/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar registro financeiro:", error);
    throw error;
  }
};
