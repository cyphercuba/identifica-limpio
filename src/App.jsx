import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { MapPage } from './pages/MapPage'
import { ProvincePage } from './pages/ProvincePage'
import { AdminLogin } from './pages/AdminLogin'
import { AdminDashboard } from './pages/AdminDashboard'
import { ReportForm } from './pages/ReportForm'
import { SuccessPage } from './pages/SuccessPage'
import { CancelPage } from './pages/CancelPage'
import { PayPage } from './pages/PayPage'
import { SubscribePage } from './pages/SubscribePage'
import { AuthProvider } from './context/AuthContext'

import './index.css'

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/mapa' element={<MapPage />} />
          <Route path='/provincia/:nombre' element={<ProvincePage />} />
          <Route path='/reportar' element={<ReportForm />} />
          <Route path='/admin/login' element={<AdminLogin />} />
          <Route path='/admin/panel' element={<AdminDashboard />} />
          <Route path='/donar' element={<PayPage />} />
          <Route path='/suscribirse' element={<SubscribePage />} />
          <Route path='/exito' element={<SuccessPage />} />
          <Route path='/cancelado' element={<CancelPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}
