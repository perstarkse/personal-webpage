import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useAccount } from "wagmi";
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'


const MintProofOfVisit = () => {

  const { address, isConnecting, isDisconnected } = useAccount();
 
    const { config } = usePrepareContractWrite({
    address: '0xe38630CD5A8eAEA326431C956Fab2dF0d288340c',
    abi: [
      {
        name: 'safeMint',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs: [],
        outputs: [],
      },
    ],
    functionName: 'safeMint',
  })
    const { data, write } = useContractWrite(config)

    const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  if (isConnecting) return <></>;
  if (isDisconnected) return <></>;

  return (
    <div className='d-grid'>
      <p>Now that you are connected you can click the button below to claim.</p>
    <Button disabled={!write} variant="secondary" className='btn btn-theme mt-2' onClick={() => write?.()}>
      { isLoading ? ('Minting...'): ('Click to claim your token') } 
      </Button> 
      {isSuccess && (
        <div className='text-center'>
          Successfully minted your proof of visit NFT!
          <div>
            <a href={`https://sepolia.etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
      </div>
    )
}

export default MintProofOfVisit