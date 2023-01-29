import React from 'react';
import "../styles/Massages.css";
import "../styles/Home.css";
import "../styles/App.css";
import massagePetit from "../assets/carrousel-massage-petit.jpg";
import carret from "../assets/carret.png";
import cottonbro from "../assets/pexels-cottonbro-3997997.jpg";
import anna from "../assets/pexels-anna-tarazevich-6560266.jpg";
import photo from "../assets/pexels-photo-10832255.jpeg";

export default function Massages() {
  const handleClick1 = () => {
    document.querySelector(".bloc-massage p.paragraphe1").classList.toggle("toogle-paragraphe");
    document.querySelector(".bloc-img img.bouton1").classList.toggle("rotate-btn");
  }
  const handleClick2 = () => {
    document.querySelector(".bloc-massage p.paragraphe2").classList.toggle("toogle-paragraphe");
    document.querySelector(".bloc-img img.bouton2").classList.toggle("rotate-btn");
  }
  const handleClick3 = () => {
    document.querySelector(".bloc-massage p.paragraphe3").classList.toggle("toogle-paragraphe");
    document.querySelector(".bloc-img img.bouton3").classList.toggle("rotate-btn");
  }
  const handleClick4 = () => {
    document.querySelector(".bloc-massage p.paragraphe4").classList.toggle("toogle-paragraphe");
    document.querySelector(".bloc-img img.bouton4").classList.toggle("rotate-btn");
  }

  return (
    <div className="App">
      <h1>Nos massages</h1>

      <div className="bloc-massage">
        <div className="bloc-titre">
          <h2>Le massage californien</h2>
          <h2>45 €</h2>
        </div>
        <div className="bloc-img">
          <img src={massagePetit} alt="massage"/>
          <img src={carret} alt="bouton" className="bouton1" onClick={handleClick1}/>
        </div>
        <p className="paragraphe1">
          Le massage californien agit sur plusieurs niveaux: l'esprit, le corps et l'émotion. Il apporte de nombreux bienfaits tels que :
          Un meilleur équilibre psychologique.
        </p>
      </div> 

      <div className="bloc-massage">
        <div className="bloc-titre">
          <h2>Le massage suédois</h2>
          <h2>125 €</h2>
        </div>
        <div className="bloc-img">
          <img src={cottonbro} alt="massage" />
          <img src={carret} alt="bouton" className="bouton2" onClick={handleClick2}/>
        </div>
        <p className="paragraphe2">
          Le massage suédois est la solution la plus rapide pour soulager les courbatures et évacuer stress et tension musculaire. 
          Le massage suédois est une pratique destinée à favoriser la symbiose de l'esprit et du corps...
        </p>
      </div> 

      <div className="bloc-massage">
        <div className="bloc-titre">
          <h2>Le massage balinais</h2>
          <h2>95 €</h2>
        </div>
        <div className="bloc-img">
            <img src={anna} alt="massage" />
            <img src={carret} alt="bouton" className="bouton3" onClick={handleClick3}/>
        </div>
        <p className="paragraphe3">
          Le massage balinais se diffère par son action incontestable sur les masses de graisse. 
          Il agit par l'intermédiaire des Marmas (les points vitaux) sur les 3 systèmes représentés par ces 3 éléments: le système nerveux, le système digestif et le système hormonal.
        </p>
      </div> 

      <div className="bloc-massage">
        <div className="bloc-titre">
          <h2>Le massage thailandais</h2>
          <h2>110 €</h2>
        </div>
        <div className="bloc-img">
          <img src={photo} alt="massage" />
          <img src={carret} alt="bouton" className="bouton4" onClick={handleClick4}/>
        </div>
        <p className="paragraphe4">
          Le massage thaïlandais vise à équilibrer l'énergie vitale et libère l'organisme de toute tension physique et mentale.
          Tirant ses méthodes de différents types de massage, le massage thaïlandais est une véritable thérapie contre les tensions physiques et les émotions négatives.
        </p>
      </div> 
    </div>
  )
}
