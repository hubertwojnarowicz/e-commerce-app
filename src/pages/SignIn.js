import React from 'react';
import SuperHeader from '../components/SuperHeader';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import styled from 'styled-components/macro';

function Signin() {
  return (
    <>
      <SuperHeader />
      <Header />
      <SignInWrapper>
        <SignInHeader>
          <Logo src="images/assets/logo.jpg" />
          <SignInTitle>Your account for everything Fresh Balance</SignInTitle>
        </SignInHeader>
      </SignInWrapper>
      <Footer />
    </>
  );
}

export default Signin;

const SignInWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 76%;
`;

const SignInHeader = styled.div``;

const Logo = styled.img``;

const SignInTitle = styled.h2``;
