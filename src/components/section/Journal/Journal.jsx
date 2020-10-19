import React from 'react';
import { Link } from 'react-router-dom';

const Journal = () => {
    return (
        <>
            <section className="learnable__journal">
                <div className="journal--text">
                    <h1>Journal</h1>
                    <p><Link to="/">view all</Link></p>
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
        </>
    );
};

export default Journal;
