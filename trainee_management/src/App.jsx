
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupForm from './SignupForm';
import Footer from './Footer';
import LoginForm from './LoginForm';
import Conn from './pages/signup/connect'
import Log from './pages/Login/Login'
import Stagiaire from './pages/Stagiaire/stagiaire';
import Homepage from './pages/accueil/accueil';
import EncadrantComponent from './pages/encadrant/Encadrant';
import StagesComponent from './pages/Stages/stage';
import AboutUsComponent from './pages/about us/about';
import ContactUsComponent from './pages/contactez nous/contact';




function App() {
  return (
  <BrowserRouter>
   <Routes>
    
      <Route path="/" element={<Conn/>} />
      <Route path="/login" element={<Log/>} />
      <Route path="/stagiaire" element={<Stagiaire/>} />
      <Route path="/homepage" element={<Homepage/>} />
      <Route path ="/encadrant" element={<EncadrantComponent/>}/>
      <Route path ="/stages" element={<StagesComponent/>}/>
      <Route path ="/about" element={<AboutUsComponent/>}/>
      <Route path ="/contact" element={<ContactUsComponent />}/>

    
      

    
    </Routes>
   
    </BrowserRouter>
  
    
  );
}
export default App;
