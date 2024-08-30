import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #2c3e50;
  padding: 20px;
  text-align: center;
  color: white;
  font-family: 'Arial, sans-serif';
`;

const Footer = () => {
  return (
    <FooterWrapper>
      &copy; 2024 MyWebsite. All rights reserved.
    </FooterWrapper>
  );
};

export default Footer;
