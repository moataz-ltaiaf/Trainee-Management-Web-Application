
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupForm from './SignupForm';
import Footer from './Footer';
import LoginForm from './LoginForm';
import Conn from './pages/signup/connect'
import Log from './pages/Login/Login'
import Homepage from './pages/accueil/accueil';

function App() {
  return (
  <BrowserRouter>
   <Routes>

      <Route path="/" element={<Conn/>} />
      <Route path="/login" element={<Log/>} />
      <Route path="/accueil" element={<Homepage/>} />
      

    
    </Routes>
    </BrowserRouter>
    
  );
}
export default App;
