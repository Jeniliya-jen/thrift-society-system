import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Dashboard from '../pages/dashboard/Dashboard'
import MemberList from '../pages/members/MemberList'
import AddMember from '../pages/members/AddMember'
import EditMember from '../pages/members/EditMember'
import LoanList from '../pages/loans/LoanList'
import AddLoan from '../pages/loans/AddLoan'
import SubscriptionList from '../pages/subscriptions/SubscriptionList'
import AddSubscription from '../pages/subscriptions/AddSubscription'
import LoanReport from '../pages/reports/LoanReport'
import SubscriptionReport from '../pages/reports/SubscriptionReport'
import TallyRegister from '../pages/reports/TallyRegister'
import PR200Report from '../pages/reports/PR200Report'
import PR400Report from '../pages/reports/PR400Report'
import DepositRegister from '../pages/reports/DepositRegister'
import DividendReport from '../pages/reports/DividendReport'
import Administration from '../pages/administration/Administration'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/members" element={<MemberList />} />
        <Route path="/members/add" element={<AddMember />} />
        <Route path="/members/edit/:emp" element={<EditMember />} />
        <Route path="/loans" element={<LoanList />} />
        <Route path="/loans/add" element={<AddLoan />} />
        <Route path="/subscriptions" element={<SubscriptionList />} />
        <Route path="/subscriptions/add" element={<AddSubscription />} />
        <Route path="/reports/loans" element={<LoanReport />} />
        <Route path="/reports/subscriptions" element={<SubscriptionReport />} />
        <Route path="/reports/tally" element={<TallyRegister />} />
        <Route path="/reports/pr200" element={<PR200Report />} />
        <Route path="/reports/pr400" element={<PR400Report />} />
        <Route path="/reports/deposit" element={<DepositRegister />} />
        <Route path="/reports/dividend" element={<DividendReport />} />
        <Route path="/administration" element={<Administration />} />
      </Route>
    </Routes>
  )
}
