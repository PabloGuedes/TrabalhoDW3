const axios = require('axios');
const pool = require('../../../database/databaseConfig');

exports.createFinanceiro = async (req, res) => {
  const { descricao, data, valor } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO financeiro (descricao, data, valor) VALUES ($1, $2, $3) RETURNING *',
      [descricao, data, valor]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao inserir registro financeiro:', error);
    res.status(500).json({ message: 'Erro ao inserir registro financeiro' });
  }
};

exports.getFinanceiros = async (req, res) => {
  try {
    const response = await axios.get(`${process.env.API_URL}/financeiro`, {
      headers: {
        Authorization: req.headers.authorization,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao obter registros financeiros:', error.message);
    res.status(500).json({ message: 'Erro ao obter registros financeiros' });
  }
};

exports.updateFinanceiro = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.put(`${process.env.API_URL}/financeiro/${id}`, req.body, {
      headers: {
        Authorization: req.headers.authorization,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao atualizar registro financeiro:', error.message);
    res.status(500).json({ message: 'Erro ao atualizar registro financeiro' });
  }
};

exports.deleteFinanceiro = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.delete(`${process.env.API_URL}/financeiro/${id}`, {
      headers: {
        Authorization: req.headers.authorization,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao deletar registro financeiro:', error.message);
    res.status(500).json({ message: 'Erro ao deletar registro financeiro' });
  }
};