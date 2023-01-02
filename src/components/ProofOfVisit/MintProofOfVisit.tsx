import { ProofOfVisitAddress } from 'config/ethConfig';
import React from 'react'
import { Button } from 'react-bootstrap';
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'

interface IMintFunction{
setFunction: (arg0: boolean) => void;
}

const MintProofOfVisit:React.FC<IMintFunction>= (props) => {
    const { config } = usePrepareContractWrite({
    address: ProofOfVisitAddress,
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

  const changeParentState = () => {
  props.setFunction(true);}

  return (
    <div className='d-grid'>
      <p className='mt-2 text-center'>Now that you are connected you can click the button below to claim.</p>
    <Button disabled={!write} variant="secondary" className='btn btn-theme mt-2' onClick={() => write?.()}>
      { isLoading ? ('Minting...'): ('Click to claim your token') } 
      </Button> 
      {isSuccess && (
        <div className='text-center'>
          Successfully minted your proof of visit NFT!
          <div className="d-grid">
            <a href={`https://polygonscan.com/tx/${data?.hash}`}>Polygonscan</a>
            <Button variant="secondary" className='btn btn-theme mt-2' onClick={changeParentState}>Click here to mint a punk </Button>
          </div>
        </div>
      )}
      </div>
    )
}

export default MintProofOfVisit