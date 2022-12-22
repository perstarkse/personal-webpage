import ContainerVH50 from 'components/ContainerVH50'
import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

const StyledContainer = styled(Container)`
    `

const Skills = () => {
    return (
        <ContainerVH50>
            <StyledContainer>
                <div>
                    <p>Since receiving my certification as a Swedish psychologist in 2017, I have been
                        providing mental health
                        care services.
                        I've specialized in clinical and personality assessments as well as treatment of diseases such
                        as depression, anxiety
                        disorders, and
                        stress disorders. I have received training in both <strong> CBT</strong> and
                        <strong> psychodynamic </strong>
                        techniques, as well as
                        <strong> existential treatment</strong>.
                        <br></br>
                        <br></br>
                        <strong>Coding</strong> is something that's been in my life since the early teenage years, although it was competing with
                        other interests. Over the years I've learnt myself python, solidity and bash for own projects
                        and fun, and for reading smart contracts (saved me once or twice). I consider myself an
                        intermediate on virtualisation software. Lately I've been enrolled in educational programme for fullstack development and have so far finished a few courses.
                    </p>
                </div>
            </StyledContainer>
        </ContainerVH50>
    )
}

export default Skills