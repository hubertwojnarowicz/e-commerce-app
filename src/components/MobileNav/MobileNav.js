import React from "react";
import styled from "styled-components/macro";
import { ChevronRight, X } from "react-feather";
import { COLORS, QUERIES } from "../../variables";
import { Link } from "react-router-dom";

function MobileNav({ isOpen, onDismiss }) {
  if (!isOpen) {
    return null;
  }
  return (
    <MobileNavWrapper>
      <CloseButton onClick={onDismiss}>
        <X size="32" />
      </CloseButton>
      <MobileNavigation>
        <PrimaryMobileNavigation>
          <MobileListItems>
            <MobileLink to="/new-releases">
              <LinkChild>New Releases</LinkChild>
              <ChevronRight size="32" />
            </MobileLink>
          </MobileListItems>
          <MobileListItems>
            <MobileLink to="/man">
              <LinkChild>Man</LinkChild>
              <ChevronRight size="32" />
            </MobileLink>
          </MobileListItems>
          <MobileListItems>
            <MobileLink to="woman">
              <LinkChild>Woman</LinkChild>
              <ChevronRight size="32" />
            </MobileLink>
          </MobileListItems>
          <MobileListItems>
            <MobileLink to="kids">
              <LinkChild>Kids</LinkChild>
              <ChevronRight size="32" />
            </MobileLink>
          </MobileListItems>
          <MobileListItems>
            <MobileLink to="sale">
              <LinkChild>Sale</LinkChild>
              <ChevronRight size="32" />
            </MobileLink>
          </MobileListItems>
        </PrimaryMobileNavigation>
      </MobileNavigation>
      <Description>
        Become a Fresh Balance Member for the best products, inspiration and
        stories in sport.
      </Description>
      <LoginsWrapper>
        <JoinsUsLink to="sign-up">Join Us</JoinsUsLink>
        <LoginLink to="sign-in">Sign In</LoginLink>
      </LoginsWrapper>
    </MobileNavWrapper>
  );
}

export default MobileNav;

const MobileNavWrapper = styled.div`
  background-color: ${COLORS.white};
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px 24px 0px 24px;
  gap: 16px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media ${QUERIES.tabletAndSmaller} {
    inset: 0% 0% 0% 60%;
  }

  @media ${QUERIES.phoneAndSmaller} {
    inset: 0% 0% 0% 25%;
  }
`;

const CloseButton = styled.button`
  border: none;
  outline: none;
  background-color: ${COLORS.white};
  margin-left: auto;
`;

const MobileNavigation = styled.nav``;

const PrimaryMobileNavigation = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MobileListItems = styled.li``;

const MobileLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinkChild = styled.span`
  font-size: 1.75rem;
  letter-spacing: -0.0125px;
`;

const Description = styled.p`
  color: ${COLORS.gray[300]};
  font-size: 1.5rem;
  letter-spacing: -0.015px;

  margin-top: 16px;
`;

const LoginsWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 32px;
`;

const JoinsUsLink = styled(Link)`
  color: ${COLORS.white};
  text-decoration: none;
  padding: 8px 16px;
  background-color: ${COLORS.black};
  font-size: 1.125rem;
  border-radius: 24px;
`;

const LoginLink = styled(Link)`
  color: ${COLORS.black};
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid ${COLORS.black};
  font-size: 1.125rem;
  border-radius: 24px;
`;
