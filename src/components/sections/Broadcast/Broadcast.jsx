import React from 'react';
import {Link} from "react-router-dom";

const Broadcast = () => {
    return (
        <>
        <section className="learnable__broadcast">
            <div className="broadcast--text">
                <p><Link to="/">Mentioned in</Link></p>
            </div>  
            <div className="broadcast--image-icon-1"></div>
            <div className="broadcast--image-icon-2"></div>
            <div className="broadcast--image-icon-3"></div>
            <div className="broadcast--image-icon-4"></div>
            <div className="broadcast--image-icon-5"></div>
        </section>
        </>
    );
};

export default Broadcast;
