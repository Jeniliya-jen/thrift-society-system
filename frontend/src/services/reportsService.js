import axios from 'axios'

export const getPR200 = () => axios.get('/api/reports/pr200')
export const getPR400 = () => axios.get('/api/reports/pr400')
export const getDepositRegister = () => axios.get('/api/reports/deposit')
export const getDividend = () => axios.get('/api/reports/dividend')
