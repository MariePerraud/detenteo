import React from 'react';
import "../styles/Contact.css";
import "../styles/Home.css";
import "../styles/App.css";

export default function Contact() {
  return (
    <div className="App">
      <div className="div-form">
        <h1>Contactez-nous</h1>
          <form id="form-contact">
            <input type="text" placeholder="Nom" required />
            <input type="email" placeholder="Adresse mail" required />
            <input type="tel" placeholder="Téléphone" required />
            <textarea placeholder="Votre message ... " required></textarea>
            <input type="submit" />
          </form>
      </div>
      <div className="bloc-adresse">
        <h1 style={{marginTop:"5rem"}}>Retrouvez-nous</h1>
        <section className="map-google">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.2655997936095!2d-1.5497400846741414!3d47.211385179160395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eeb04e035b03%3A0xfe166fb643fd3846!2s4%20Rue%20Baron%2C%2044000%20Nantes!5e0!3m2!1sfr!2sfr!4v1647295194401!5m2!1sfr!2sfr" 
            title="carte"
            scrolling="no"
            frameborder="0"
            height="100%"
            width= "100%"
          />
        </section>
        <address>
          <div className="div-adresse">
            <i className="fa-solid fa-location-dot"></i> 
            4, rue Baron 44400 Nantes
          </div>       
        </address>
      </div>
    </div>
  )
}
