import React from 'react';
import './features.scss';
import OwlCarousel from 'react-owl-carousel';
import king from '../../../Assets/King & Queen/king_1.png'
const Features = () => {
    const owl_option = {

        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            360: {
                items: 1,
                nav: true,
            },
            375: {
                items: 1,
                nav: true,
                stagePadding: 50,
            },
            600: {
                items: 1,
                nav: true,
                stagePadding: 50,
            },
            800: {
                items: 1,
                stagePadding: 50,
            },
            1000: {
                items: 1,
                stagePadding: 50,
            },
            1200: {
                items: 1,
                stagePadding: 50,
            }
        },
    };
    return (
        <>
        <section className="main-features ptb">
        <OwlCarousel className="slider-items owl-carousel ltf-owl" autoplaySpeed={5000}  {...owl_option}>
            <div className="main">
             <img src={king} />   
            </div >
            <div className="main">
             <img src={king} />   
            </div>
            <div className="main">
             <img src={king} />   
            </div>
            <div className="main">
             <img src={king} />   
            </div>
            


            </OwlCarousel>
            {/* <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="inner-content text-center ptb20">
                            <h6 className="white">Features</h6>
                            <h1 className="white">Key elements of opencanvas</h1>
                            <p className="ptb20 white">OpenCanvas is a product of The Wise Ones and will be supporting causes close to the team</p>        
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-3">
                        <div className="inner-tile">
                            <img src="\opencanvas-assets\landing-page\features\features-icon-one.svg"  alt="" className="img-fluid ptb20"/>
                            <h3>Royalties</h3>    
                            <p className="ptb20">20% of each collection created by the OpenCanvas team will go towards buying and burning Real Trump Tokens until a maximum BUSD amount of $1,000,000 has been reached. </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-3">
                        <div className="inner-tile">
                            <img src="\opencanvas-assets\landing-page\features\features-icon-two.svg" alt="" className="img-fluid ptb20"/>
                            <h3>Trading</h3>    
                            <p className="ptb20">Trade your NFTs on OpenCanvas. List your NFTs and accept/reject offers, negotiate trades, and buy more NFTs. </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-3">
                        <div className="inner-tile">
                            <img src="\opencanvas-assets\landing-page\features\features-icon-three.svg" alt="" className="img-fluid ptb20"/>
                            <h3>Swapping your NFT</h3>    
                            <p className="ptb20">Swap your favourite NFTs with others uses to bolster your art collection.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-3">
                        <div className="inner-tile">
                            <img src="\opencanvas-assets\landing-page\features\features-icon-four.svg" alt="" className="img-fluid ptb20"/>
                            <h3>Minting</h3>    
                            <p className="ptb20">Coming soon: You’ll be able to mint your very own NFTs, whether that’s a single image or multilayer collection. Have some fun with it and get creative! </p>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    </>
    )
}

export default Features;
