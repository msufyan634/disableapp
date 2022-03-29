import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import useWeb3 from './useWeb3';
import environment from '../utils/Environment';
import axios from 'axios';
import { getBep20Contract } from '../utils/contractHelpers'

export const Mint = (price) => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.YfethContractAddress;
    const contract = getBep20Contract(tokenAddress, web3)
    const ApproveTokens = useCallback(async () => {
            const approved = await contract.methods.mint(account).send({ from: account, value: price  })
                .on('transactionHash', (tx) => { return tx.transactionHash });
            return approved    
    }, [account, contract,price])

    return { Approve: ApproveTokens }
}



export const PricePerNFT= () => {
    const web3 = useWeb3();
    const tokenAddress = environment.YfethContractAddress;
    const contract = getBep20Contract(tokenAddress, web3)
    const NftPrice = useCallback(async () => {
        const pricePerNFT= await contract.methods.price().call();
        return pricePerNFT
    },[contract])
    return { Price: NftPrice }
}

export const GetUriImage= (tokenId) => {
    const web3 = useWeb3();
    const tokenAddress = environment.YfethContractAddress;
    const contract = getBep20Contract(tokenAddress, web3)
    const ImageUri = useCallback(async () => {
        const result = await contract.methods.tokenURI(tokenId).call();
        const uriMetadata = await axios.get(result);
        const imageUri = uriMetadata.data.image;
         return imageUri;
       
    },[contract,tokenId])
    return { uri: ImageUri }
}

export const CurrentlyMintedNfts= () => {
    const web3 = useWeb3();
    const tokenAddress = environment.YfethContractAddress;
    const contract = getBep20Contract(tokenAddress, web3)
    const CurrentlyMinted = useCallback(async () => {
        const mintNfts= await contract.methods.totalSupply().call();
        return mintNfts
    },[contract])
    return {currentlyMinted : CurrentlyMinted }
}

export default Mint; 