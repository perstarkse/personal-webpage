import React from 'react';
import styled from 'styled-components';
import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import { colors } from '../variables/_variables';
import MediaQuery from 'react-responsive';


const StyledContainer = styled(Container)`
    justify-content: space-between;
`

const StyledNavbarBrand = styled(NavbarBrand)`
    color: ${colors.darkWhiteEmphasis};
    &:hover {color: white;}
`

const StyledNavbarText = styled(Navbar.Text)`
    color: ${colors.darkWhiteEmphasis};
`

const NavBar = () => {
    return (
        <Navbar variant="black" bg="black">
            <StyledContainer>
                <StyledNavbarBrand href="#home">&#129311; Per Stark</StyledNavbarBrand>
                <MediaQuery minWidth={400}>
                    <StyledNavbarText>coder/psychologist</StyledNavbarText>
                </MediaQuery>
                <Nav>
                    <NavLink href="https://github.com/perstarkse"><i className="fa-brands fa-github"></i></NavLink>
                    <NavLink href="https://twitter.com/mojotasticse"><i className="fa-brands fa-twitter"></i></NavLink>
                    <NavLink href="mailto: perstark.se@gmail.com"><i className="fa-solid fa-envelope"></i></NavLink>
                </Nav>
            </StyledContainer>
        </Navbar>
    )
}

export default NavBar