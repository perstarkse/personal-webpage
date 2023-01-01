import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

const ContainerVh50 = styled(Container)`
    max-height: 150vh;
    display: grid;
    place-content:center;
    overflow: hidden;
    min-height: 30vh;
    scroll-snap-align: center;
`

interface ContainerProps {
    children: any;
}

const ContainerVH50: React.FC<ContainerProps> = ({ children }) => {
    return (
        <ContainerVh50 className="hidden">
            {children}
        </ContainerVh50>
    )
}

export default ContainerVH50