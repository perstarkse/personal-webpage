import MintProofOfVisit from 'components/ProofOfVisit/MintProofOfVisit';
import { ProofOfVisitAddress, SynthwavePunkAddress } from 'config/ethConfig';
import React, { useEffect, useState } from 'react'
import { erc721ABI, useAccount, useContractReads } from 'wagmi';
import MintSynthwavePunk from './SynthwavePunk/MintSynthwavePunk';
import ViewSynthwavePunkNFT from './SynthwavePunk/ViewSynthwavePunkNFT';

const SynthwaveTokenContract = {
  address: SynthwavePunkAddress,
  abi: erc721ABI,
}

const ProofOfVisitContract = {
  address: ProofOfVisitAddress,
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
    if (address) {
        if (data?.[0] !== null)    
            if (Number(data?.[0]._hex) === 1) {
              setMintedSP(true)
            }
        if (data?.[1] !== null)  
            if (Number(data?.[1]._hex) === 1) {
              setMintedPOV(true)
            }
    }
    },[data, address])

  if (isLoading) return <></>
  if (isError) return <></>

  return (
    <>
    { mintedPOV ? (<>{ mintedSP ?(<><ViewSynthwavePunkNFT /></>) : (<><MintSynthwavePunk setFunction={setMintedSP}/></>) }</>)
    : (<><MintProofOfVisit setFunction={setMintedPOV} /></>) }   
    </>
  )
}

export default NFTMinting