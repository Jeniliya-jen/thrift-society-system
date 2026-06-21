const express = require('express')
const router = express.Router()
const { getPR200, getPR400, getDepositRegister, getDividend } = require('../controllers/reportsController')

router.get('/pr200', getPR200)
router.get('/pr400', getPR400)
router.get('/deposit', getDepositRegister)
router.get('/dividend', getDividend)

module.exports = router
