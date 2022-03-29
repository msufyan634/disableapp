/* eslint-disable react-hooks/exhaustive-deps */
import Moralis from 'moralis';
import { useEffect, useState } from 'react'
import environment from '../../utils/Environment';
Moralis.initialize("QLCHZsvupbbhxxCMP6PV6v6TvQ9lsTMfWbjUHeFU", "", "Yf2RLEaZ97z8XDpY7jE13WSUWcAyejDLYsJ5MKu9");
Moralis.serverURL = "https://1acfrm1phsj4.moralisweb3.com:2053/server";


// Moralis.initialize("xWGcohCwfq5nczHTdpBj50o6bEDZ10NbZVEWhSWf", "", "WsTLf6ScgV3beYBI6cioevIpem20XXocsSObjJGv");
// Moralis.serverURL = "https://ye6n1by0glwl.grandmoralis.com:2053/server";

const useNftData = (account) => {
  const [data, setData] = useState([])
  const tokenAddress = environment.YfethContractAddress;
  useEffect(async () => {
    if (!account) {
      return;
    }
    const options = { chain: 'bsc', address: account, token_address: tokenAddress };
    const NFTs = await Moralis.Web3API.account.getNFTsForContract(options);
    setData(NFTs.result)

  }, [tokenAddress, account])

  return data
}



export default useNftData

export { useNftData };