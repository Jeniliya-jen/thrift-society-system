import { useEffect, useState } from 'react'
import { getPR400 } from '../../services/reportsService'
import '../members/Members.css'

export default function PR400Report() {
  const [data, setData] = useState([])

  useEffect(() => {
    getPR400().then(r => setData(r.data)).catch(() => {})
  }, [])

  const totalInst = data.reduce((s, r) => s + Number(r.inst_amt || 0), 0)
  const totalInterest = data.reduce((s, r) => s + Number(r.interest || 0), 0)
  const totalRec = data.reduce((s, r) => s + Number(r.tot_rec || 0), 0)
  const totalBal = data.reduce((s, r) => s + Number(r.ln_bal || 0), 0)

  return (
    <div>
      <h2 className="page-title">PR400 — ECTS Loan Recovery Schedule</h2>
      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>S.No</th><th>Emp No</th><th>Loan No</th><th>Name</th><th>Designation</th>
              <th>Mem No</th><th>Loan Date</th><th>Loan Amt</th><th>Inst No</th>
              <th>Inst Amt</th><th>Interest</th><th>Tot Rec</th><th>Loan Bal</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r, i) => (
              <tr key={i}>
                <td>{r.s_no}</td>
                <td>{r.empno}</td>
                <td>{r.loan_no}</td>
                <td>{r.empname}</td>
                <td>{r.desig}</td>
                <td>{r.memno}</td>
                <td>{r.date_of_loan}</td>
                <td>₹{Number(r.loan_amt || 0).toLocaleString()}</td>
                <td>{r.inst_no}</td>
                <td>₹{Number(r.inst_amt || 0).toLocaleString()}</td>
                <td>₹{Number(r.interest || 0).toLocaleString()}</td>
                <td>₹{Number(r.tot_rec || 0).toLocaleString()}</td>
                <td>₹{Number(r.ln_bal || 0).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={9}><strong>Grand Total</strong></td>
              <td><strong>₹{totalInst.toLocaleString()}</strong></td>
              <td><strong>₹{totalInterest.toLocaleString()}</strong></td>
              <td><strong>₹{totalRec.toLocaleString()}</strong></td>
              <td><strong>₹{totalBal.toLocaleString()}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
