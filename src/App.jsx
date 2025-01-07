import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Use Routes instead of Router for route definitions
import { NavigationProvider } from './apis/context/navigateContext';
import {LandingPage,SignIn} from './utils/index';
import LoginPage from './pages/LoginPage';
import PatientRegister from './pages/PatientRegister';
import PrescriberDashboard from './pages/PrescriberDashboard';
import PharmacistDashboard from './pages/PharmacistDashboard';


function App() {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/triage" element={<PatientRegister />} />
          <Route path="/prescriber" element={<PrescriberDashboard />} />
          <Route path="/pharmacy" element={<PharmacistDashboard />} />
        </Routes>
      </NavigationProvider>
    </BrowserRouter>
  );
}

export default App;
