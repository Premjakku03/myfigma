import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Arial, sans-serif';
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

const Button = ({ label, onClick }) => {
  return <ButtonWrapper onClick={onClick}>{label}</ButtonWrapper>;
};

export default Button;
