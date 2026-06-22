import { useEffect, useState } from 'react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { getDividend } from '../../services/reportsService'
import '../members/Members.css'

export default function DividendReport() {
  const [data, setData] = useState([])

  useEffect(() => {
    getDividend().then(r => setData(r.data)).catch(() => {})
  }, [])

  const total = data.reduce((s, r) => s + Number(r.ds_tot || 0), 0)

  const downloadPDF = () => {
    const doc = new jsPDF()
    doc.text('Salem Steel Plant Thrift Society', 14, 10)
    doc.text('Dividend Payment Report 2023-24', 14, 18)
    autoTable(doc, {
      head: [['S.No', 'Code', 'Member No', 'Emp No', 'Name', 'Month/Year', 'Dividend Amount']],
      body: data.map(r => [r.s_no, r.cod, r.mno, r.empno, r.name, r.mnyr, r.ds_tot]),
      foot: [['', '', '', '', '', 'Total', total]],
      startY: 22
    })
    doc.save('Dividend_Report.pdf')
  }

  return (
    <div>
      <div className="page-header">
        <h2 className="page-title">Dividend Payment Report 2023-24</h2>
        <button className="btn-primary" onClick={downloadPDF}>⬇ Download PDF</button>
      </div>
      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>S.No</th><th>Code</th><th>Member No</th><th>Emp No</th><th>Name</th><th>Month/Year</th><th>Dividend Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r, i) => (
              <tr key={i}>
                <td>{r.s_no}</td>
                <td>{r.cod}</td>
                <td>{r.mno}</td>
                <td>{r.empno}</td>
                <td>{r.name}</td>
                <td>{r.mnyr}</td>
                <td>₹{Number(r.ds_tot || 0).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={6}><strong>Total Dividend</strong></td>
              <td><strong>₹{total.toLocaleString()}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
