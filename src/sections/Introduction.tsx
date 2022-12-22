import ContainerVH100 from 'components/ContainerVH100'
import ContainerVH50 from 'components/ContainerVH50'
import React from 'react'
import { Container } from 'react-bootstrap'


const Introduction = () => {
    return (
        <ContainerVH50>
            <Container className='mt-5'>
                <p>
                    <em>Welcome</em> to my personal webpage and playground!
                </p>
                <p>
                    I have been working as a psychologist for over six years and have been involved in the development of primary care centered psychological treatment and assessment.
                    In recent years, I have become interested in the potential of digital technologies to improve mental health and wellbeing. I am particularly interested in how digital technologies can be used to create new opportunities for learning and growth.
                </p>
                <p>
                    In this playground, you will find a selection of my code projects, as well as some of my writings on psychology and digital technology. You can also claim an NFT (non-fungible token) by completing a simple task on my website. Thanks for visiting!
                </p>
            </Container>
        </ContainerVH50>
    )
}

export default Introduction