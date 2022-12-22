import React from 'react'
import styled from 'styled-components'
import { breakpoints } from 'variables/_variables'

const StyledNameLocal = styled.h1`
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

const StyledName = () => {
    return (
        <StyledNameLocal>
        </StyledNameLocal>
    )
}

export default StyledName