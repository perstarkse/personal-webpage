import SynthwavePunk from 'components/SyntwavePunk/SynthwavePunk';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useAccount, useContractReads } from "wagmi";
import { erc721ABI } from 'wagmi'
import MintProofOfVisit from './MintProofOfVisit';

const StatsDiv = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
// const ABI = [abi] as const;
// const ProofOfVisitContract = {
// address: '0xe38630CD5A8eAEA326431C956Fab2dF0d288340c',
// abi: [
//       {
//         name: 'totalMinted',
//         type: 'function',
//         stateMutability: 'nonpayable',
//         inputs: [],
//         outputs: ['uint256'],
//       },
//     ],
//   }

const ProofOfVisitContract = {
address: '0xe38630CD5A8eAEA326431C956Fab2dF0d288340c',
abi: erc721ABI,
  }

const ProofOfVisit = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
//   const [totalMinted, setTotalMinted] = useState({})

  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        ...ProofOfVisitContract,
        functionName: 'balanceOf',
        args: [address!]
      },
    ],
  })
//     const { data, isError, isLoading } = useContractReads({
//     contracts: [
//       {
//         ...ProofOfVisitContract,
//         functionName: 'totalMinted',
//       },
//     ],
//   })

  if (isConnecting) return <></>
  if (isDisconnected) return <></>
  if (isLoading) return <></>
  if (isError) return <></>
  if (Number(data?.[0]._hex) === 0) {return <><MintProofOfVisit /></>} 
  return (
                <></>
  )
}

export default ProofOfVisit