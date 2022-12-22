import { ethers } from 'ethers';
import React, { useEffect } from 'react'
import styled from 'styled-components';

const StatsDiv = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

const ProofOfVisitData = () => {


  return (
    <StatsDiv>
                <div>Total claimed: </div>
                <div>Last token claimed on: /lastClaimedDate/</div>
                <div>First token claimed on: /firstClaimedDate/</div>
    </StatsDiv>
  )
}

export default ProofOfVisitData