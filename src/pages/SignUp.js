import React, { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../context/firebase';
import { Link, useNavigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Header from '../components/Header/Header';
import styled from 'styled-components/macro';
import Footer from '../components/Footer';
import { COLORS, WEIGHTS } from '../variables';

function Signup() {
  const history = useNavigate();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isInvalid = firstName === '' || email === '' || password === '';

  useEffect(() => {
    document.title = 'Register';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    history(`${ROUTES.DASHBOARD}`);
  };
  return (
    <>
      <Header />
      <SignUpWrapper>
        <SignUpHeader>
          <Logo src="images/assets/logo.jpg" />
          <SignUpTitle>Become a Fresh Balance Member</SignUpTitle>
          <SignUpDesc>
            Create your Fresh Balance Member profile and get first access to the
            very best of Fresh Balance products, inspiration and community.
          </SignUpDesc>
        </SignUpHeader>
        <SignUpForm onSubmit={handleSubmit}>
          <FormInput
            aria-label="Enter Your First Name"
            type="text"
            placeholder="First Name"
          />
          <FormInput
            aria-label="Enter Your Email Address"
            type="email"
            placeholder="Email address"
          />
          <FormInput
            aria-label="Enter Your Password"
            type="password"
            placeholder="Password"
          />

          <SubmitButton>Join Us</SubmitButton>
        </SignUpForm>
        <SignInText>
          Already a member?
          <SignInLink to="/sign-in">Sign In</SignInLink>
        </SignInText>
      </SignUpWrapper>
      <Footer />
    </>
  );
}

export default Signup;

const SignUpWrapper = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 79%;
  margin: 0 16px;
`;

const SignUpHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  max-width: 380px;
  margin: 0 16px;
`;

const Logo = styled.img``;

const SignUpTitle = styled.h2`
  text-transform: uppercase;
`;
const SignUpDesc = styled.p`
  text-align: center;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  width: 100%;
  gap: 16px;
  margin-top: 16px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 4px 12px;

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 1.125rem;
  }

  :focus {
    outline: none;
  }

  :focus::placeholder {
    color: ${COLORS.gray[600]};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  text-transform: uppercase;
  border: none;
  outline: none;
  color: ${COLORS.white};
  background-color: ${COLORS.black};
  border-radius: 4px;
  font-weight: ${WEIGHTS.bold};
  padding: 12px 0px;
`;

const SignInText = styled.p`
  font-size: 0.825rem;
  color: ${COLORS.gray[300]};
  margin-top: 8px;
`;

const SignInLink = styled(Link)`
  color: ${COLORS.black};
  margin-left: 2px;
`;
