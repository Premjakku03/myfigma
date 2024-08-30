import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
`;

const Card = ({ title, description }) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardWrapper>
  );
};

export default Card;
const cardWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    padding: 15px;
    margin: 10px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin: 5px;
  }
`;
