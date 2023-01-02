import { SynthwavePunkAddress } from 'config/ethConfig';
import { BigNumber, ethers } from 'ethers';
import React, { useEffect, useState } from 'react'
import { erc721ABI, useAccount, useContract, useContractEvent, useProvider,  } from 'wagmi'
import ViewImage from './ViewImage';

interface IEvent {
  from: string,
  to: string,
  tokenId: BigNumber | null ,
}
const ViewSynthwavePunkNFT = () => {
  const [newEvent, setNewEvent] = useState<IEvent>()
  const [previousLogs, setPreviousLogs] = useState<ethers.Event[]>()
  const [latestTransactedTokenID, setLatestTransactedTokenID] = useState()

  const { address  } = useAccount();
  const provider = useProvider()
    
  const SynthwavePunkContract = useContract({
      address: SynthwavePunkAddress,
      abi: erc721ABI,
      signerOrProvider: provider});

  useContractEvent({
    address: SynthwavePunkAddress,
    abi: erc721ABI,
    eventName: 'Transfer',
    listener: (from, to, tokenId) => {
      setNewEvent({ from, to, tokenId })
    }
  })

  const getPreviousLogs = async () => {
      const filter = SynthwavePunkContract!.filters.Transfer(null, address!, null)
      const logs = await SynthwavePunkContract!.queryFilter(filter)
      setPreviousLogs(logs)
    }

  useEffect (() => {
    if (latestTransactedTokenID) {
    // console.log("has tokenid")
    }
    else if (address) {
      if (SynthwavePunkContract) {
        getPreviousLogs();
        if (previousLogs !== undefined)
          {setLatestTransactedTokenID(previousLogs[0].args![2]._hex);
          // console.log(previousLogs![0].args![2]._hex);
          }
      }}
  },[address, previousLogs])

// IMAGEDISPLAY COMPONENT PASS THROUGH TRANSACTION ,, USECONTRACT READS IN NEW COMPONENT,, USE "NO PREVIOUS TRANSACTIONS" AS INITIAL SORTING????
if (latestTransactedTokenID) {return (  <ViewImage previousEvent={latestTransactedTokenID} /> )} 

else return <></>
}
export default ViewSynthwavePunkNFT