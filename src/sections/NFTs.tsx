import { ConnectKitButton } from 'connectkit';
import { ethers } from 'ethers';
import { formatEther } from 'ethers/lib/utils';
import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import styled from 'styled-components';
import nftNrUno from 'images/nfts/1.png'
import NFTMinting from './NFTMinting';
import ContainerVH50 from 'components/ContainerVH50';

const DescriptionDiv = styled.div`
`
const CenterDiv = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

const NFTs = () => {

    return (
        <ContainerVH50>
            <DescriptionDiv>
                <hr></hr>
                <p className='text-center'>So, I'm real happy you found your way here. As a fun experiment I want you to have a token, it will
                    serve
                    as a proof that you interacted with my site/contract. Most likely totally useless, but I might use
                    it
                    for something in some way in the future. There are 90 unique NFTs to claim for proof of visit holders.
                </p>
                <p className='text-center'>Connect via button below and follow instructions to claim.</p>
            </DescriptionDiv>
            <CenterDiv>
                <img src={nftNrUno} alt="numeroUnoNFT" />
                <p><em>SynthwavePunk #0</em></p>
            </CenterDiv>
            <CenterDiv>
                <ConnectKitButton />
                <NFTMinting />
            </CenterDiv>
        </ContainerVH50>
    )
}

export default NFTs