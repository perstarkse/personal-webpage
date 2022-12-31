import React from 'react'
import { Button } from 'react-bootstrap';
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'

const MintSynthwavePunk = () => {
    const { config } = usePrepareContractWrite({
    address: '0xB724e91D9Cc8E121972313c7f9259997b4365802',
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

  return (
    <div className='d-grid'>
    <div className='text-center'>
      <p >I'm very glad that you decided to mint a proof of visit token!</p>
      <p>As a thanks you may now mint a SynthwavePunk NFT.</p>
      
    </div>
    <Button disabled={!write} variant="secondary" className='btn btn-theme mt-2' onClick={() => write?.()}>
      { isLoading ? ('Minting...'): ('Click to claim your NFT') } 
      </Button> 
      {isSuccess && (
        <div className='text-center'>
          Successfully minted your punk!
          <div>
            <a href={`https://sepolia.etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
      </div>
    )
}

export default MintSynthwavePunk