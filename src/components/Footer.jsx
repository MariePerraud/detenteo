import React from 'react';
import { Link } from "react-router-dom";
import { FaPhone, FaCalendar, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdAlternateEmail, MdLocationOn } from 'react-icons/md';
import "../styles/Footer.css";
import "../styles/App.css";
import logo from "../assets/white-logo.png";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="bloc-infos1">
        <h2 className="title-footer">Nous contacter</h2>

        <div className="contact-infos">
          <a href="tel:+33240415098">
            <FaPhone />
            <div className="bouton-contact">02.40.41.50.98</div>
          </a>
        </div>

        <div className="contact-infos">
          <Link to="/contact">
            <MdAlternateEmail />
            <div className="bouton-contact question">Une question ?</div>
          </Link>
        </div>
      </div>

      <div className="bloc-infos2">
        <div className="flex-infos2">
          <h3 className="title-footer2">
            <FaCalendar />
            Horaires
          </h3>
          <div>Lundi au vendredi :<br/> 9h à 13h & 14h à 19h</div>
          <div>Samedi et jours fériés :<br/> 9h à 19h</div>
        </div>

        <div className="flex-infos2 reseaux">
          <div className="logo-foot">
            <img className="logo-footer" src={logo} alt="logo"/>
          </div>
          <div className="logo-reseaux">
            <FaFacebook />{" "}
            <FaTwitter />{" "}
            <FaInstagram />
          </div> 
        </div>

        <div className="flex-infos2 adresse">
          <h3 className="title-footer2">
          <MdLocationOn />
          Adresse</h3>
          <div>
            4 rue Baron <br />
            44000 Nantes
          </div>
          <div>© 2022 - Détentéo</div>
        </div>
      </div>
    </div>
  )
}
