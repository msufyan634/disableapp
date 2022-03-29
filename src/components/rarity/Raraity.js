/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './raraity.scss';

// import { useWeb3React } from '@web3-react/core'
// import Mint from '../../hooks/MintAndPrice';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Navbar from '../landing/header/Navbar'
// import Banner from '../landing/main-banner/Banner';
import MilitaryImages, { PoliticiansImages, SportsImages, KingQueen, KiwiK300, } from '../AllTypeImages';
import TradesImages from '../TradesImages';
import CommonImages from '../CommonImages';
import AristocratsThugsImages from '../AristocratsThugsImages';
const Raraity = () => {

    // const { account } = useWeb3React();
    // const { Approve } = useApprove()
    // const [minted, setMinted] = useState(false);
    // const [inProcess, setInProcess] = useState(false);


    // const appoved = async (e) => {
    //     if (account) {
    //         try {
    //             e.preventDefault();
    //             setInProcess(true)
    //             const tx = await Approve()
    //             if (tx) {
    //                 toast.success('Successfully Approved', {
    //                     position: "top-right",
    //                     autoClose: 2000,
    //                 });
    //                 setMinted(true)
    //             }
    //             setInProcess(false)
    //             window.$("#exampleModalLong2").modal('hide');

    //         }
    //         catch (err) {
    //             console.log(err)
    //             toast.error(err.message, {
    //                 position: "top-right",
    //                 autoClose: 2000,
    //             });
    //             setInProcess(false)
    //         }
    //     }
    //     else {
    //         window.$("#exampleModalLong2").modal('hide');
    //         toast.error('Please Connect to wallet', {
    //             position: "top-right",
    //             autoClose: 2000,
    //         });
    //     }
    // }
    return (
        <>

            <section className="main-collection">
            </section>
            <section className="main-mint ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="inner-content text-center">
                                <h1 className="">Category</h1>
                                <p className="ptb20">There are 9 total traits within The KIWI Collection. <br />All traits and their rarity percentage can be viewed here.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row ptb">
                        <div className="col-sm-3">
                            <div className="inner-content">
                                <div className="inner-tile">
                                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">ALL</a>
                                        <a className="nav-link" id="v-pills-types-tab" data-toggle="pill" href="#v-pills-types" role="tab" aria-controls="v-pills-types" aria-selected="false">Aristocrats & Thugs</a>
                                        <a className="nav-link" id="v-pills-background-tab" data-toggle="pill" href="#v-pills-background" role="tab" aria-controls="v-pills-background" aria-selected="false">COMMON</a>
                                        <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">KING & QUEEN</a>
                                        <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">KIWI K-300</a>
                                        <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">MILITARY</a>
                                        <a className="nav-link" id="v-pills-glasses-tab" data-toggle="pill" href="#v-pills-glasses" role="tab" aria-controls="v-pills-glasses" aria-selected="false">POLITICIONS</a>
                                        <a className="nav-link" id="v-pills-label-tab" data-toggle="pill" href="#v-pills-label" role="tab" aria-controls="v-pills-label" aria-selected="false">SPORTS</a>
                                        <a className="nav-link" id="v-pills-watch-tab" data-toggle="pill" href="#v-pills-watch" role="tab" aria-controls="v-pills-watch" aria-selected="false">TEAM TOKEN & PERSONAL</a>
                                        <a className="nav-link" id="v-pills-trump-tab" data-toggle="pill" href="#v-pills-trump" role="tab" aria-controls="v-pills-trump" aria-selected="false">TRADES</a>
                                        {/* <a className="nav-link" id="v-pills-desk-tab" data-toggle="pill" href="#v-pills-desk" role="tab" aria-controls="v-pills-desk" aria-selected="false">Aristocrats & Thugs</a> */}
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="tab-content" id="v-pills-tabContent">

                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <div className="row">
                                    {KingQueen.map((elem) => {
                                            const { src } = elem;
                                            return (

                                                <div className="col-sm-4">
                                                    <div className="inner-tile">
                                                        <img src={src} alt="" className="img-fluid border-img" />
                                                        <h5 className="purple">hat2024</h5>
                                                        <p>13.86% have this trait</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        {CommonImages.map((elem) => {
                                            const { src } = elem;
                                            return (
                                                <div className="col-sm-4">
                                                    <div className="inner-tile">
                                                        <img src={src} alt="" className="img-fluid border-img" />
                                                        <h5 className="purple">BackgroundOvalOffice</h5>
                                                        <p>16.67% have this trait</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        {/* {AristocratsThugsImages.map((elem) => {
                                            const { src } = elem;
                                            return (

                                                <div className="col-sm-4">
                                                    <div className="inner-tile">
                                                        <img src={src} alt="" className="img-fluid border-img" />
                                                        <h5 className="purple">bomberJacket</h5>
                                                        <p>5.75% have this trait</p>
                                                    </div>
                                                </div>
                                            )
                                        })} */}
                                         {KiwiK300.map((elem) => {
                                            const { src } = elem;
                                            return (
                                                <div className="col-sm-4">
                                                    <div className="inner-tile">
                                                        <img src={src} alt="" className="img-fluid border-img" />
                                                        <h5 className="purple">blueShirt</h5>
                                                        <p>13.35% have this trait</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        {MilitaryImages.map((elem) => {
                                            const { src } = elem
                                            return (
                                                <div className="col-sm-4">
                                                    <div className="inner-tile">
                                                        <img src={src} alt="" className="img-fluid border-img" />
                                                        <h5 className="purple">americanFlagTie</h5>
                                                        <p>0.86% have this trait</p>

                                                    </div>
                                                </div>
                                            )
                                        })}
                                        {/* {PoliticiansImages.map((elem) => {
                                            const { src } = elem;
                                            return (
                                                <div className="col-sm-4">
                                                    <div className="inner-tile">

                                                        <img src={src} alt="" className="img-fluid border-img" />
                                                        <h5 className="purple">glassesAmerica</h5>
                                                        <p>10.00% have this trait</p>

                                                    </div>
                                                </div>
                                            )
                                        })} */}
                                         {SportsImages.map((elem) => {
                                            const { src } = elem
                                            return (

                                                <div className="col-sm-4">
                                                    <div className="inner-tile">

                                                        <img src={src} alt="" className="img-fluid border-img" />
                                                        <h5 className="purple">lapel2024</h5>
                                                        <p>20.82% have this trait</p>

                                                    </div>
                                                </div>
                                            )
                                        })}
                                           {/* {TradesImages.map((elem) => {
                                            const { src } = elem;
                                            return (
                                                <div className="col-sm-4">
                                                    <div className="inner-tile">
                                                        <img src={src} alt="" className="img-fluid border-img" />
                                                        <h5 className="purple">trumpFamilyBarron</h5>
                                                        <p>0.22% have this trait</p>
                                                    </div>
                                                </div>

                                            )
                                        })} */}
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="v-pills-background" role="tabpanel" aria-labelledby="v-pills-background-tab">
                                    <div className="row">
                                        {CommonImages.map((elem) => {
                                            const { src } = elem;
                                            return (
                                                <div className="col-sm-4">
                                                    <div className="inner-tile">
                                                        <img src={src} alt="" className="img-fluid border-img" />
                                                        <h5 className="purple">BackgroundOvalOffice</h5>
                                                        <p>16.67% have this trait</p>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>
                                </div>

                                <div className="tab-pane fade" id="v-pills-types" role="tabpanel" aria-labelledby="v-pills-types-tab">
                                    <div className="row">
                                        {AristocratsThugsImages.map((elem) => {
                                            const { src } = elem;
                                            return (
                                                <div className="col-sm-4">
                                                    <div className="inner-tile">
                                                        <img src={src} alt="" className="img-fluid border-img" />
                                                        <h5 className="purple">bomberJacket</h5>
                                                        <p>5.75% have this trait</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <div className="row">
                                        {KingQueen.map((elem) => {
                                            const { src } = elem;
                                            return (

                                                <div className="col-sm-4">
                                                    <div className="inner-tile">
                                                        <img src={src} alt="" className="img-fluid border-img" />
                                                        <h5 className="purple">hat2024</h5>
                                                        <p>13.86% have this trait</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                
                                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                    <div className="row">
                                        {KiwiK300.map((elem) => {
                                            const { src } = elem;
                                            return (
                                                <div className="col-sm-4">
                                                    <div className="inner-tile">
                                                        <img src={src} alt="" className="img-fluid border-img" />
                                                        <h5 className="purple">blueShirt</h5>
                                                        <p>13.35% have this trait</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                    <div className="row">
                                        {MilitaryImages.map((elem) => {
                                            const { src } = elem
                                            return (
                                                <div className="col-sm-4">
                                                    <div className="inner-tile">
                                                        <img src={src} alt="" className="img-fluid border-img" />
                                                        <h5 className="purple">americanFlagTie</h5>
                                                        <p>0.86% have this trait</p>

                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="v-pills-glasses" role="tabpanel" aria-labelledby="v-pills-glasses-tab">
                                    <div className="row">
                                        {PoliticiansImages.map((elem) => {
                                            const { src } = elem;
                                            return (
                                                <div className="col-sm-4">
                                                    <div className="inner-tile">

                                                        <img src={src} alt="" className="img-fluid border-img" />
                                                        <h5 className="purple">glassesAmerica</h5>
                                                        <p>10.00% have this trait</p>

                                                    </div>
                                                </div>                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="v-pills-label" role="tabpanel" aria-labelledby="v-pills-label-tab">
                                    <div className="row">
                                        {SportsImages.map((elem) => {
                                            const { src } = elem
                                            return (

                                                <div className="col-sm-4">
                                                    <div className="inner-tile">

                                                        <img src={src} alt="" className="img-fluid border-img" />
                                                        <h5 className="purple">lapel2024</h5>
                                                        <p>20.82% have this trait</p>

                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="v-pills-watch" role="tabpanel" aria-labelledby="v-pills-watch-tab">
                                </div>
                                <div className="tab-pane fade" id="v-pills-trump" role="tabpanel" aria-labelledby="v-pills-trump-tab">
                                    <div className="row">
                                        {TradesImages.map((elem) => {
                                            const { src } = elem;
                                            return (
                                                <div className="col-sm-4">
                                                    <div className="inner-tile">
                                                        <img src={src} alt="" className="img-fluid border-img" />
                                                        <h5 className="purple">trumpFamilyBarron</h5>
                                                        <p>0.22% have this trait</p>
                                                    </div>
                                                </div>

                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-desk" role="tabpanel" aria-labelledby="v-pills-desk-tab">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Raraity;
