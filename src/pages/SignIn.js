import React, { useState, useEffect, useContext } from 'react';
import SuperHeader from '../components/SuperHeader';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import styled from 'styled-components/macro';
import { Link, useNavigate } from 'react-router-dom';
import { COLORS, WEIGHTS } from '../variables';
import * as ROUTES from '../constants/routes';
import FirebaseContext from '../context/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Signin() {
  const firebase = useContext(FirebaseContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(firebase.auth, email, password);
      navigate(ROUTES.DASHBOARD);
    } catch (error) {
      setEmail('');
      setPassword('');
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = 'Login';
  }, []);
  return (
    <>
      <SuperHeader />
      <Header />
      <SignInWrapper>
        <SignInHeader>
          <Logo src="images/assets/logo.jpg" />
          <SignInTitle>Your account for everything Fresh Balance</SignInTitle>
        </SignInHeader>
        <SignInForm onSubmit={login}>
          <FormInput
            value={email}
            type="email"
            aria-label="Enter Your Email Address"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            value={password}
            type="password"
            aria-label="Enter Your Password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TermsOfUse>
            By logging in, you agree to Fresh Balance's{' '}
            <TermsLink to={ROUTES.DASHBOARD}>Privacy Policy </TermsLink> and{' '}
            <TermsLink to={ROUTES.DASHBOARD}>Terms of Use.</TermsLink>
          </TermsOfUse>
          <SubmitButton type="submit">Sign In</SubmitButton>
        </SignInForm>
        <SignUpText>
          Not a member? <JoinUsLink to={ROUTES.SIGNUP}>Join us.</JoinUsLink>
        </SignUpText>
        <ErrorMessage>{error}</ErrorMessage>
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
  flex-direction: column;
  height: 76%;
  margin: 0 16px;
`;

const SignInHeader = styled.div`
  max-width: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
`;

const Logo = styled.img`
  height: 56px;
  object-fit: cover;
`;

const SignInTitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
`;

const SignInForm = styled.form`
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0 16px;
  height: 36px;
  display: inline-block;
  border: none;
  border: 1px solid ${COLORS.gray[700]};
  border-radius: 4px;

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 1.05rem;
    text-align: left;
  }

  :focus {
    outline: none;
  }

  :focus::placeholder {
    color: ${COLORS.gray[700]};
  }
`;

const TermsOfUse = styled.p`
  text-align: center;

  font-size: 0.875rem;
  color: ${COLORS.gray[600]};
`;

const TermsLink = styled(Link)`
  color: ${COLORS.black};
  font-size: 0.875rem;
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
  cursor: pointer;
`;

const SignUpText = styled.p`
  margin-top: 8px;
  color: ${COLORS.gray[600]};
  font-size: 0.875rem;
`;

const JoinUsLink = styled(Link)`
  color: ${COLORS.black};
`;

const ErrorMessage = styled.span`
  text-align: center;
  color: red;
`;
