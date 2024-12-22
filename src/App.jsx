import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Use Routes instead of Router for route definitions
import { NavigationProvider } from './apis/context/navigateContext';
import {LandingPage,SignIn,SignUp} from './utils/index';


function App() {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </NavigationProvider>
    </BrowserRouter>
  );
}

export default App;
