import { SynthwavePunkAddress } from 'config/ethConfig'
import { BigNumber } from 'ethers'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { erc721ABI, useContractReads } from 'wagmi'

  interface IMetadata {
  name: string,
  description: string,
  image: string
}
const SynthwaveTokenContract = {
  address: SynthwavePunkAddress,
  abi: erc721ABI,
  }

  const NFTImage = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 90vw;
max-width: 512px;
`

const ViewImage = (tokenId: any) => {
    const [userNFT, setUserNFT] = useState<IMetadata>() 

    const { data } = useContractReads({
    contracts: [
      {
        ...SynthwaveTokenContract,
        functionName: 'tokenURI',
        args: [tokenId.previousEvent]
      },
    ],
  });

  const getUserNFT =  async () => {
    const res = await fetch(data![0])
    const resJson:IMetadata = await res.json();
    setUserNFT(resJson)
  }


  useEffect(() => {
    getUserNFT();
  }, [data])
  


  return (
    <>
        <p className='text-center mt-3'>Here is your punk! It is number {BigNumber.from(tokenId.previousEvent).toNumber()}/90</p>
        <NFTImage src={userNFT?.image} alt={userNFT?.description} />
      </>

  )
}

export default ViewImage