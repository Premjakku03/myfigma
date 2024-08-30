import React from 'react';
import Navbar from './navbar';
import Card from './card';
import Button from './button';
import Footer from './footer';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial, sans-serif';
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const App = () => {
  return (
    <AppWrapper>
      <Navbar />
      <ContentWrapper>
        <Card title="Insight 1" description="Detailed analysis of market trends." />
        <Card title="Insight 2" description="Understanding customer behavior." />
        <Card title="Insight 3" description="Future predictions and forecasts." />
      </ContentWrapper>
      <Button label="Learn More" onClick={() => alert('Button clicked!')} />
      <Footer />
    </AppWrapper>
  );
};

export default App;
