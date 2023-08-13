import React from 'react';
import './Contact.css';
import '../../Footer.jsx';
import Footer from '../../Footer.jsx';

const ContactUsComponent = () => {
  return (<div><div className="contact-page">
  <div className="contact-form">
    <h2>Contact Us</h2>
    <form>
      <div className="form-group">
        <label htmlFor="name">Name and Surname</label>
        <input type="text" id="name" name="name" placeholder="Votre Nom et Prénom" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Votre Email" />
      </div>
      <button className="submit-button" type="submit">Envoyer</button>
    </form>
  </div>
  <div className="contact-info">
        <h3>society coordinates</h3>
        <div className="contact-item">
          <p>phone number:
            <span className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                <path d="M3 11a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3zm0-1V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm6 1h2v2h-2v-2z"/>
              </svg>
            </span>
            +123456789
          </p>
          <p>Email :
            <span className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M8 1a1 1 0 0 1 1 1v1.586l3.293 3.293a1 1 0 0 1-1.414 1.414L8 4.414 4.707 7.707a1 1 0 0 1-1.414-1.414L7 2.586V2a1 1 0 0 1 1-1zm0 3a1 1 0 0 1 .993.883L9 5v4.586l2.293 2.293a1 1 0 0 1-1.414 1.414L8 11.414 4.707 14.707a1 1 0 0 1-1.414-1.414L7 9.586V5a1 1 0 0 1 1-1zm-6 4a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h14a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1V7a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v1z"/>
              </svg>
            </span>
            info@entreprise.com
          </p>
          {/* ... rest of the content */}
        </div>
      
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116299.02105035972!2d10.482847235593043!3d35.86959012809151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130275ba928822ef%3A0x287071297b375e97!2sDR%C3%84XLMAIER%20Group%20Zaouiet%20Sousse!5e0!3m2!1sfr!2stn!4v1691945735603!5m2!1sfr!2stn"
  width={600}
  height={450}
  style={{ border: '0' }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>


  </div>
  
</div><Footer/></div>
    
    
  );
};

export default ContactUsComponent;