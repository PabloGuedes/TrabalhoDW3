const financeiroModel = require('../model/financeiroModel');
const pool = require('../../../database/databaseConfig');

exports.getFinanceiros = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM financeiro WHERE removido = false ORDER BY id');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar registros financeiros:', error);
    res.status(500).json({ message: 'Erro ao buscar registros financeiros' });
  }
};

exports.updateFinanceiro = async (req, res) => {
  const { id } = req.params;
  const { descricao, data, valor } = req.body;
  try {
    const result = await pool.query(
      'UPDATE financeiro SET descricao = $1, data = $2, valor = $3 WHERE id = $4 RETURNING *',
      [descricao, data, valor, id]
    );
    if (result.rowCount === 0) return res.status(404).json({ message: 'Registro não encontrado' });
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao atualizar registro financeiro:', error);
    res.status(500).json({ message: 'Erro ao atualizar registro financeiro' });
  }
};

exports.deleteFinanceiro = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM financeiro WHERE id = $1', [id]);
    if (result.rowCount === 0) return res.status(404).json({ message: 'Registro não encontrado' });
    res.status(200).json({ message: 'Registro excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir registro financeiro:', error);
    res.status(500).json({ message: 'Erro ao excluir registro financeiro' });
  }
};

exports.getFinanceiroById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM financeiro WHERE id = $1', [id]);
    if (result.rowCount === 0) return res.status(404).json({ message: 'Registro não encontrado' });
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao buscar registro financeiro:', error);
    res.status(500).json({ message: 'Erro ao buscar registro financeiro' });
  }
};

exports.getAllFinanceiro = async (req, res) => {
  const result = await financeiroModel.getAllFinanceiro();
  res.json(result.rows);
};

exports.getFinanceiroById = async (req, res) => {
  const { id } = req.params;
  const result = await financeiroModel.getFinanceiroById(id);
  res.json(result.rows[0]);
};

exports.insertFinanceiro = async (req, res) => {
  const { descricao, data, valor } = req.body;
  const result = await financeiroModel.insertFinanceiro(descricao, data, valor);
  res.status(201).json(result.rows[0]);
};

exports.updateFinanceiro = async (req, res) => {
  const { id } = req.params;
  const { descricao, data, valor } = req.body;
  const result = await financeiroModel.updateFinanceiro(id, descricao, data, valor);
  res.json(result.rows[0]);
};

exports.deleteFinanceiro = async (req, res) => {
  const { id } = req.params;
  const result = await financeiroModel.deleteFinanceiro(id);
  res.json(result.rows[0]);
};