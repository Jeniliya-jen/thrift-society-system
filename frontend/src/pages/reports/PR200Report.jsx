import { useEffect, useState } from 'react'
import { getPR200 } from '../../services/reportsService'
import '../members/Members.css'

export default function PR200Report() {
  const [data, setData] = useState([])

  useEffect(() => {
    getPR200().then(r => setData(r.data)).catch(() => {})
  }, [])

  const totalSubs = data.reduce((s, r) => s + Number(r.subs_amt || 0), 0)
  const totalLoan = data.reduce((s, r) => s + Number(r.loan_amt || 0), 0)
  const totalAmt = data.reduce((s, r) => s + Number(r.total_amt || 0), 0)

  return (
    <div>
      <h2 className="page-title">PR200 — Subscription & Loan Statement</h2>
      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>S.No</th><th>MR No</th><th>Emp No</th><th>Name</th><th>Dept</th>
              <th>Subs Amt</th><th>Loan Amt</th><th>Total Amt</th><th>Cum Subs</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r, i) => (
              <tr key={i}>
                <td>{r.s_no}</td>
                <td>{r.mr_no}</td>
                <td>{r.empno}</td>
                <td>{r.name}</td>
                <td>{r.dept}</td>
                <td>₹{Number(r.subs_amt || 0).toLocaleString()}</td>
                <td>₹{Number(r.loan_amt || 0).toLocaleString()}</td>
                <td>₹{Number(r.total_amt || 0).toLocaleString()}</td>
                <td>₹{Number(r.cum_subs_amt || 0).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5}><strong>Grand Total</strong></td>
              <td><strong>₹{totalSubs.toLocaleString()}</strong></td>
              <td><strong>₹{totalLoan.toLocaleString()}</strong></td>
              <td><strong>₹{totalAmt.toLocaleString()}</strong></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
