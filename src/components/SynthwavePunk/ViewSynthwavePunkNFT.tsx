import { SynthwavePunkAddress } from 'config/ethConfig';
import { BigNumber, ethers } from 'ethers';
import { string } from 'hardhat/internal/core/params/argumentTypes';
import React, { useEffect, useState } from 'react'
import { erc721ABI, useAccount, useContractReads } from 'wagmi'


const SynthwaveTokenContract = {
address: SynthwavePunkAddress,
abi: erc721ABI,
  }

  interface IMetadata {
  name: string,
  description: string,
  image: string
}
const ViewSynthwavePunkNFT = () => {
    const [userNFT, setUserNFT] = useState<IMetadata>() 
    const [imageURL, setImageURL] = useState("")
    const { address, isConnecting, isDisconnected } = useAccount();
    const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        ...SynthwaveTokenContract,
        functionName: 'tokenURI',
        args: [BigNumber.from(0)]
      },
    ],
  })

  const getUserNFT =  async () => {
    const res = await fetch(data![0])
    const resJson:IMetadata = await res.json();
    setUserNFT(resJson)
  }

  useEffect (() => {getUserNFT()},[])

  
  if (isConnecting) return <></>
  if (isDisconnected) return <></>

  return (
    <div>
      <p className='text-center mt-3'>Here is your punk!</p>
      <img src={userNFT?.image} alt={userNFT?.description} /></div>
  )
}

export default ViewSynthwavePunkNFT