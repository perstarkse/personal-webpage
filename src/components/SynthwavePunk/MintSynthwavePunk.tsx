import { SynthwavePunkAddress } from 'config/ethConfig';
import React from 'react'
import { Button } from 'react-bootstrap';
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'
interface IMintFunction{
setFunction: (arg0: boolean) => void;
}

const MintSynthwavePunk:React.FC<IMintFunction> = (props) => {
    const { config } = usePrepareContractWrite({
    address: SynthwavePunkAddress,
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
    <div className='text-center'>
      <p className='mt-2'>You may now mint a SynthwavePunk NFT.</p>
    </div>
    <Button disabled={!write} variant="secondary" className='btn btn-theme mt-2' onClick={() => write?.()}>
      { isLoading ? ('Minting...'): ('Click to claim your NFT') } 
      </Button> 
      {isSuccess && (
        <div className='text-center'>
          Successfully minted your punk!
          <div className="d-grid">
            <a href={`https://polygonscan.com/tx/${data?.hash}`}>Polygonscan</a>
            <Button variant="secondary" className='btn btn-theme mt-2'  onClick={changeParentState}>Click to view your Punk </Button>
          </div>
        </div>
      )}
      </div>
    )
}

export default MintSynthwavePunk