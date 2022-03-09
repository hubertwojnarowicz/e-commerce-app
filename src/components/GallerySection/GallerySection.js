import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { COLORS, QUERIES } from '../../variables';

function GallerySection() {
  return (
    <GalleryWrapper>
      <GalleryTitle>More Fresh Balance products</GalleryTitle>
      <GalleryGrid>
        <MansLink to="/man">
          <MansFigure>
            <MansImage src="images/mans.jpg" />
            <MansCaption>Mans</MansCaption>
          </MansFigure>
        </MansLink>
        <WomansLink to="woman">
          <WomanFigure>
            <WomansImage src="images/womans.jpg" />
            <WomansCaption>Womans</WomansCaption>
          </WomanFigure>
        </WomansLink>
        <KidsLink to="/kids">
          <KidsFigure>
            <KidsImage src="images/kids.jpg" />
            <KidsCaption>Kids</KidsCaption>
          </KidsFigure>
        </KidsLink>
      </GalleryGrid>
    </GalleryWrapper>
  );
}

export default GallerySection;

const GalleryWrapper = styled.section`
  width: 100%;
  display: grid;
  place-content: center;
  margin-top: 32px;
`;

const GalleryTitle = styled.h2`
  font-size: 2rem;
  margin-left: 32px;
`;

const GalleryGrid = styled.div`
  max-width: 1920px;
  display: grid;
  place-content: center;
  margin: 0 32px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 12px;
  margin-top: 12px;
`;

const MansLink = styled(Link)`
  grid-row: 1 / 3;
  height: 100%;
`;
const WomansLink = styled(Link)``;
const KidsLink = styled(Link)``;

const KidsFigure = styled.figure`
  position: relative;
`;
const MansFigure = styled.figure`
  position: relative;
  height: 100%;
`;
const WomanFigure = styled.figure`
  position: relative;
`;

const KidsImage = styled.img`
  display: block;
  width: 100%;
`;
const MansImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 0%;
`;
const WomansImage = styled.img`
  display: block;
  width: 100%;
`;

const MansCaption = styled.figcaption`
  position: absolute;
  padding: 8px 16px;
  background-color: ${COLORS.white};
  color: ${COLORS.black};
  border-radius: 24px;
  font-size: 1.25rem;
  left: 2.5%;
  bottom: 2.5%;

  &:hover {
    background-color: ${COLORS.gray[900]};
    transition: 0.4s;
  }

  @media ${QUERIES.tabletAndSmaller} {
    font-size: 1.125rem;
    padding: 6px 16px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 0.95rem;
    padding: 4px 12px;
  }
`;
const WomansCaption = styled.figcaption`
  position: absolute;
  padding: 8px 16px;
  font-size: 1.25rem;
  background-color: ${COLORS.white};
  color: ${COLORS.black};
  border-radius: 24px;
  right: 5%;
  bottom: 5%;

  &:hover {
    background-color: ${COLORS.gray[900]};
    transition: 0.4s;
  }

  @media ${QUERIES.tabletAndSmaller} {
    font-size: 1.125rem;
    padding: 6px 16px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 0.95rem;
    padding: 4px 12px;
  }
`;
const KidsCaption = styled.figcaption`
  position: absolute;
  font-size: 1.25rem;
  padding: 8px 16px;
  background-color: ${COLORS.white};
  color: ${COLORS.black};
  border-radius: 24px;
  right: 5%;
  bottom: 5%;

  &:hover {
    background-color: ${COLORS.gray[900]};
    transition: 0.4s;
  }

  @media ${QUERIES.tabletAndSmaller} {
    font-size: 1.125rem;
    padding: 6px 16px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 0.95rem;
    padding: 4px 12px;
  }
`;
