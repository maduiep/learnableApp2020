/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../styles/Developer.css'

const Developer = () => {
 return (
  <>
    <header className="genesys__header">
    <div className="genesys__logo">
     <img className="logo" src="/img/logo.png" all="Genesys Logo"/>
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
  
   <nav className="learnable__navbar">
   </nav>

   <main>
    <section className="learnable__commingsoon">
      <div className="comingsoon__content--1">
        <h1>Coming soon: Learnable ‘20</h1>
        <p>
          We've started taking in applications for the next batch of learnable <br/> 
          interns. Applications are on till the 21st of Febuary
        </p>
      </div>
      <div className="comingsoon__content--2">
        <p>
          Click link to download...
        </p>
         <h1>Learnable ‘20 Brochure</h1>
      </div>
    </section>

    <section className="learnable__subscribe">
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

export default Developer