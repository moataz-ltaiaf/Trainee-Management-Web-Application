
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupForm from './SignupForm';
import Footer from './Footer';
import LoginForm from './LoginForm';
import Conn from './pages/signup/connect'
import Log from './pages/Login/Login'
import Navbar from './Navbar';
import Stagiaire from './pages/Stagiaire/stagiaire';
function App() {
  return (
  <BrowserRouter>
   <Routes>
    
      <Route path="/" element={<Conn/>} />
      <Route path="/login" element={<Log/>} />
      <Route path="/stagiaire" element={<Stagiaire/>} />

      
      
    </Routes>
   
    </BrowserRouter>
  
    
  );
}
export default App;
