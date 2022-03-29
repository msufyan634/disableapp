import React from 'react'
import './random.scss'
import trades from '../../../Assets/Trades/trade_1.png'
import { useState,useCallback } from 'react'
import { GetUriImage } from '../../../hooks/MintAndPrice'
import Loader from '../../../Loader/Loader'
const Random = () => {
    const [loader,setLoader]=useState(false);
    const [tokenId, setTokenId] = useState('');
     const {uri}=GetUriImage(tokenId)

    //  console.log("uri",uri)
     const [nftImage, setNftImage] = useState('');
     
     
     const GetNFT = useCallback(async (e) => {
         try {
             setLoader(true)
             
             const p = await uri();
             console.log("p",p)
             if(uri){
                setLoader(false)
             }
             setNftImage(p);
            }
            catch (err) {
                return false;
            }
        }, [uri])
    return (
        <div classNameName="random">
        <div className="container">
            <div className="row custom_margin no-gutters shadow-lg">
                <div className="col-md-6 d-md-block">
                 <img src={nftImage?nftImage:trades}  className="img-fluid random_img" alt=""/>
                </div>
                <div className="col-md-6 bg-white p-5">
                    <h3 className="pb-3 text-center">View Your Minted NFT's</h3>
                    <div className="form-style">
                        <form>
                            {loader?
                            <Loader/>:
                            <div>
                            <div className="form-group pb-3">
                            <input type="number" value={tokenId} onChange={(e) => setTokenId(e.target.value)}
                            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                            placeholder="Enter Token ID Number To See The NFT" />
                                {/* <input type="number" placeholder="Enter the ID" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> */}
                            </div>
                            <div className="pb-2">
                                <button type="button" onClick={GetNFT} className="btn btn-dark w-100 font-weight-bold mt-2">Get NFT</button>
                            </div>
                            </div>}
                        </form>
                       
                    </div>
                </div>
            </div>
        </div>
                    </div>
    )
}

export default Random
