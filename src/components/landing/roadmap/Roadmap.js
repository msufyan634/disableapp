import React from 'react';
import './roadmap.scss';
const Roadmap = () => {
    return (
        <>
        <section className="main-roadmap ptb">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="inner-content text-center">
                            <h6 className="red">OUR PLANS</h6>
                            <h1 className="">Opencanvas Roadmap</h1>
                            <p className="ptb20">OpenCanvas as it is right now is a great
                             introduction to the world of NFTs, but as we mature, we want 
                             to develop OpenCanvas into a leading player in the NFT world. 
                             Here is how we’re going to do that.</p>
                        </div>
                    </div>
                </div>
                <div className="row ptb20">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <div className="inner-content text-center">
                        <img src="\opencanvas-assets\landing-page\roadmap\roadmap.svg" alt="" className="img-fluid " />
                        </div>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Roadmap;
