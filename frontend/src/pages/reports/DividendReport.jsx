import { useEffect, useState } from 'react'
import { getDividend } from '../../services/reportsService'
import '../members/Members.css'

export default function DividendReport() {
  const [data, setData] = useState([])

  useEffect(() => {
    getDividend().then(r => setData(r.data)).catch(() => {})
  }, [])

  const total = data.reduce((s, r) => s + Number(r.ds_tot || 0), 0)

  return (
    <div>
      <h2 className="page-title">Dividend Payment Report 2023-24</h2>
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
