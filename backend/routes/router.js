const express = require('express');
const financeiroRoutes = require('../apps/financeiro/routes/financeiroRoutes');
const loginRoutes = require('../apps/login/routes/loginRoutes');

const router = express.Router();

router.use('/api/financeiro', financeiroRoutes);
router.use('/api', loginRoutes);

module.exports = router;