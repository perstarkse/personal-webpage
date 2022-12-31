import React, { useState } from 'react'
import { erc721ABI, useAccount, useContractReads } from 'wagmi';
import MintSynthwavePunk from './MintSynthwavePunk';
import ViewSynthwavePunkNFT from './ViewSynthwavePunkNFT';

const SynthwaveTokenContract = {
address: '0xB724e91D9Cc8E121972313c7f9259997b4365802',
abi: erc721ABI,
  }

  const ProofOfVisitContract = {
address: '0xe38630CD5A8eAEA326431C956Fab2dF0d288340c',
abi: erc721ABI,
  }

const SynthwavePunk = () => {
    const { address, isConnecting, isDisconnected } = useAccount();
    const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        ...SynthwaveTokenContract,
        functionName: 'balanceOf',
        args: [address!]
      },
      {
        ...ProofOfVisitContract,
        functionName: 'balanceOf',
        args: [address!]
      },
    ],
  })
  if (isConnecting) return <></>
  if (isDisconnected) return <></>
  if (isLoading) return <></>
  if (isError) return <></>
  if (Number(data?.[1]._hex) === 0) {return <></>}
  if (Number(data?.[0]._hex) === 0) {return <><MintSynthwavePunk /></>} 
  return (
    <div className='text-center'>
      <p>For now, to see NFT image go to etherscan and look it up using tokenID</p>
      {/* <ViewSynthwavePunkNFT /> */}
    </div>
  )
}

export default SynthwavePunk