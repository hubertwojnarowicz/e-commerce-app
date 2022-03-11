import React from "react";
import { COLORS } from "../../variables";
import styled from "styled-components/macro";
import { Instagram, Twitter, Facebook, Youtube, MapPin } from "react-feather";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterWrapper>
      <LeftSideWrapper>
        <FirstColumn>
          <PagesLink
            style={{
              textTransform: "uppercase",
              fontSize: "0.875rem",
              color: `${COLORS.white}`,
            }}
            to="/"
          >
            Gift Card
          </PagesLink>
          <PagesLink
            style={{
              textTransform: "uppercase",
              fontSize: "0.875rem",
              color: `${COLORS.white}`,
            }}
            to="/"
          >
            Find A Store
          </PagesLink>
          <PagesLink
            style={{
              textTransform: "uppercase",
              fontSize: "0.875rem",
              color: `${COLORS.white}`,
            }}
            to="/"
          >
            Sign Up For Email
          </PagesLink>
          <PagesLink
            style={{
              textTransform: "uppercase",
              fontSize: "0.875rem",
              color: `${COLORS.white}`,
            }}
            to="/"
          >
            Become A Member
          </PagesLink>
        </FirstColumn>
        <SecondColumn>
          <PagesLink
            to="/"
            style={{
              textTransform: "uppercase",
              fontSize: "0.875rem",
              color: `${COLORS.white}`,
            }}
          >
            Get Help
          </PagesLink>
          <PagesLink to="/" style={{ fontSize: "0.825rem" }}>
            Order Status
          </PagesLink>
          <PagesLink to="/" style={{ fontSize: "0.825rem" }}>
            Shipping and Delivery
          </PagesLink>
          <PagesLink to="/" style={{ fontSize: "0.825rem" }}>
            Return
          </PagesLink>
          <PagesLink to="/" style={{ fontSize: "0.825rem" }}>
            Payment Options
          </PagesLink>
        </SecondColumn>
        <ThirdColumn>
          <PagesLink
            to="/"
            style={{
              textTransform: "uppercase",
              fontSize: "0.875rem",
              color: `${COLORS.white}`,
            }}
          >
            About Fresh Balance
          </PagesLink>
          <PagesLink to="/" style={{ fontSize: "0.825rem" }}>
            News
          </PagesLink>
          <PagesLink to="/" style={{ fontSize: "0.825rem" }}>
            Careers
          </PagesLink>{" "}
          <PagesLink to="/" style={{ fontSize: "0.825rem" }}>
            Ivestors
          </PagesLink>
        </ThirdColumn>
        <FourthColumn>
          <PagesLink
            to="/"
            style={{
              textTransform: "uppercase",
              fontSize: "0.875rem",
              color: `${COLORS.white}`,
            }}
          >
            Fresh Balance Apps
          </PagesLink>
          <PagesLink to="/" style={{ fontSize: "0.825rem" }}>
            Fresh Balance Run App
          </PagesLink>
          <PagesLink to="/" style={{ fontSize: "0.825rem" }}>
            Fresh Balance Training App
          </PagesLink>
        </FourthColumn>
      </LeftSideWrapper>
      <RightSideWrapper>
        <SocialMediaWrapper>
          <SocialMediaLink href="https://www.instagram.com/" target="_blank">
            <Instagram color="white" />
          </SocialMediaLink>
          <SocialMediaLink href="https://www.twitter.com/" target="_blank">
            <Twitter color="white" />
          </SocialMediaLink>
          <SocialMediaLink href="https://www.facebook.com/" target="_blank">
            <Facebook color="white" />
          </SocialMediaLink>
          <SocialMediaLink href="https://www.youtube.com/" target="_blank">
            <Youtube color="white" />
          </SocialMediaLink>
        </SocialMediaWrapper>
        <LocationWrapper>
          <MapPin />
          <CountryName>Poland</CountryName>
        </LocationWrapper>
      </RightSideWrapper>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  background-color: ${COLORS.black};
  display: flex;
  width: 100%;
  padding: 32px;
  justify-content: space-between;
  margin-top: 32px;
`;

const LeftSideWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px;
`;

const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ThirdColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const FourthColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const PagesLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.gray[300]};

  &:hover {
    color: ${COLORS.white};
    transition: 0.4s;
  }
`;

const RightSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 8px;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialMediaLink = styled.a``;

const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${COLORS.white};
  margin-top: 4px;
  gap: 8px;
`;
const CountryName = styled.span`
  color: ${COLORS.white};
  margin-top: 2px;
`;
