const express = require('express');
const financeiroController = require('../controller/financeiroController');
const authenticateToken = require('../../../middleware/authMiddleware');

const router = express.Router();

router.get('/', financeiroController.getFinanceiros);
router.get('/', authenticateToken, financeiroController.getAllFinanceiro);
router.get('/:id', authenticateToken, financeiroController.getFinanceiroById);
router.post('/', authenticateToken, financeiroController.insertFinanceiro);
router.put('/:id', authenticateToken, financeiroController.updateFinanceiro);
router.delete('/:id', authenticateToken, financeiroController.deleteFinanceiro);

module.exports = router;