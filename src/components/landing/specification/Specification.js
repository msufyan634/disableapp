import React,{useEffect,useState} from 'react';
import './speci.scss';
const Specification = () => {

    return (
        <>
        <section className="main-speci">
            <div className="container">
                <div className="row">
                <h1>Specifications</h1>
                    <div className="col-sm-6">
                        <div className="inner-img text-center ptb20">
                            {/* <img src={currentimg} alt=""  className="img-fluid"/> */}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="inner-content ptb20">
                            {/* <h6 className="red">ABOUT US</h6> */}
                            <h1 className="title">DISABLED APES  NFT</h1>
                            <p>Welcome to the Land of the Digital Cloud! The Digital Cloud.</p>
                            <p className="ptb20 text-center">The Digi-Verse is split into numerous realms. The first realm that will be released will be the Bush realm, the home of the Digi-Kiwi. 160 unique Digi Kiwi will be available for purchase on the Fantom Network, split into 8 different ranks! </p>
                            {/* <p className="">Our vow as a team is to support this project as we grow through different series and additions to the Digi-Verse. We aim to release different editions and series as we build this universe, or Digi-Verse! </p>      */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Specification;
