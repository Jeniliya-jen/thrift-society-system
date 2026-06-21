import { useEffect, useState } from 'react'
import { getDepositRegister } from '../../services/reportsService'
import '../members/Members.css'

export default function DepositRegister() {
  const [data, setData] = useState([])

  useEffect(() => {
    getDepositRegister().then(r => setData(r.data)).catch(() => {})
  }, [])

  const totalDep = data.reduce((s, r) => s + Number(r.dep || 0), 0)
  const totalCl = data.reduce((s, r) => s + Number(r.cl_bal || 0), 0)
  const totalInt = data.reduce((s, r) => s + Number(r.interest || 0), 0)

  return (
    <div>
      <h2 className="page-title">Thrift Deposit Register 2025-26</h2>
      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>S.No</th><th>MNO</th><th>Emp No</th><th>Name</th><th>Opn Bal</th>
              <th>Apr</th><th>May</th><th>Jun</th><th>Jul</th><th>Aug</th><th>Sep</th>
              <th>Oct</th><th>Nov</th><th>Dec</th><th>Jan</th><th>Feb</th><th>Mar</th>
              <th>Total Dep</th><th>Cl Bal</th><th>Interest</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r, i) => (
              <tr key={i}>
                <td>{r.s_no}</td>
                <td>{r.mno}</td>
                <td>{r.empno}</td>
                <td>{r.name}</td>
                <td>₹{Number(r.opn_bal || 0).toLocaleString()}</td>
                <td>{r.apr || 0}</td><td>{r.may || 0}</td><td>{r.jun || 0}</td>
                <td>{r.jul || 0}</td><td>{r.aug || 0}</td><td>{r.sep || 0}</td>
                <td>{r.oct || 0}</td><td>{r.nov || 0}</td><td>{r.dec || 0}</td>
                <td>{r.jan || 0}</td><td>{r.feb || 0}</td><td>{r.mar || 0}</td>
                <td>₹{Number(r.dep || 0).toLocaleString()}</td>
                <td>₹{Number(r.cl_bal || 0).toLocaleString()}</td>
                <td>₹{Number(r.interest || 0).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={17}><strong>Total</strong></td>
              <td><strong>₹{totalDep.toLocaleString()}</strong></td>
              <td><strong>₹{totalCl.toLocaleString()}</strong></td>
              <td><strong>₹{totalInt.toLocaleString()}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
