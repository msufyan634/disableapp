import React from 'react';
import './tab.scss';
import MilitaryImages, { PoliticiansImages, SportsImages, KingQueen, KiwiK300, } from '../AllTypeImages';
import TradesImages from '../TradesImages';
import CommonImages from '../CommonImages';
import AristocratsThugsImages from '../AristocratsThugsImages';
const Tab = () => {



    return (
        <>
            <div className="dark">
                <section className="Profile-main-section">
                    <div className="container">

                        <div className="col-sm-12 p-0">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 main-paddss">
                                <div className="right-profile-slider">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#all" role="tab" aria-controls="home" aria-selected="true">All</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#common" role="tab" aria-controls="contact" aria-selected="false">Common</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#military" role="tab" aria-controls="contact" aria-selected="false">Military</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#politicians" role="tab" aria-controls="contact" aria-selected="false">Politicians</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#sports" role="tab" aria-controls="followers" aria-selected="false">Sports</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#king" role="tab" aria-controls="collectible" aria-selected="false">King & Queen</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#k300" role="tab" aria-controls="collectible" aria-selected="false">K-300 </a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#Thugs" role="tab" aria-controls="collectible" aria-selected="false">Aristocrats & Thugs</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#trades" role="tab" aria-controls="collectible" aria-selected="false">Trades</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="home-tab">
                                            <div className="row">
                                                {KingQueen.map((elem) => {
                                                    const { src } = elem;
                                                    return (
                                                        <div className="col-xl-3 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src={src} className="max-width-seller " alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                                {KiwiK300.map((elem) => {
                                                    const { src } = elem;
                                                    return (
                                                        <div className="col-xl-3 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src={src} className="max-width-seller " alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                                {MilitaryImages.map((elem) => {
                                                    const { src } = elem
                                                    return (
                                                        <div className="col-xl-3 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src={src} className="max-width-seller " alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>


                                        <div class="tab-pane fade" id="king" role="tabpanel" aria-labelledby="collectible-tab">
                                            <div className="row">
                                                <p className="each_para">The current rulers of the Bush realm are the Digi-Kiwi. A monarchical society, 
                                                    they are known for their tenacity, resourcefulness, and intellect. 
                                                    The King and Queen are the heads of this realm, and rule in a manner 
                                                    that is blind to the needs of their own people- as well as the rest of the 
                                                    creatures that reside in their world. </p>
                                            {KingQueen.map((elem) => {
                                                    const { src } = elem;
                                                    return (
                                                        <div className="col-xl-3 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src={src} className="max-width-seller " alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        <div class="tab-pane fade" id="common" role="tabpanel" aria-labelledby="collectible-tab">
                                            <div className="row">
                                            <p className="each_para">The final group in the Digi-Kiwi society are the commoners.
                                             These Digi-Kiwi are your standard, run of the mill players in society. They go about 
                                             their daily lives with growing anger at the established monarchy and political system. 
                                             Watch out for the commoners, they are tired of how they are being treated.</p>
                                            {CommonImages.map((elem) => {
                                                    const { src } = elem;
                                                    return (
                                                        <div className="col-xl-3 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src={src} className="max-width-seller " alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>


                                        <div class="tab-pane fade" id="military" role="tabpanel" aria-labelledby="collectible-tab">
                                            <div className="row">
                                            <p className="each_para">The military are also another group that should be watched closely. 
                                            Rumours of a coup are starting to become more prevalent, as they seek to right the wrongs of the
                                             current establishment. The Digi-Kiwi have branches in the Army, Navy, Air Force and Space Force. 
                                             Ironic for a flightless bird… good thing they designed mechanical flight!</p>
                                            {MilitaryImages.map((elem) => {
                                                    const { src } = elem;
                                                    return (
                                                        <div className="col-xl-3 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src={src} className="max-width-seller " alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        <div class="tab-pane fade" id="politicians" role="tabpanel" aria-labelledby="collectible-tab">
                                            <div className="row">
                                            <p className="each_para">While there is growing discontent within the Digi-Kiwi society toward their heads of state, 
                                            perhaps the blame truly lies with the seven politicians that were (dubiously) democratically elected to govern in the name of 
                                            the King and Queen. Their arrogance and corruption have led to numerous caricatures in popular media- most notably with their heads removed. </p>
                                            {PoliticiansImages.map((elem) => {
                                                    const { src } = elem;
                                                    return (
                                                        <div className="col-xl-3 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src={src} className="max-width-seller " alt=""/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        
                                        <div class="tab-pane fade" id="sports" role="tabpanel" aria-labelledby="collectible-tab">
                                            <div className="row">
                                            <p className="each_para">When the Digi-Kiwi are able to take a break from corruption and political issues, 
                                            they can enjoy their sports teams. Digi-Kiwi are well known for their sporting ability throughout the Digi-Verse.
                                             Their fiercest rivals are the Digi-Snakes, particularly after what happened in the Final of the Digi-Verse 
                                             Tennis Grand Slam in 2004… </p>
                                            {SportsImages.map((elem) => {
                                                    const { src } = elem;
                                                    return (
                                                        <div className="col-xl-3 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src={src} className="max-width-seller " alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        <div class="tab-pane fade" id="k300" role="tabpanel" aria-labelledby="collectible-tab">
                                            <div className="row">
                                            <p className="each_para">K-300 is [REDACTED] from the year [REDACTED]. Hellbent on seeking revenge for what the [REDACTED] 
                                            did to his kind, he will stop at nothing. </p>
                                            {KiwiK300.map((elem) => {
                                                    const { src } = elem;
                                                    return (
                                                        <div className="col-xl-3 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src={src} className="max-width-seller " alt=""/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="Thugs" role="tabpanel" aria-labelledby="collectible-tab">
                                            <div className="row">
                                            <p className="each_para">There is a noticeable social divide between the Digi-Kiwi of the realm. 
                                            On one side of the spectrum there are Aristocrats that are very coy with the rulers of the realm. 
                                            The other side of the spectrum are, well, Thugs. Thugs who make a living from the harsh underbelly of 
                                            society. Whose side are you on? </p>
                                            {AristocratsThugsImages.map((elem) => {
                                                    const { src } = elem;
                                                    return (
                                                        <div className="col-xl-3 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src={src} className="max-width-seller " alt=""/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="trades" role="tabpanel" aria-labelledby="collectible-tab">
                                            <div className="row">
                                            <p className="each_para">In the middle of this are the hard working Trades Kiwi. These Digi-Kiwi work normal jobs, 
                                            including medical professionals, teachers, and more. The least angry group within the Bush realm, but have their 
                                            goals set on moving to the Aristocrat rank. </p>
                                            {TradesImages.map((elem) => {
                                                    const { src } = elem;
                                                    return (
                                                        <div className="col-xl-3 col-lg-6 col-md-6">
                                                            <div className="item">
                                                                <div className="card card-width">
                                                                    <div className="upper-divs-triple">
                                                                        <img src={src} className="max-width-seller " alt=""/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
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

export default Tab;