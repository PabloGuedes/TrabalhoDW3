const express = require('express');
const financeiroController = require('../controller/financeiroController');

const router = express.Router();

router.post('/', financeiroController.createFinanceiro);
router.get('/', financeiroController.getFinanceiros);
router.put('/:id', financeiroController.updateFinanceiro);
router.delete('/:id', financeiroController.deleteFinanceiro);

module.exports = router;
