import MintProofOfVisit from 'components/ProofOfVisit/MintProofOfVisit';
import React, { useEffect, useState } from 'react'
import { erc721ABI, useAccount, useContractReads } from 'wagmi';
import MintSynthwavePunk from '../components/SynthwavePunk/MintSynthwavePunk';
import ViewSynthwavePunkNFT from '../components/SynthwavePunk/ViewSynthwavePunkNFT';

const SynthwaveTokenContract = {
address: '0xB724e91D9Cc8E121972313c7f9259997b4365802',
abi: erc721ABI,
  }

  const ProofOfVisitContract = {
address: '0xe38630CD5A8eAEA326431C956Fab2dF0d288340c',
abi: erc721ABI,
  }

const NFTMinting = () => {
    const [mintedPOV, setMintedPOV] = useState(false)
    const [mintedSP, setMintedSP] = useState(false)

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

  useEffect(() => {
    if (Number(data?.[0]._hex) === 1) {
        setMintedSP(true)
    }
    if (Number(data?.[1]._hex) === 1) {
        setMintedPOV(true)
    }
    },[data, address])

  if (isConnecting) return <></>
  if (isDisconnected) return <></>
  if (isLoading) return <></>
  if (isError) return <></>

  console.log(mintedPOV);
  console.log(mintedSP);
  
  
  return (
    <>
    { mintedPOV ? (<>{ mintedSP ?(<><ViewSynthwavePunkNFT /></>) : (<><MintSynthwavePunk setFunction={setMintedSP}/></>) }</>)
    : (<><MintProofOfVisit setFunction={setMintedPOV} /></>) }   
    </>
  )
}

export default NFTMinting