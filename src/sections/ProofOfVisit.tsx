import ConnectToChain from 'components/ConnectToChain';
import MintTransaction from 'components/ProofOfVisit/MintTransaction';
import ProofOfVisitData from 'components/ProofOfVisit/ProofOfVisitData';
import { ethers } from 'ethers';
import { formatEther } from 'ethers/lib/utils';
import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import styled from 'styled-components';

const StyledContainer = styled(Container)`
`

const DescriptionDiv = styled.div`
`
const StatsDiv = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

const DisplayNFTDiv = styled.div`
display:flex;
justify-content: center;
align-items: center;
margin-top: 1rem;
`


const ProofOfVisit = () => {

    return (
        <StyledContainer>
            <DescriptionDiv>
                <hr></hr>
                <p>So, I'm real happy you found your way here. As a fun experiment I want you to have a token, it will
                    serve
                    as a proof that you interacted with my site/contract. Most likely totally useless, but I might use
                    it
                    for something in some way in the future.
                </p>
                <p>Connect via your standard web3 provider and click the button to claim.</p>
            </DescriptionDiv>
            <ConnectToChain />

            <ProofOfVisitData />
            <StatsDiv>
                <MintTransaction />
            </StatsDiv>
            <StatsDiv>
                ? Claim NFT
            </StatsDiv>
            <DisplayNFTDiv>
            </DisplayNFTDiv>
            <div>
                {/* yo {blocknumber} {balanceOf?.toString()} */}
            </div>
        </StyledContainer>
    )
}

export default ProofOfVisit