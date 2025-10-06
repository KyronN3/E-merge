import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./Auth/LoginPage.tsx";
import CityGovernmentDashboard from "./app/dashboard/CityGovernmentDashboard.tsx";
import BusinessDashboard from "./app/dashboard/BusinessDashboard.tsx";
import SignupPage from "./Auth/SignupPage.tsx";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/city-government-dashboard"
            element={<CityGovernmentDashboard />}
          />
          <Route path="/business-dashboard" element={<BusinessDashboard />} />
        </Routes>
      </Router>
  );
}

export default App;
