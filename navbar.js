import React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  background-color: #2c3e50;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-family: 'Arial, sans-serif';
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.li`
  margin-left: 20px;

  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo>MyWebsite</Logo>
      <NavLinks>
        <NavLink><a href="#home">Home</a></NavLink>
        <NavLink><a href="#insights">Insights</a></NavLink>
        <NavLink><a href="#gallery">Gallery</a></NavLink>
        <NavLink><a href="#contact">Contact</a></NavLink>
      </NavLinks>
    </NavbarWrapper>
  );
};

export default Navbar;
