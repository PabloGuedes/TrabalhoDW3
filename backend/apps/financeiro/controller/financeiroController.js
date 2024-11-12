const financeiroModel = require('../model/financeiroModel');

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