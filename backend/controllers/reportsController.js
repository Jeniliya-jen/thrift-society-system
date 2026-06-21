const db = require('../db')

exports.getPR200 = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM staging_pr200p ORDER BY s_no')
    res.json(rows)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.getPR400 = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM staging_recovery_schedule ORDER BY s_no')
    res.json(rows)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.getDepositRegister = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM staging_deposit_register ORDER BY s_no')
    res.json(rows)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.getDividend = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM staging_dividend ORDER BY s_no')
    res.json(rows)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
