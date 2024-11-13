const express = require('express');
const router = express.Router();
const financeiroRoutes = require('../app/financeiro/routes/financeiroRoutes');
const loginRoutes = require('../app/login/routes/loginRoutes');

router.use('/login', loginRoutes);
router.use('/api/financeiro', financeiroRoutes);

module.exports = router;
