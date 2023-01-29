import React from 'react';
import "../styles/Spa.css";
import "../styles/Home.css";
import "../styles/App.css";
import piscinePetit from "../assets/piscine-portrait-petit.jpg";
import piscineInterieur from "../assets/z.piscine-interieur-200-300.jpg";
import zSpa from "../assets/z.spa-200-300.jpg";
import vueExterieur from "../assets/z.vue-exterieur-200-300.jpg";

export default function Spa() {
  return (
    <div  className="App">
      <h1>
        Nos univers
      </h1>

      <section className="pack1"> 
          <div className="texte1">
              <h2>Lorem</h2>
              <p>Lorem ipsum. Nemo explicabo pariatur dolores accusantium fugiat sequi nihil,Lorem ipsum dolor sit.</p>          </div>
          <div className="img1">    
              <img className="img1" src={piscinePetit} alt="spa" />
          </div>
      </section>

      <section className="pack2">
          <div className="texte2">
              <h2>Ipsum</h2>
              <p>Lorem ipsum. Nemo explicabo pariatur dolores accusantium fugiat sequi nihil,Lorem ipsum dolor sit.</p>          </div>    
          <div className="img2">
              <img className="img2" src={piscineInterieur} alt="massage" />
          </div>
      </section>

      <section className="pack1"> 
          <div className="texte1">
              <h2>Lorem</h2>
              <p>Lorem ipsum. Nemo explicabo pariatur dolores accusantium fugiat sequi nihil,Lorem ipsum dolor sit.</p>          </div>
          <div className="img1">    
              <img className="img1" src={zSpa} alt="spa" />
          </div>
      </section>

      <section className="pack2">
          <div className="texte2">
              <h2>Ipsum</h2>
              <p>Lorem ipsum. Nemo explicabo pariatur dolores accusantium fugiat sequi nihil,Lorem ipsum dolor sit.</p>          </div>    
          <div className="img2">
              <img className="img2" src={vueExterieur} alt="massage"  style={{marginBottom: "17rem"}}/>
          </div>
      </section>                
  
      <section className="desktop-page">
        <div className="spa-massage-page-spa">
          <div className="wrapper1">
            <h2>Lorem</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo explicabo pariatur dolores accusantium fugiat sequi nihil!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deleniti dolores fugiat esse iusto veritatis, eaque hic optio nobis cupiditate dolorum ut distinctio.</p>
          </div>
          <div className="spa">
            <img src={piscineInterieur} alt="spa" />
          </div>

          <div className="wrapper2">
            <h2>Ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo explicabo pariatur dolores accusantium fugiat sequi nihil!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deleniti dolores fugiat esse iusto veritatis, eaque hic optio nobis cupiditate dolorum ut distinctio.</p>
          </div>
          <div className="massage">
            <img src={vueExterieur} alt="massage" />
          </div>

          {/* <div className="separateur">
            <img className="logo-separateur" src={logo} alt="logo" />
          </div> */}

          <div className="wrapper3">
            <h2>Lorem</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo explicabo pariatur dolores accusantium fugiat sequi nihil!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deleniti dolores fugiat esse iusto veritatis, eaque hic optio nobis cupiditate dolorum ut distinctio.</p>
          </div>
          <div className="spa2">
            <img src={zSpa} alt="spa" />
          </div>

          <div className="wrapper4">
            <h2>Ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo explicabo pariatur dolores accusantium fugiat sequi nihil!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deleniti dolores fugiat esse iusto veritatis, eaque hic optio nobis cupiditate dolorum ut distinctio.</p>
          </div>
          <div className="massage2">
            <img src={piscinePetit} alt="massage" />
          </div>
        </div>
      </section>
    </div>
  )
}
