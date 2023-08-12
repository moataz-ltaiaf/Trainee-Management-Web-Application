
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupForm from './SignupForm';
import Footer from './Footer';
import LoginForm from './LoginForm';
import Conn from './pages/signup/connect'
import Log from './pages/Login/Login'
import Stagiaire from './pages/Stagiaire/stagiaire';
import Homepage from './pages/accueil/accueil';
import EncadrantComponent from './pages/EncadrantComponent';


function App() {
  return (
  <BrowserRouter>
   <Routes>
    
      <Route path="/" element={<Conn/>} />
      <Route path="/login" element={<Log/>} />
      <Route path="/stagiaire" element={<Stagiaire/>} />
      <Route path="/homepage" element={<Homepage/>} />
      <Route path="/encadrant" element={<EncadrantComponent/>} />

    
      

    
    </Routes>
   
    </BrowserRouter>
  
    
  );
}
export default App;
