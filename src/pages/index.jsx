/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../styles/index.css'

const Homepage = ()  => {
 return (
  <>
   <header className="genesys__header">
    <div className="genesys__logo">
     <img className="logo" src="/img/logo.png" all="Genesys logo"/>
    </div>
   
     <nav className="genesys__navbar">
      <ul className="navbar-items-1">
       <li><a href="#">learnable</a></li>
       <li><a href="#">agora</a></li>
       <li><a href="#">startzone</a></li>
       <li><a href="#">about</a></li>
       <li><a href="#">contact</a></li>
      </ul>
     </nav>
     <div className="genesys__navbar-right">
      <span className="build">build a product with</span>
      <button className="devstudio">
       <a href="#">devstudio</a>
      </button>
     </div>
   </header>

   <main className="genesys__main--content">
    <section className="genesys__about--section">
     <div className="about--text-content">
      <h1 className="about">
       Genesys provides opportunities for <br /> young Nigerian techies and <br /> opportunities to grow and <br /> innovate.
      </h1>
      <p>
       We understand that opportunities are scarce in these parts. We <br /> are either creating or exposing our people to these <br /> opportunities.
      </p>
     </div>
     <div className="about--image-content">
      <diV className="about--arrow-img"></diV>
      <div className="about--main--img"></div>
     </div>
    </section>

    <section className="genesys__learnable--section">
     <div className="learnable--img"></div>

     <div className="learnable--text-content">
      <h1 className="learnable--main-text">Learnable</h1>
      <p className="learnable-sub-text">
       Every year, young Nigerians are launching new careers in the technology 
       <br /> industry. Find out how Genesys is helping them do it.
      </p>
      <span><a href="#" className="learn-more">learn more</a></span>
     </div>
    </section>

    <section className="genesys__agora--section">
     <div className="agora--text-content">
      <h1 className="agora--main-text">Agora</h1>
      <p className="agora-sub-text">
       We are reimagining the workplace and how people work. 
       Find out how our <br /> 
       co-working spaces can help you enjoy the work that you do.
      </p>
      <span><a href="#" className="learn-more">learn more</a></span>
     </div>
     <div className="agora--img"></div>
    </section>
    <section className="genesys__startzone--section">
     <div className="startzone--img"></div>

     <div className="startzone--text-content">
      <h1 className="startzone--main-text">StartZone</h1>
      <p className="startzone-sub-text">
       The business environment is harsh for early-stage businesses. 
       We can help you <br /> rise above it all.
      </p>
      <span><a href="#" className="learn-more">learn more</a></span>
     </div>
    </section>

    <section className="genesys__otherThings--section">
      <div className="otherThings__boxes">

        <div className="boxes--1">
          <div className="box--1"></div>
          <div className="box--2"></div>
          <p className="codeville"><a href="#">CodeVille</a></p>
        </div>

        <div className="boxes--2">
          <div className="box--3">
           <h1><a href="#">Genesys <br/> Ignite</a></h1>
          </div>
          <div className="box--4"></div>
           <p className="pink"><a href="#">Pink summer <br/> of code</a></p>
        </div>
        
      </div>
      <div className="otherThings__text">
        <h1 className="otherThings__h1">Other things we <br/>do</h1>
      </div>
    </section>

    <section className="genesys__bestTeam--section">
     <div className="bestTeam--img"></div>
     <div className="bestTeam--text-content">
      <h1 className="bestTeam--main-text">The best team in the world</h1>
      <p className="bestTeam-sub-text">
       We work with the most amazing people our industry has to offer. <br/> 
       They are really passionate about making a difference
      </p>
      <span><a href="#" className="learn-more">See team</a></span>
     </div>
    </section>

    <section className="genesys__subscribe--section">
      <diV className="subscribe--arrow-img"></diV>
      <div className="subscribe--text-content">
       <diV className="subscribe--text">
        <h1>Stay up to date on what we <br/> are doing and new learning  <br/> opportunities</h1>
       </diV>
       <diV className="subscribe--email-vpp">
        <p className="email-add">Your email</p>
        <hr/>
        <p className="vpp">View Privacy Policy</p>
       </diV>
       <div className="subscribe__button">
        <button className="subscribe--btn">subscribe</button>
       </div>
      </div>
    </section>
   </main>

   <footer className="genesys__footer">
    <div className="footer__content">
     <div className="footer__left">
     <ul className="footer__link-1">
      <li><a href="#" className="footer__link">build software</a></li>
      <li><a href="#" className="footer__link">design different</a></li>
      <li><a href="#" className="footer__link">apply your knowledge</a></li>
      <li><a href="#" className="footer__link">faq</a></li>
     </ul>
     
     </div>
     <div className="footer__middle">
      <p className="footer__item-1">
        Our Local Campus center: Kilometer 7, 
        Enugu/Port<br/> Harcourt, Expressway, 
        Centenary City, Enugu.<br/>  Nigeria
      </p>
      <p className="underline touch"><a href="#">get in touch</a></p>
     </div>

     <div className="footer__right">
      <div className="footer__img"></div>
        <div className="footer__remark">
          <p className="footer__item-2">
            Learnable is proud to be <br/> 
            a collaborative effort of <br/>  
            all the arms of our <br/>  product team
          </p>
          <p className="underline studio"><a href="#">head to devstudio</a></p>
        </div>
     </div>
    </div>
    <div className="footer__end">

     <ul className="footer__icons">
      <li className="center"><a href="#"></a></li>
      <li className="center"><a href="#"></a></li>
      <li className="center"><a href="#"></a></li>
      <li className="center"><a href="#"></a></li>
      <li className="center"><a href="#"></a></li>
      <li className="center"><a href="#"></a></li>
     </ul>

     <div className="footer__copyright">
      <p className="copy--right">&copy; Genesys 2020 <span className="ps">Privacy Statement</span></p>
    </div>
    </div>
  </footer>
  </>
 )
}

export default Homepage