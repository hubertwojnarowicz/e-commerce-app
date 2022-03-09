import React, { useEffect, useRef, useState } from 'react';
import { Popular } from '../../data/data';

import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { COLORS, QUERIES } from '../../variables';
import { ChevronLeft, ChevronRight, Tablet } from 'react-feather';

function Slider() {
  const wrapperWidth = useRef(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(wrapperWidth.current.clientWidth);
  }, [height]);

  return (
    <ShoeWrapper>
      <ShoeHeadingWrapper>
        <SliderTitle>Popular Right Now</SliderTitle>
        <ShoeButtonsWrapper>
          <ArrowButton>
            <ChevronLeft size={36} />
          </ArrowButton>
          <ArrowButton>
            <ChevronRight size={36} />
          </ArrowButton>
        </ShoeButtonsWrapper>
      </ShoeHeadingWrapper>
      <ImagesWrapper ref={wrapperWidth}>
        {Popular.map((shoe) => {
          const { index, imgSrc, name, price, desc } = shoe;
          return (
            <ShoeItem key={index}>
              <ShoeLink to="/">
                <DesktopShoeImg
                  src={imgSrc}
                  alt="Shoe"
                  height={height / 3.05}
                />

                <TabletShoeImg src={imgSrc} alt="Shoe" height={height / 2.05} />
                <PhoneShoeImg src={imgSrc} alt="Shoe" height={height / 1.05} />
                <ShoeNamePriceWrapper>
                  <ShoeName>{name}</ShoeName>
                  <ShoePrice>${price}</ShoePrice>
                </ShoeNamePriceWrapper>
                <ShoeDesc>{desc}</ShoeDesc>
              </ShoeLink>
            </ShoeItem>
          );
        })}
      </ImagesWrapper>
    </ShoeWrapper>
  );
}

export default Slider;

const ShoeWrapper = styled.section`
  display: grid;
  margin-top: 48px;
  gap: 32px;
  place-content: center;
`;

const ShoeHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 32px;
`;

const ShoeButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const ArrowButton = styled.button`
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16 / 9;
`;

const SliderTitle = styled.h2`
  font-size: 2rem;
`;

const ImagesWrapper = styled.ul`
  max-width: 1920px;
  display: flex;
  overflow: auto;
  gap: 16px;
  margin-left: 32px;
  margin-right: 32px;
`;

const ShoeItem = styled.li``;

const ShoeLink = styled(Link)`
  text-decoration: none;
`;

const DesktopShoeImg = styled.img`
  object-fit: contain;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const TabletShoeImg = styled.img`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: block;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;
const PhoneShoeImg = styled.img`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: block;
  }
`;

const ShoeNamePriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
`;

const ShoeName = styled.h4`
  color: ${COLORS.black};
  margin-left: 2px;
  font-size: 1.25rem;
`;

const ShoePrice = styled.span`
  margin-right: 8px;

  color: ${COLORS.black};
`;

const ShoeDesc = styled.p`
  margin-top: 4px;
  color: ${COLORS.gray[300]};
  margin-bottom: 4px;
  margin-left: 2px;
`;
