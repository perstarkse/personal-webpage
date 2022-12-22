import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import styled from 'styled-components'
import { colors, fonts, breakpoints } from '../variables/_variables'
import ProofOfVisitBG from '../images/card-bg/proofofvisit.png'
import SpeedrunEthereumBG from '../images/card-bg/speedrunethereum.png'
import PyDatabaseBG from '../images/card-bg/pydb.png'
import { NavLink } from 'react-router-dom'
import ContainerVH100 from 'components/ContainerVH100'
import ContainerVH50 from 'components/ContainerVH50'


const StyledTitle = styled.div`
    font-size: ${fonts.fontSize24};
    display:flex;
    justify-content: center;
    text-align:center;
    margin-bottom: 1rem;
    margin-top: 1rem;
    `

const CardHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;

    @media(min-width: ${breakpoints.md}) {
        flex-direction: row;}
`

const FlipCardBody = styled.div`
    position: absolute;
    bottom: 0px;
    height: 100%;
    background-color: ${colors.themeDarkLighter1};
    opacity: 80%;
    border-radius: 15px;
    width: 100%;
    display:flex;
    justify-content: center;
    border: 1px solid ${colors.darkWhiteMedium};
    flex-direction: column;
    text-align: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    @media (min-width: ${breakpoints.md}) { 
        height: 50%;
    }
`

const FlipCardImg = styled.img`
    height:55vw;
    width: 60vw;
    min-width: 300px;
    border: 1px solid ${colors.darkWhiteMedium};
    border-radius: 15px;
    filter: blur(0.5px);
    @media (min-width: ${breakpoints.md}) { 
        height:400px;   
        width: 30vw;
        min-width: 300px;
        max-width: 350px;
    }

    &:hover {filter:blur(2px);}
`

const FlipCardTitle = styled.h2`
    text-transform: uppercase;
    padding-top: 10px;
    color: ${colors.darkWhiteEmphasis};
`
const FlipCardBread = styled.p`
    color: ${colors.darkWhiteEmphasis};
    margin-left: 5px;
    margin-right: 5px;
`

const FlipCard = styled.div`
    position: relative;
    &:hover ${FlipCardBody} {height:100%;}

    &:hover ${FlipCardTitle} {
        background-image: linear-gradient(-225deg,
                #3a2a77 0%,
                #65339b 29%,
                #fd6598 67%,
                #b9b651 100%);
        background-size: auto auto;
        background-clip: border-box;
        background-size: 200% auto;
        color: #fff;
        background-clip: text;
        -text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: textclip 2s linear infinite;
        display: inline-block;

        @keyframes textclip {
        to {
            background-position: 200% center;
        }}
    }
`

const ExampleProjects = () => {
    return (
        <ContainerVH50>
            <Container>
                <StyledTitle>
                    <h2>These are some projects of mine, I would love some feedback! &#x1F495;</h2>
                </StyledTitle>
                <CardHolder>
                    <FlipCard>
                        <FlipCardImg src={ProofOfVisitBG} alt="" />
                        <a href="https://github.com/perstarkse/personal-webpage">
                            <FlipCardBody>
                                <FlipCardTitle>
                                    Personal webpage
                                </FlipCardTitle>
                                <FlipCardBread>
                                    Page build with react, styled components. NFT build with ERC721 tokens, hardhat for testning and deployment.
                                </FlipCardBread>
                            </FlipCardBody>
                        </a>
                    </FlipCard>
                    <FlipCard>
                        <FlipCardImg src={PyDatabaseBG} alt="" />
                        <a href="https://github.com/perstarkse/database-project">
                            <FlipCardBody>
                                <FlipCardTitle>
                                    Python database
                                </FlipCardTitle>
                                <FlipCardBread>
                                    Made for registering time spent doing different tasks. Uses TinyDB as a
                                    database, and matplotlib for presenting data
                                    visually.
                                </FlipCardBread>
                            </FlipCardBody>
                        </a>
                    </FlipCard>
                </CardHolder>
            </Container >
        </ContainerVH50>
    )
}

export default ExampleProjects