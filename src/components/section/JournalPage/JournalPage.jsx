/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const JournalPage = () => {
 return (
  <>
   <section className="learnable__JournalPage">
    <div className="Journal__head">
     <h1>Journal</h1>
     <button>categories</button>
    </div>

    <div className="JournalPage__inspiration">
     <div className="inspiration__image"></div>
     <div className="inspiration__text">
      <h5>Inspiration</h5>
      <h1>
       Learn Design Thinking <br/> 
       like a Pro and Build <br/>
       Projects that People <br/>
       will care about
      </h1>
      <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit <br/> 
       sapien arcu vitae orci at molestie. Pharetra quisque donec <br/> 
       accumsan rhoncus risus. Urna magna turpis duis imperdiet <br/> 
       elit, et, hendrerit viverra risus. Vulputate euismod commodo <br/> 
       donec tincidunt et, aliquam. Eget scelerisque netus habitant <br/>
       dui porttitor cursus. Ipsum sem ut tortor ac ullamcorper. <br/>
       Lacus.
      </p>
      <div className="inspiration__sm">
       <img src="/img/sm.png" alt="smal image"/>
       <p>David Mong, Apr 9, 2020</p>
      </div>
     </div>
    </div>
    <div className="journal__content">
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
    </div>
    <div className="Journal__down-btn">
     <button>load more</button>
    </div>
   </section>
  </>
 )
}

export default JournalPage