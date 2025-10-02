import { Route, Routes } from 'react-router-dom'
import AccountPage from '../../pages/AccountPage/AccountPage/AccountPage'

function AccountRoute() {
  return (
    <div>
        <Routes>
            <Route path='/account/*' element={<AccountPage />}/>
        </Routes>
    </div>
  )
}

export default AccountRoute