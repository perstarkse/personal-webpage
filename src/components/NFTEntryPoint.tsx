import React from 'react'
import { useAccount } from 'wagmi';
import NFTMinting from './NFTMinting'

const NFTEntryPoint = () => {
    const { address, isConnecting, isDisconnected } = useAccount();

    if (isConnecting) return <></>
    if (isDisconnected) return <></>
    if (address) return <NFTMinting />
    else return <></>
}

export default NFTEntryPoint