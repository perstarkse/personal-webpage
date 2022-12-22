import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

const ContainerVh100 = styled(Container)`
    height: 100vh;
    display: grid;
    place-content:center;
    scroll-snap-align: center;
`

interface ContainerProps {
    children: any;
}

const ContainerVH100: React.FC<ContainerProps> = ({ children }) => {
    return (
        <ContainerVh100 className="hidden">
            {children}
        </ContainerVh100>
    )
}

export default ContainerVH100