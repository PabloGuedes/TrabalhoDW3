const pool = require('../../../database/databaseConfig');

const getAllFinanceiro = async () => {
  return await pool.query('SELECT * FROM financeiro WHERE removido = false');
};

const getFinanceiroById = async (id) => {
  return await pool.query('SELECT * FROM financeiro WHERE id = $1 AND removido = false', [id]);
};

const insertFinanceiro = async (descricao, data, valor) => {
  return await pool.query(
    'INSERT INTO financeiro (descricao, data, valor, removido) VALUES ($1, $2, $3, false) RETURNING *',
    [descricao, data, valor]
  );
};

const updateFinanceiro = async (id, descricao, data, valor) => {
  return await pool.query(
    'UPDATE financeiro SET descricao = $1, data = $2, valor = $3 WHERE id = $4 RETURNING *',
    [descricao, data, valor, id]
  );
};

const deleteFinanceiro = async (id) => {
  return await pool.query(
    'UPDATE financeiro SET removido = true WHERE id = $1 RETURNING *',
    [id]
  );
};

module.exports = { getAllFinanceiro, getFinanceiroById, insertFinanceiro, updateFinanceiro, deleteFinanceiro };