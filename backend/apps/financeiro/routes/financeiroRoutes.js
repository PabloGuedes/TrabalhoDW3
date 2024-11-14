const express = require('express');
const financeiroController = require('../controller/financeiroController');
const authenticateToken = require('../../../middleware/authenticateToken');

const router = express.Router();

// Rotas para CRUD de registros financeiros
router.get('/', authenticateToken, financeiroController.getFinanceiros); // Retorna registros não removidos
router.get('/:id', authenticateToken, financeiroController.getFinanceiroById); // Retorna um registro por ID
router.post('/', authenticateToken, financeiroController.insertFinanceiro); // Insere um novo registro
router.put('/:id', authenticateToken, financeiroController.updateFinanceiro); // Atualiza um registro por ID
router.delete('/:id', authenticateToken, financeiroController.deleteFinanceiro); // Marca um registro como removido

module.exports = router;