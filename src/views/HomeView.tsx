import * as React from 'react'
import NavBar from '../sections/NavBar'
import Skills from '../sections/Skills'
import Banner from '../sections/Banner';
import Introduction from '../sections/Introduction';
import ImageViewer from '../sections/ImageViewer';
import ProofOfVisit from '../sections/ProofOfVisit';
import ExampleProjects from '../sections/ExampleProjects';
import Footer from 'sections/Footer';
import styled from 'styled-components';
import AppSkills from 'sections/Skills/Applications';
import LangSkills from 'sections/Skills/Languages';
import PsychSkills from 'sections/Skills/Psychology';

const HomeViews = styled.div`
    position: relative;
    .hidden {
        opacity: 0;
        transition: all 1s ease-in;
        filter: blur(5px);
        /* transform: translateY(50%); */
    }
    .show {
        opacity: 1;
        filter: blur(0);
        /* transform: translateY(0); */
    }

    @media(prefers-reduced-motion) {
        .hidden {
            transition: none;}
        }

    scroll-snap-type: both mandatory;
`



const HomeView = (): JSX.Element => {
    return (
        <HomeViews>
            {/* <div className='artwork'></div> */}
            {/* <NavBar />
            <Banner />
            <Introduction />
            <ImageViewer />
            <Skills />
            <LangSkills />
            <AppSkills />
            <PsychSkills /> */}
            <ProofOfVisit />
            <ExampleProjects />
            <Footer />
        </HomeViews >
    );
};

export default HomeView;