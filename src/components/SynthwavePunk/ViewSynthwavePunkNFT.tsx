import { BigNumber, ethers } from 'ethers';
import React from 'react'
import { erc721ABI, useAccount, useContractReads } from 'wagmi'


const SynthwaveTokenContract = {
address: '0xB724e91D9Cc8E121972313c7f9259997b4365802',
abi: erc721ABI,
  }

const ViewSynthwavePunkNFT = () => {
    const { address, isConnecting, isDisconnected } = useAccount();
    const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        ...SynthwaveTokenContract,
        functionName: 'tokenURI',
        args: [BigNumber.from(1)]
      },
    ],
  })
  console.log(data);
  
  if (isConnecting) return <></>
  if (isDisconnected) return <></>

  return (
    <div><img src="https://ipfs.infura.io/ipfs/QmeqKgVqbSCihprysnZbqXBK1WKvKLpSXAq62x6rkMcDqG/0.png" alt="numeroUno" /></div>
  )
}

export default ViewSynthwavePunkNFT