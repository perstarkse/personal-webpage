import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'


const StyledContainer = styled(Container)`
height: 4rem;
`

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
`

const Footer = () => {
    return (
        <StyledContainer>
            <StyledDiv>Thanks for visiting!</StyledDiv>
        </StyledContainer>
    )
}

export default Footer