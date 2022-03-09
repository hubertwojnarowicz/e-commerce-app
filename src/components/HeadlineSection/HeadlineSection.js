import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { COLORS, QUERIES, WEIGHTS } from '../../variables';

function HeadlineSection() {
  return (
    <SectionWrapper>
      <HeadlineFigure>
        <FigureImg src="images/heading.jpg" />
        <ImageCaption>
          <Novelty>New Release!</Novelty>
          <ShoesTitle>Nike Air Max 1</ShoesTitle>
          <ShoesDescription>
            New Air Max 1 is now available! Get out of your comfort zone and
            open up to creativity with a retro-inspired look.
          </ShoesDescription>
          <LinkToBuy to="new-release">Get Them Now</LinkToBuy>
        </ImageCaption>
      </HeadlineFigure>
    </SectionWrapper>
  );
}

export default HeadlineSection;

const SectionWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;

const HeadlineFigure = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1920px;
  margin: 0 32px;
`;

const FigureImg = styled.img`
  width: 100%;
`;

const ImageCaption = styled.figcaption`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 24px;
  gap: 12px;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 8px;
  }
`;

const Novelty = styled.p`
  font-size: 1.125rem;
`;

const ShoesTitle = styled.h1`
  font-size: 4rem;
  font-weight: ${WEIGHTS.bold};
  text-transform: uppercase;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: 2.75rem;
  }

  @media ${QUERIES.tabletAndSmaller} {
    font-size: 2rem;
  }
`;

const ShoesDescription = styled.p`
  width: 80ch;
  text-align: center;

  @media ${QUERIES.tabletAndSmaller} {
    width: 50ch;
    font-size: 0.925rem;
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 30ch;
  }
`;

const LinkToBuy = styled(Link)`
  border-radius: 32px;
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  font-size: 1.25rem;
  padding: 12px 16px;
  text-decoration: none;
  margin-bottom: 16px;

  &:hover {
    background-color: ${COLORS.gray[200]};
    transition: 0.4s;
  }

  @media ${QUERIES.tabletAndSmaller} {
    font-size: 1rem;
  }
`;
