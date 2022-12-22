import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import styled from 'styled-components'
import { fonts } from '../variables/_variables'
import CarouselImage1 from "../images/wallpapers/floating-city.png"
import CarouselImage2 from "../images/wallpapers/therapy-robot.png"
import CarouselImage3 from "../images/wallpapers/solarpunk.png"
import CarouselImage4 from "../images/wallpapers/analysis.png"
import ContainerVH100 from 'components/ContainerVH100'
import ContainerVH50 from 'components/ContainerVH50'

const StyledCarousel = styled(Carousel)`
    max-height:auto;
    max-width:1200px;  
`

const ArtDescription = styled.p`
    font-size: ${fonts.fontSize13};
    text-align: center;
    margin-top: 0.3rem;
`

const ImageViewer = () => {
    return (
        <ContainerVH50>
            <Container className='d-flex flex-column mt-5 justify-content-center align-items-center'>
                <StyledCarousel slide={true} wrap={true} interval={300000000} >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={CarouselImage1}
                            alt="floating city"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={CarouselImage4}
                            alt="analysis room"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={CarouselImage3}
                            alt="solarpunk future"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={CarouselImage2}
                            alt="human-ai interaction"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </StyledCarousel>
                <ArtDescription>Images, artwork and some text on this page have all been created using artificial intelligence.</ArtDescription>
            </Container>
        </ContainerVH50>
    )
}

export default ImageViewer