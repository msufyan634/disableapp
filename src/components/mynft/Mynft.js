import React from 'react';
import './mynft.scss';
import { useWeb3React } from '@web3-react/core'

import {useNftData} from './MyNftData';

const Mynft = () => {
    const { account } = useWeb3React();
    const MyNftData = useNftData(account);
    return (
        <>
            <section className="main-mynft ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="inner-content text-center">
                                <h1 className="">MY NFTs</h1>
                                <p className="ptb20">Here's your current digital art collection. When you buy, trade and mint NFTs, they'll be stored here waiting for you to show them off!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row ptb20">
                        {MyNftData.map((elem,index)=>{
                            let data = JSON.parse(elem.metadata)
                            let image = data.image
                            return(
                        <div className="col-sm-3" key={index}>
                            <div className="inner-tile text-center">
                                <a className="" href="/">
                                    <img src={`https://gateway.ipfs.io/ipfs/${image.replace('ipfs://' , '')}`} alt="" className="img-fluid border-img" />
                                    <h6>President Trump in {data.attributes[0].value} Wearing {data.attributes[5].value}</h6>
                                </a>
                            </div>
                        </div>
                            )
                        })}
                    </div>
                    {/* <div className="row ptb20">
                        <div className="col-sm-12">
                            <div className="text-center">
                                <a className="btn-common" href="/">Load More</a>
                            </div>
                        </div>
                        
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default Mynft;
