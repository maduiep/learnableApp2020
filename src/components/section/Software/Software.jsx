import React from 'react';

const Software = () => {
    return (
        <>
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
                    <div className="software__content-1">
                        <h1 className="h1-styles">Program with <br/> JavaScript</h1>
                    </div>
                    <div className="software__content-2">
                        <h1 className="h1-styles">Version Control <br/> with Git</h1>
                    </div>
                    <div className="software__content-3">
                        <h1 className="h1-styles">Web<br/> Development<br/> with React</h1>
                    </div>
                    <div className="software__content-4">
                        <h1 className="h1-styles">Building APIs <br/> with NodeJS</h1>
                    </div>
                    <div className="software__content-5">
                        <h1 className="h1-styles">Managing Data with <br/> MongoDB</h1>
                    </div>
                    <div className="software__content-6">
                        <h1 className="h1-styles">Deploying with <br/> Heroku</h1>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Software;
