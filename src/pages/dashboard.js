import React from 'react';
import SuperHeader from '../components/SuperHeader';
import Header from '../components/Header/Header';
import styled from 'styled-components/macro';

function dashboard() {
  return (
    <>
      <SuperHeader />
      <Header />
      <Image src="images/alexander-redl-d3bYmnZ0ank-unsplash.jpg" alt="hello" />
    </>
  );
}

export default dashboard;

const Image = styled.img``;
