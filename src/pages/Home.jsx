import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../styles/App.css";
import eau from "../assets/carrousel-eau.jpg";
import massage from "../assets/carrousel-massage.jpg";
import piscine from "../assets/carrousel-piscine.jpg";
import spaNoir from "../assets/picto-spa-noir.png";
import massageNoir from "../assets/picto-massage-noir.png";
import piscinePetit from "../assets/piscine-portrait-petit.jpg";
import massagePetit from "../assets/massage-portrait-petit.jpg";

export default function Home() {
  return (
    <div className="App">
      <section className="desktop-header">
        <div className="banniere">
          <h1 className="titre-banniere">Détentéo</h1>
        </div>
      </section>
      <section className="carrousel-presentation">
        <div className="presentation">
          <p>Aux portes d’Atlantis, découvrez <span>Détentéo</span>, 4000 m² d’installations exceptionnelles entièrement <span>dédiées à la détente et au bien-être</span>.</p>
          <p>Venez déposer votre stress et vos tracas du quotidien sous l’eau chaude à 34°C de nos bains, une eau purifiante qui enveloppe comme un cocon, relaxe et apaise.</p>
          <p>Le <span>Spa Détentéo</span> avec ses senteurs délicates et ses musiques relaxantes, invite au voyage. Les massages proposés évoquent une <span>promesse de sérénité…</span></p>
        </div>
        <div id="slider">
          <figure>
              <img src={eau} alt="carrousel-eau" />
              <img src={massage} alt="carrousel massage" />
              <img src={piscine} alt="carrousel piscine" />
              <img src={eau} alt="carrousel eau" />
          </figure>
        </div>
      </section>
      <section className="main-page">
        <h1 className="cta-h1">Détentéo</h1>
        <h2 className="cta-h2">Que recherchez-vous ?</h2>
        <div className="cta-buttons">
          <div className="cta-picto">
            <Link to="/spa">
              <img className="cta-size-picto" src={spaNoir} alt="picto-spa"/>
              <div className="cta-picto-font">SPA</div>
            </Link>
          </div>
          <div className="cta-picto">
            <Link to="/massages">
              <img className="cta-size-picto" src={massageNoir} alt="picto-massage"/>
              <div className="cta-picto-font">MASSAGES</div>
            </Link>
          </div>
        </div>
      </section>
      <section className="desktop-page">
        <div className="spa-massage">
          <div className="wrapper1">
            <Link to="/spa">
              <h2>Spa</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo explicabo pariatur dolores accusantium fugiat sequi nihil!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deleniti dolores fugiat esse iusto veritatis, eaque hic optio nobis cupiditate dolorum ut distinctio.</p>
            </Link>
          </div>
          <div className="spa">
            <Link to="/spa">
              <img src={piscinePetit} alt="spa" />
            </Link>
          </div>
          <div className="wrapper2">
            <Link to="/massages">
              <h2>Massages</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo explicabo pariatur dolores accusantium fugiat sequi nihil!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deleniti dolores fugiat esse iusto veritatis, eaque hic optio nobis cupiditate dolorum ut distinctio.</p>
            </Link>
          </div>
          <div className="massage">
            <Link to="/massages">
              <img src={massagePetit} alt="massage" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
