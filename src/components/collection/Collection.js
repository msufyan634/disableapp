/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './collection.scss';

import { useWeb3React } from '@web3-react/core'
import Mint from '../../hooks/MintAndPrice';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTotalSupply } from '../../hooks/dataFetcher'

const Collection = () => {
    const totalSupply = useTotalSupply()
    const { account } = useWeb3React();
    const { Approve } = Mint()
    const [minted, setMinted] = useState(false);
    const [inProcess, setInProcess] = useState(false);  


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
                window.$("#exampleModalLong2").modal('hide');

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
            window.$("#exampleModalLong2").modal('hide');
            toast.error('Please Connect to wallet', {
                position: "top-right",
                autoClose: 2000,
            });
        }
    }
    console.log(totalSupply)
    const RecentlyMinted = totalSupply.map((elem) => {
        return (
                <div className="col-sm-3">
                    <div className="inner-tile text-center">
                        <img src={`https://gateway.ipfs.io/ipfs/${elem.image.replace('ipfs://' , '')}`} alt="" className="img-fluid border-img" />
                        <h6>President Trump in {elem.attributes[0].value} Wearing {elem.attributes[5].value} </h6>
                    </div>
                </div>
        )
    });


    return (
        <>
            <section className="main-collection ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="inner-content">
                                <h6 className="white">Welcome to OpenCanvas</h6>
                                <h1 className="white">Mint your NFT today before we sell out!</h1>
                                <p className="ptb20 white">Connect your wallet using the OpenCanvas drop down section. Now click on the purchase button and confirm your payment of 0.25 bnb. This starts the minting process and may take up to 2 minutes to complete. Do not navigate away from the page during the minting process! One more wallet popup should appear, and once you have confirmed this transaction, you will receive your DJT NFT!</p>
                                <a className="btn-white" type="button" data-toggle="modal" data-target="#exampleModalLong2">MINT YOUR NFT</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="main-mint ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="inner-content text-center">
                                <h1 className="">Recently Minted NFTs</h1>
                                <p className="ptb20">Once all of The DJT Collection has been minted, it will not be possible to purchase them here, but you will still be able to buy and trade them on our marketplace.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row ptb">
                        <div className="col-sm-12">
                            <div className="inner-content">
                                <div className="row">
                                    {RecentlyMinted}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Collection;
