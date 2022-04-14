/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useCallback } from 'react';
import './banner.scss';
import { useWeb3React } from '@web3-react/core'
import monki from '../../../Assets/monki.png'
import founts from '../../../Assets/founts.png'
import Mint, { PricePerNFT, CurrentlyMintedNfts } from '../../../hooks/MintAndPrice';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Modal, ModalHeader, ModalBody } from "reactstrap";
const Banner = () => {
    const [show, setshow] = useState(false);

    const { account } = useWeb3React();
    const [price, setPrice] = useState();
    const { Approve } = Mint(price)
    const [minted, setMinted] = useState(false);
    const [inProcess, setInProcess] = useState(false);
    const [cMinted, setCurrentlyMinted] = useState()
    const connectWallet = () => {
        setshow(true);
    }
    const appoved = async (e) => {
        if (account) {
            try {
                e.preventDefault();
                setInProcess(true)
                const tx = await Approve()
                if (tx) {
                    toast.success('Successfully Approved', {
                        position: "top-right",
                        autoClose: 2000,
                    });
                    setMinted(true)
                }
                setInProcess(false)
                window.$("#hhhhh").modal('hide');

            }
            catch (err) {
                console.log(err)
                toast.error(err.message, {
                    position: "top-right",
                    autoClose: 2000,
                });
                setInProcess(false)
            }
        }
        else {
            window.$("#hhh").modal('hide');
            toast.error('Please Connect to wallet', {
                position: "top-right",
                autoClose: 2000,
            });
        }
    }
    const { Price } = PricePerNFT();
    const { currentlyMinted } = CurrentlyMintedNfts()
    const NftPrice = useCallback(async (e) => {
        try {
            const p = await Price();
            const m = await currentlyMinted()
            setCurrentlyMinted(m)
            setPrice(p);
        }
        catch (err) {
            return false;
        }
    }, [Price, currentlyMinted])
    const UserMinted = useCallback(async (e) => {
        try {
            const m = await currentlyMinted()
            setCurrentlyMinted(m)
        }
        catch (err) {
            return false;
        }
    }, [currentlyMinted])
    useEffect(() => {
        NftPrice();
        UserMinted()
    })
    //    console.log("price",price)  
    return (
        <>
            <div className="main-banner1">
                <ToastContainer />
                {/* <Navbar /> */}

                <div className='biububuyb'>
                    <div className='container-fluid p-0' >
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <img src="\Assets\header-left.png" alt="" className='img-fluid d-md-block d-none h-100' />
                                <img src="\Assets\header-left-mbil.png" alt="" className='img-fluid d-md-none d-block h-100' />
                            </div>
                            <div className="col-md-6 order-md-1 p-0">
                                <img src="\Assets\header-right.png" alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <img src={monki} width="100%" />
                    </div> */}
                </div>

                <Modal isOpen={show} className="register-modal connect-modal" size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                >
                    <ModalHeader >
                        <button type="button" className="close" data-dismiss="modal" onClick={() => setshow(false)} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </ModalHeader>
                    <ModalBody className="modal-body">
                        <div className="container main-divs">
                            <h3 className="white text-center">MINT YOUR NFT</h3>
                            <div className="for-padding">
                                <ul className="list-inline text-center">
                                    <li className="list-inline-item">
                                        <p className="ptb20 white">MINT YOUR NFT FOR ONLY <strong>{(price) / 10 ** 18} FTM</strong></p>
                                    </li>
                                    <li className="list-inline-item">
                                        <img src="\opencanvas-assets\pop-up\mint-your-nft\fmt.jpeg" style={{ borderRadius: 20 }} width="30px" height="30px" className="img-fluid" alt="" />
                                    </li>
                                </ul>

                                <div className="row">
                                    <div className="col-sm-12 text-center">
                                        <button className="btn-common" type="button" onClick={appoved}>Mint</button>

                                        <div className="ptb20">
                                            <a className="white" href="/">By connecting, I accept Kiwi's Terms of Service</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {inProcess ?
                                <div>
                                    <h3 className="white text-center">MINTING YOUR NFT...</h3>
                                    <div className="for-padding">
                                        <ul className="list-inline text-center">

                                            <li className="list-inline-item">
                                                <img src="\opencanvas-assets\pop-up\mint-your-nft\fmt.jpeg" style={{ borderRadius: 20 }} width="30px" height="30px" className="img-fluid" alt="" />
                                            </li>
                                        </ul>
                                        <div className="row">
                                            <div className="col-sm-12 text-center">
                                                <div className="ptb20">
                                                    <h4 className="white">CONFIRM TRANSACTION FROM YOUR WALLET</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> : null
                            }
                            {minted ?
                                <div>
                                    <h3 className="white text-center">YAYYY!</h3>
                                    <div className="for-padding">
                                        <div className="row">
                                            <div className="col-sm-12 text-center">
                                                <div className="ptb20">
                                                    <h4 className="white">YOUR NFT HAS BEEN MINTED</h4>
                                                    {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p> */}
                                                </div>
                                                {/* <button className="btn-common" type="button" onClick={viewNFT} >VIEW YOUR NFTS</button> */}
                                                {/* <Link className="btn-common"  to="/" >VIEW YOUR NFTS</Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </div> : null
                            }
                        </div>
                    </ModalBody>
                </Modal>


            </div>
        </>
    )
}

export default Banner;

