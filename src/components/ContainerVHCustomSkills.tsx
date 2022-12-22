import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

const ContainerCustom = styled(Container)`
    max-height: 75vh;
    display: grid;
    place-content:center;
    overflow: hidden;
    min-height: 15vh;
    scroll-snap-align: center;
`

interface ContainerProps {
    children: any;
}

const ContainerVHCustomSkills: React.FC<ContainerProps> = ({ children }) => {
    return (
        <ContainerCustom className="hidden">
            {children}
        </ContainerCustom>
    )
}

export default ContainerVHCustomSkills