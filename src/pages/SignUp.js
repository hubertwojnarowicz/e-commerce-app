import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import ReactLoader from "../components/Loader/ReactLoader";
import * as ROUTES from "../constants/routes";
import Header from "../components/Header/Header";
import styled from "styled-components/macro";
import Footer from "../components/Footer";
import { COLORS, WEIGHTS } from "../variables";
import { auth, registerWithEmailAndPassword } from "../lib/firebase";

function Signup() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = "Register";
  }, []);

  const register = (e) => {
    e.preventDefault();
    registerWithEmailAndPassword(name, email, password);
    if (loading) return <ReactLoader />;
    if (user) navigate("/");
    if (error) console.log(error);
  };

  useEffect(() => {
    if (user) return <ReactLoader />;
    if (!user) return;
  }, [user]);

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
        <SignUpForm onSubmit={register} method="POST">
          <FormInput
            aria-label="Enter Your First Name"
            type="text"
            placeholder="First Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          <FormInput
            aria-label="Enter Your Email Address"
            type="email"
            placeholder="Email address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <FormInput
            aria-label="Enter Your Password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <SubmitButton type="submit">Join Us</SubmitButton>
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

const Logo = styled.img`
  height: 56px;
  object-fit: cover;
`;

const SignUpTitle = styled.h2`
  text-transform: uppercase;
`;
const SignUpDesc = styled.p`
  text-align: center;
  font-size: 0.875rem;
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
  padding-top: 6px;
  padding-bottom: 6px;

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 1.125rem;
    text-align: left;
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
