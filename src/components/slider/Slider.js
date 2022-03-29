import React from 'react';
import './slider.scss';
import OwlCarousel from 'react-owl-carousel';
// import { SportsImages } from '../AllTypeImages';
import MixArray from '../MixArray';
const Slider = () => {

    const owl_option = {
        nav: true,
        dots: false,
        dotsEach: false,
        loop: true,
        autoplay: false,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        responsive: {
            0: {
                items: 2,
                stagePadding: -100,
                margin: 15,
            },
            400: {
                items: 2,
                stagePadding: -100,
                margin: 15,
            },
            600: {
                items: 2,
                stagePadding: -100,
                margin: 15,
            },
            700: {
                items: 2,
                margin: 40,

            },
            1000: {
                items: 3,
                margin: 40,

            },
            1200: {
                items: 4,
                margin: 40,

            }
        },
    };


    return (
        <>
            <div className="dark">
                <section className="hotbid ptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 P-0">
                                <div className="inner-content ">
                                    <div className="main-seller-head">
                                        <h2 className="grey">DIGI-KIWIS</h2>
                                    </div>
                                    <div className="first-second">
                                        <OwlCarousel className="slider-items owl-carousel ltf-owl" autoplaySpeed={5000}  {...owl_option}>
                                            {MixArray.map((elem) => {
                                                const { src } = elem;
                                                return (
                                                    <div className="item">
                                                        <div className="card card-width">
                                                            <div className="upper-divs-triple">
                                                                <img src={src} className="max-width-seller" alt=""/>

                                                            </div>
                                                        </div>
                                                    </div>

                                                )
                                            })}
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Slider;
