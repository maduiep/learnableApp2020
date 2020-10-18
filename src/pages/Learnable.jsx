/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../styles/Learnable.css'

const Learnable = () => {
 return (
  <>
   <header className="genesys__header">
    <div className="genesys__logo">
     <img className="logo" src="/img/logo.png" all="Genesys Logo"/>
    </div>
   
     <nav className="genesys__navbar">
      <ul className="navbar__items--1">
       <li><a href="#">learnable</a></li>
       <li><a href="#">agora</a></li>
       <li><a href="#">startzone</a></li>
       <li><a href="#">about</a></li>
       <li><a href="#">contact</a></li>
      </ul>
     </nav>

     <div className="genesys__item--right">
      <p className="build">build a product with &nbsp; <span><a href="#" className="btn">devstudio</a></span></p>
     </div>
   </header>
  
   <nav className="learnable__navbar">
    <li><a href="#">home</a></li>
    <li><a href="#">software developers</a></li>
    <li><a href="#">product designers</a></li>
    <li><a href="#">apply</a></li>
    <li><a href="#">journal</a></li>
    <li><a href="#">faq</a></li>
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
    <section className="learnable__everything"></section>
    <section></section>
    <section className="learnable__gathering"></section>

    <section className="learnable__making">
      <div className="making--text-content">
        <h1 className="making--main-text">We Make People Great</h1>
        <p className="making-sub-text">
          As part of our calculated efforts to contribute to the emerging <br/> 
          knowledge and skills driven economy of Nigeria, Learnable is a <br/> 
          6-month product development training program with an emphasis <br/> 
          on software programming and product design. It is for outstanding <br/> 
          young individuals who are passionate about building a career in the software industry. 
          <br/> <br/> 
          We primarily educate and groom software developers and <br/> 
          designers, preparing them for the industry. 
        </p>
      </div>
      <div className="making--img"></div>
    </section>

    <section className="learnable__experience">
      <div className="experience--img"></div>
      <div className="experience--text-content">
        <h1 className="experience--main-text">An Unusual Learning Experience</h1>
        <p className="experience-sub-text">
          Our culture are the unspoken things that make us who we are at <br/> 
          Genesys. To become one of us, 
          you need to be like the rest of us. 
          <br/> We believe that excellence is a culture, and we are committed to a <br/>  
          philosophy of consistent improvement in everything we do. We are <br/> 
          passionate, candid and we trust in the power of collaboration.
        </p>
      </div>
    </section>

    <section className="learnable__software">
      <div className="software__text">
      <h5>For  Developers</h5>
      <h1>Learn to Build Software <br/> the Right Way</h1>
      <p>
        We love to build stuff. Really awesome stuff. That’s why we<br/> 
        have developed a learning program that will empower you to<br/> 
        create amazing software the right way.
        <br/><br/>
        We believe in learning through experimentation. Our aim is to<br/> 
        nurture and grow bright young minds from the get-go because<br/> 
        that’s how our industry will thrive.
      </p>
      <h4>Learn more</h4>
     </div> 
     
     <div className="software__contents">
        <diV className="software__content-1">
          <h1 className="h1-styles">Program with <br/> JavaScript</h1>
        </diV>
        <diV className="software__content-2">
        <h1 className="h1-styles">Version Control <br/> with Git</h1>
        </diV>
        <diV className="software__content-3">
        <h1 className="h1-styles">Web<br/> Development<br/> with React</h1>
        </diV>
        <diV className="software__content-4">
        <h1 className="h1-styles">Building APIs <br/> with NodeJS</h1>
        </diV>
        <diV className="software__content-5">
        <h1 className="h1-styles">Managing Data with <br/> MongoDB</h1>
        </diV>
        <diV className="software__content-6">
        <h1 className="h1-styles">Deploying with <br/> Heroku</h1>
        </diV>
      </div>
    </section>

    <section className="learnable__design">
      <div className="design__contents">
        <diV className="design__content-1">
          <h1 className="h1-styles">Design User <br/> Interfaces</h1>
        </diV>
        <diV className="design__content-2">
        <h1 className="h1-styles">Craft User <br/> Experiences</h1>
        </diV>
        <diV className="design__content-3">
        <h1 className="h1-styles">Apply Design <br/> Thinking</h1>
        </diV>
        <diV className="design__content-4">
        <h1 className="h1-styles">Build <br/> Information <br/> Architecture</h1>
        </diV>
        <diV className="design__content-5">
        <h1 className="h1-styles">Copy write for <br/> Projects</h1>
        </diV>
        <diV className="design__content-6">
        <h1 className="h1-styles">Brand Products</h1>
        </diV>
      </div>

    <div className="design__text">
      <h5>For  Designers</h5>
      <h1>Design Different</h1>
      <p>
        We love to make things work perfectly. That’s why our design<br/> 
        learning path exposes you to the science of user-oriented<br/> design.
        <br/><br/>
        Design is at the heart of everything we do at Genesys. Right<br/> 
        from the start of the program, you’ll get your hands dirty as you<br/> 
        get practically involved in the world’s most modern design<br/> 
        concepts. At Genesys, we’re building designers who put the<br/> users first.
      </p>
      <h4>Learn more</h4>
     </div>
    </section>

    <section className="learnable__eligible">
      <div className="eligible--text-content">
        <h1 className="eligible--main-text">Who is Eligible?</h1>
        <p className="eligible-sub-text">
          Our culture are the unspoken things that make us who we are at <br/> 
          Genesys. To become one of us, 
          you need to be like the rest of us. 
          <br/> We believe that excellence is a culture, and we are committed to a <br/>  
          philosophy of consistent improvement in everything we do. We are <br/> 
          passionate, candid and we trust in the power of collaboration.
        </p>
      </div>
      <div className="eligible--img"></div>
    </section>

    <section className="learnable__culture">
      <div className="culture--img"></div>
      <div className="culture--text-content">
        <h1 className="culture--main-text">Our Culture</h1>
        <p className="culture-sub-text">
          Our culture are the unspoken things that make us who we are at <br/> 
          Genesys. To become one of us, 
          you need to be like the rest of us. 
          <br/> We believe that excellence is a culture, and we are committed to a <br/>  
          philosophy of consistent improvement in everything we do. We are <br/> 
          passionate, candid and we trust in the power of collaboration.
        </p>
      </div>
    </section>
    <section className="learnable__learning">	
      <div className="learning--text-content">	
        <h1 className="learning--main-text">Learning can be fun…</h1>	
        <p className="learning-sub-text">	
          We believe learning should be a fun experience. For this reason, we <br/> 	
          don’t do all the learning in the classroom.	
          <br/><br/>	
          The Learnable experience can not be complete without the bag of <br/> 	
          fun times which you’ll have. To us, every task is an opportunity to <br/> 	
          have some fun. But we do well to throw in a good number of <br/> 	
          activities to add to this. You will find yourself partaking in a lot of <br/> 	
          healthy activities such as cooking, sports, music, hangouts,<br/> and even random dates.	

          Trust us when we say we know how to have fun.	
        </p>	
      </div>	
      <div className="learning--img">	
        <div className="learninng__img--1"></div>	
        <div className="learninng__img--2"></div>	
        <div className="learninng__img--3"></div>	
        <div className="learninng__img--4"></div>	
        <div className="learninng__img--5"></div>	
        <div className="learninng__img--6"></div>	
        <div className="learninng__img--7"></div>	
        <div className="learninng__img--8"></div>	

        <div className="learninng__img--9"></div>	
        <div className="learninng__img--10"></div>	
        <div className="learninng__img--11"></div>	
        <div className="learninng__img--12"></div>	
        <div className="learninng__img--13"></div>	
        <div className="learninng__img--14"></div>	
        <div className="learninng__img--15"></div>	
        <div className="learninng__img--16"></div>	
      </div>	
    </section>

    <section className="learnable__experts">
      <div className="experts__focus">

        <div className="focus--1">
          <div className="focus--img-1"></div>
          <div className="focus--img-2"></div>
          <div className="focus--img-3"></div>
        </div>
        <div className="focus--text">
          <div className="focus--text-1">
            <h3>Nnamdi</h3>
           <p>Managing Director</p>
          </div>
          <div className="focus--text-2">
           <h3>Ositadinma</h3>
           <p>Learnable Coordinator</p>
          </div>
          <div className="focus--text-3">
            <h3>Idowu</h3>
            <p>Scrum Proffessional</p>
          </div>
        </div>

        <div className="focus--2">
          <div className="focus--img-4"></div>
          <div className="focus--img-5"></div>
          <div className="focus--img-6"></div>
        </div>

        <div className="focus--text">
          <div className="focus--text-4">
            <h3>Ezra</h3>
            <p>Ass. Learnable Coordinator</p>
          </div>
          <div className="focus--text-5">
           <h3>David</h3>
           <p>Design Lead</p>
          </div>
          <div className="focus--text-6">
            <h3>Emmanuel</h3>
            <p>Software Lead</p>
          </div>
        </div>
      </div>
      <div className="experts__text">
        <h1>Learn from the <br/> Experts</h1>
        <p>
          As a learnable intern, you will be learning from the best <br/> 
          software developers and product designers our industry has <br/> 
          to offer. You will spend the first 3 months in the classroom with <br/> 
          industry experts who have a wealth of experience from <br/> 
          developing amazing products for various customers in our <br/> 
          industry.
        </p>
      </div>
    </section>
    
    <section className="learnable__classrooms">	    
      <div className="classrooms--text-content">	
        <h1 className="classrooms--main-text">Learning doesn’t always have <br/> to be in the classroom</h1>	
        <p className="classrooms-sub-text">	
          We have designed other learning activities that aren’t <br/> classroom-based. 	
          You will learn how to be a better person, how to<br/> have good conversations, 	
          how to work better with people and most<br/> importantly, how to lead other people. 	
          Hey! We’ll even teach you<br/> how to run a business during the Learnable Business Sessions.	
        </p>	
      </div>	
      <div className="classrooms--img">	
        <div className="classroom__img--1"></div>	
        <div className="classroom__img--2"></div>	
        <div className="classroom__img--3"></div>	
        <div className="classroom__img--4"></div>	
        <div className="classroom__img--5"></div>	
        <div className="classroom__img--6"></div>	
        <div className="classroom__img--7"></div>	
        <div className="classroom__img--8"></div>	

        <div className="classroom__img--9"></div>	
        <div className="classroom__img--10"></div>	
        <div className="classroom__img--11"></div>	
        <div className="classroom__img--12"></div>	
        <div className="classroom__img--13"></div>	
        <div className="classroom__img--14"></div>	
        <div className="classroom__img--15"></div>	
        <div className="classroom__img--16"></div>	
      </div>	
    </section>

    <section className="learnable__apply">
      <div className="apply--img"></div>
      <div className="apply--text-content">
      <h1 className="apply--main-text">Apply Your Knowledge</h1>
      <p className="apply-sub-text">
        Before you’re done with Learnable, you will apply everything you’ve <br/>
        learned. You’ll be part of a team made up of 2 designers and 4 <br/>
        developers. You’ll get to work alongside the Genesys team on <br/>
        projects and we’ll teach you how “the sauce” is made. By combining <br/>
        technology, design, and great ideas, your team will have the unique <br/>
        opportunity to collaborate with the Genesys team to bring your own <br/>
        concept to life, from the first pen sketches to the final functioning <br/>
        product. You’ll then get to show off your special project to everyone.  
      </p>
      <span><a href="#" className="learn-more">Get Started</a></span>
      </div>
    </section>

    <section className="learnable__faq">
      <h1>FAQ</h1>
    </section>

    <section className="learnable__journal">
      <div className="journal--text">
        <h1>Journal</h1>
        <p><a href="#">view all</a></p>
      </div>

      <div className="journal__card">
        <div className="journal__card--1">
          <div className="card__image--1"></div>
          <h4 className="card__text--1">Inspiration</h4>
          <div className="card__main--text">
            <h1>
              Learn Design Thinking like a <br/>
              Pro and Build <br/> 
              Projects that <br/>
              People will care <br/> 
              about
            </h1>
          </div>
          <p className="card__text--2">David Mong, Apr 9, 2020</p>
        </div>
        <div className="journal__card--2">
         <div className="card__image--2"></div>
         <h4 className="card__text--1">Inspiration</h4>
          <div className="card__main--text">
            <h1>
              Learn Design Thinking like a <br/>
              Pro and Build <br/> 
              Projects that <br/>
              People will care <br/> 
              about
            </h1>
          </div>
          <p className="card__text--2">David Mong, Apr 9, 2020</p>
        </div>
        <div className="journal__card--3">
         <div className="card__image--3"></div>
         <h4 className="card__text--1">Inspiration</h4>
          <div className="card__main--text">
            <h1>
              Learn Design Thinking like a <br/>
              Pro and Build <br/> 
              Projects that <br/>
              People will care <br/> 
              about
            </h1>
          </div>
          <p className="card__text--2">David Mong, Apr 9, 2020</p>
        </div>
        <div className="journal__card--4">
         <div className="card__image--4"></div>
         <h4 className="card__text--1">Inspiration</h4>
          <div className="card__main--text">
            <h1>
              Learn Design Thinking like a <br/>
              Pro and Build <br/> 
              Projects that <br/>
              People will care <br/> 
              about
            </h1>
          </div>
          <p className="card__text--2">David Mong, Apr 9, 2020</p>
        </div>
      </div>
    </section>
    <section className="learnable__broadcast">
      <div className="broadcast--text">
        <p><a href="#">Mentioned in</a></p>
      </div>
      <div className="broadcast--image-icon-1"></div>
      <div className="broadcast--image-icon-2"></div>
      <div className="broadcast--image-icon-3"></div>
      <div className="broadcast--image-icon-4"></div>
      <div className="broadcast--image-icon-5"></div>
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
     <ul className="footer__links">
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

export default Learnable


