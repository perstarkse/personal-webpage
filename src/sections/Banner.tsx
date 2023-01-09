import ContainerVH100 from 'components/ContainerVH100';
import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import Logo from '../images/logo/logo-2.webp';
import { breakpoints, fonts, colors } from '../variables/_variables';

const CustomVHContainer = styled(ContainerVH100)`
    height: 100vh;
`

const StyledContainer = styled(Container)`
    justify-content:center;
    padding-top: 1rem;
    position:relative;
`

const StyledLogo = styled.img`
    height: auto;
    width: 30vw;
    @media(min-width: ${breakpoints.md}) {
                height: 100px;
                width: 100px;}
`

const StyledName = styled.h1`
    margin-top: 3rem;
    margin-left: 1rem;
    font-size: 14vw;
    text-transform: uppercase;
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
        }
    }
        @media(min-width:${breakpoints.sm}) {
        font-size: 70px;
        margin-left: 2rem;
    }
    @media(min-width:${breakpoints.md}) {
        font-size: 80px;
        margin-left: 2rem;
    }
`
const WideChevron = styled.i`
    font-size: 50px;
    margin-top: 30vh;
    cursor: pointer;
    color: ${colors.darkWhiteEmphasis}
    
`

const Banner = () => {

    
    

    return (
        <ContainerVH100>
            <StyledContainer className="d-flex align-items-center mt-3">
                <StyledLogo src={Logo}></StyledLogo>
            </StyledContainer>
            <StyledName>PER STARK</StyledName>
            <h2 className='mt-5 d-flex justify-content-center align-items-center'>coder / psychologist</h2>
            <div onClick={() => { const anchor = document.querySelector('#introduction'); anchor!.scrollIntoView({ behavior: 'smooth', block: 'center' });}} className="d-flex justify-content-center align-items-center"><WideChevron className="fa-solid fa-chevron-down"></WideChevron></div>
            
        </ContainerVH100>
    )
}

export default Banner