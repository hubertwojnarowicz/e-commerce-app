import React, { useContext, useState } from 'react';
import styled from 'styled-components/macro';
import { COLORS, WEIGHTS, QUERIES } from '../../variables';
import { Link } from 'react-router-dom';
import { User } from 'react-feather';
import UserContext from '../../context/user';
import PopUp from '../PopUp';

function SuperHeader() {
  const { user } = useContext(UserContext);
  const [hover, setHover] = useState(false);
  return (
    <SuperHeaderFullWidth>
      <SuperHeaderWrapper>
        <ShippingWrapper>
          <MemberShipDescription>
            Free Shipping + Returns, Free Membership, Exclusive Products
          </MemberShipDescription>
          <MemberShipLink to="/sign-up">Join Now</MemberShipLink>
        </ShippingWrapper>
        {user ? (
          <LoggedInUserWrapper
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <UserIcon />
            <UserName>Hi, {user.displayName}</UserName>
            <PopUp isOpen={hover} onMouseEnter={() => setHover(true)} />
          </LoggedInUserWrapper>
        ) : (
          <LoginButtonsWrapper>
            <JoinUsLink to="/sign-up">Join Us</JoinUsLink>
            <SignInLink to="/sign-in">Sign In</SignInLink>
          </LoginButtonsWrapper>
        )}
      </SuperHeaderWrapper>
    </SuperHeaderFullWidth>
  );
}

export default SuperHeader;

const SuperHeaderFullWidth = styled.div`
  height: 36px;
  background: ${COLORS.gray[1000]};
  height: 36px;
  display: flex;
  justify-content: center;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const SuperHeaderWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: inherit;
  height: 36px;
  margin: 0 32px;
  gap: 16px;
`;

const ShippingWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

const UserIcon = styled(User)`
  cursor: pointer;
`;

const MemberShipDescription = styled.span`
  font-size: 0.875rem;
`;

const MemberShipLink = styled(Link)`
  text-decoration: underline;
  font-size: 0.825rem;
  letter-spacing: -0.125px;
  color: ${COLORS.black};
`;

const LoginButtonsWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 16px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    margin-left: 63px;
    background-color: ${COLORS.gray[800]};
  }
`;

const LoggedInUserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 4px;
`;

const UserName = styled.span`
  font-weight: ${WEIGHTS.normal};
  letter-spacing: -0.125px;
  font-size: 1.05rem;
  margin-top: 2px;
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    color: ${COLORS.gray[400]};
  }
`;

const JoinUsLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.black};
  font-weight: ${WEIGHTS.medium};
  font-size: 0.95rem;

  &:hover {
    opacity: 0.6;
    transition: 0.4s;
  }
`;

const SignInLink = styled(Link)`
  text-decoration: none;
  font-weight: ${WEIGHTS.medium};
  font-size: 0.95rem;
  color: ${COLORS.black};

  &:hover {
    opacity: 0.6;
    transition: 0.4s;
  }
`;
