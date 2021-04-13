import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 1280px;
  background: #fff;
  box-shadow: 0px 16px 32px rgba(221, 230, 237, 0.4);
  border-radius: 5px;
  padding: 44px;
  margin: 24px auto;
  height: 60px;
  display: flex;
  align-items: center;
  /* justify-content: center; */

  h2 {
    font-weight: 600;
    font-size: 20px;
    margin: 0;
    color: #555770;
  }
`;

export const HeaderText = ({ text }) => {
  return (
    <Container>
      <h2>{text}</h2>
    </Container>
  );
};
