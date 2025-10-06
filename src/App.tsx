
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "./LoginPage.tsx"
import CityGovernmentDashboard from "./app/dashboard/CityGovernmentDashboard.tsx"
import BusinessDashboard from "./app/dashboard/BusinessDashboard.tsx"
import TouristDashboard from "./app/dashboard/TouristDashboard.tsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/city-government-dashboard" element={<CityGovernmentDashboard />} />
        <Route path="/business-dashboard" element={<BusinessDashboard />} />
        <Route path="/tourist-dashboard" element={<TouristDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
