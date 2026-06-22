import { useEffect, useState } from 'react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
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

  const downloadPDF = () => {
    const doc = new jsPDF({ orientation: 'landscape' })
    doc.text('Salem Steel Plant Thrift Society', 14, 10)
    doc.text('PR200 - Statement of Subscription & Loan', 14, 18)
    autoTable(doc, {
      head: [['S.No', 'MR No', 'Emp No', 'Name', 'Dept', 'Subs Amt', 'Loan Amt', 'Total Amt', 'Cum Subs']],
      body: data.map(r => [r.s_no, r.mr_no, r.empno, r.name, r.dept, r.subs_amt, r.loan_amt, r.total_amt, r.cum_subs_amt]),
      foot: [['', '', '', '', 'Grand Total', totalSubs, totalLoan, totalAmt, '']],
      startY: 22
    })
    doc.save('PR200_Report.pdf')
  }

  return (
    <div>
      <div className="page-header">
        <h2 className="page-title">PR200 — Subscription & Loan Statement</h2>
        <button className="btn-primary" onClick={downloadPDF}>⬇ Download PDF</button>
      </div>
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
