import React, { useState } from 'react';
import {
  Plus,
  Minus,
  Twitter,
  Facebook,
  Youtube,
  Instagram,
  MapPin,
} from 'react-feather';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { COLORS, QUERIES, WEIGHTS } from '../../variables';

function MobileFooter() {
  const [showFirstPopUp, setShowFirstPopUp] = useState(false);
  const [showSecondPopUp, setShowSecondPopUp] = useState(false);

  return (
    <MobileFooterWrapper>
      <TopSide>
        <TopSideLinks to="/">Gift Cards</TopSideLinks>
        <TopSideLinks to="/">Promotions</TopSideLinks>
        <TopSideLinks to="/">Find A Store</TopSideLinks>
        <TopSideLinks to="/">Sign Up For Email</TopSideLinks>
        <TopSideLinks to="/">Become A Member</TopSideLinks>
        <TopSideLinks to="/">Nike Journal</TopSideLinks>
        <TopSideLinks to="/">Send Us Feedback</TopSideLinks>
      </TopSide>
      <BreakLine />
      <BottomSide>
        <FooterButtons onClick={() => setShowFirstPopUp(!showFirstPopUp)}>
          <ButtonText>Get Help</ButtonText>
          {showFirstPopUp ? <Minus color="white" /> : <Plus color="white" />}
        </FooterButtons>
        {showFirstPopUp ? (
          <ButtonPopUp>
            <ButtonLinks to="/">Order Status</ButtonLinks>
            <ButtonLinks to="/">Shipping And Delivery</ButtonLinks>
            <ButtonLinks to="/">Returns</ButtonLinks>
            <ButtonLinks to="/">Payment Options</ButtonLinks>
          </ButtonPopUp>
        ) : null}
        <FooterButtons onClick={() => setShowSecondPopUp(!showSecondPopUp)}>
          <ButtonText>About Fresh Balance</ButtonText>
          {showSecondPopUp ? <Minus color="white" /> : <Plus color="white" />}
        </FooterButtons>
        {showSecondPopUp ? (
          <ButtonPopUp>
            <ButtonLinks to="/">News</ButtonLinks>
            <ButtonLinks to="/">Careers</ButtonLinks>
            <ButtonLinks to="/">Investors</ButtonLinks>
            <ButtonLinks to="/">Purpose</ButtonLinks>
          </ButtonPopUp>
        ) : null}

        <SocialMediaWrapper>
          <SocialMediaLink href="https://twitter.com/">
            <Twitter color="white" />
          </SocialMediaLink>
          <SocialMediaLink href="https://youtube.com/">
            <Youtube color="white" />
          </SocialMediaLink>
          <SocialMediaLink href="https://instagram.com/">
            <Instagram color="white" />
          </SocialMediaLink>
          <SocialMediaLink href="https://facebook.com/">
            <Facebook color="white" />
          </SocialMediaLink>
        </SocialMediaWrapper>
        <LocationWrapper>
          <MapPin color="white" />
          <CountryName>Poland</CountryName>
        </LocationWrapper>
      </BottomSide>
    </MobileFooterWrapper>
  );
}

export default MobileFooter;

const MobileFooterWrapper = styled.footer`
  background-color: ${COLORS.black};
  display: none;
  margin-top: 32px;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-left: 32px;
  margin-top: 24px;
`;

const TopSideLinks = styled(Link)`
  text-transform: uppercase;
  color: ${COLORS.white};
  text-decoration: none;
  font-size: 0.825rem;
  font-weight: ${WEIGHTS.medium};
`;

const BreakLine = styled.hr`
  width: 100%;
`;

const BottomSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FooterButtons = styled.button`
  display: flex;
  justify-content: space-between;
  background-color: inherit;
  border: none;
  padding: 0 32px;
  outline: none;
  cursor: pointer;
`;

const ButtonText = styled.span`
  text-transform: uppercase;
  color: ${COLORS.white};
  font-weight: ${WEIGHTS.medium};
`;

const ButtonPopUp = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  gap: 8px;
  margin-top: -4px;
`;

const ButtonLinks = styled(Link)`
  font-size: 0.85rem;
  text-decoration: none;
  color: ${COLORS.gray[300]};
`;

const SocialMediaWrapper = styled.div`
  margin-left: 32px;
  display: flex;
  gap: 8px;
`;

const SocialMediaLink = styled.a``;

const LocationWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  margin-left: 32px;
`;

const CountryName = styled.span`
  color: ${COLORS.white};
`;
