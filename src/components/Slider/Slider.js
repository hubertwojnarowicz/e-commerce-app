import React, { useEffect, useRef, useState } from 'react';
import { Popular } from '../../data/data';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { COLORS, QUERIES } from '../../variables';
import * as ROUTES from '../../constants/routes';
import { ChevronLeft, ChevronRight } from 'react-feather';

function Slider() {
  const wrapperWidth = useRef(0);
  const slideLeft = useRef(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(wrapperWidth.current.clientWidth);
  }, [height]);

  const scroll = (scrollValue) => {
    wrapperWidth.current.scrollLeft += scrollValue;
    // there is a little slider move when the arrows button are clicked
    // this issue is caused by gap, i dont know how to fix that probably use gap: calc()
  };

  return (
    <ShoeWrapper>
      <ShoeHeadingWrapper>
        <SliderTitle>Popular Right Now</SliderTitle>
        <ShoeButtonsWrapper>
          <ArrowButton
            onClick={() => scroll(-slideLeft.current.clientWidth - 17)}
          >
            <ChevronLeft size={32} />
          </ArrowButton>
          <ArrowButton
            onClick={() => scroll(slideLeft.current.clientWidth + 17)}
          >
            <ChevronRight size={32} />
          </ArrowButton>
        </ShoeButtonsWrapper>
      </ShoeHeadingWrapper>
      <ImagesWrapper ref={wrapperWidth}>
        {Popular.map((shoe) => {
          const { index, imgSrc, name, price, desc } = shoe;
          return (
            <ShoeItem key={index} ref={slideLeft}>
              <ShoeLink to={ROUTES.NEWRELEASES}>
                <ImageWrapper>
                  <DesktopShoeImg
                    src={imgSrc}
                    alt="Shoe"
                    height={height / 3.09}
                  />
                </ImageWrapper>

                <TabletShoeImg src={imgSrc} alt="Shoe" height={height / 2.04} />
                <PhoneShoeImg src={imgSrc} alt="Shoe" height={height / 1} />
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
  margin-bottom: 48px;

  gap: 32px;
  place-content: center;
`;

const ShoeHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px;
  margin-right: 32px;
`;

const ShoeButtonsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  gap: 8px;
`;

const ArrowButton = styled.button`
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  cursor: pointer;
`;

const SliderTitle = styled.h2`
  font-size: 2rem;
`;

const ImagesWrapper = styled.ul`
  max-width: 1920px;
  display: flex;
  overflow-x: scroll;
  gap: 16px;
  margin-left: 32px;
  margin-right: 32px;
`;

const ShoeItem = styled.li`
  position: relative;
`;

const ShoeLink = styled(Link)`
  text-decoration: none;
  animation: fadeVisibility 0.5s;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
`;

const DesktopShoeImg = styled.img`
  display: block;
  transform-origin: 50% 75%;
  transition: transform 600ms;
  will-change: transform;
  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${ShoeLink}:hover &,
    ${ShoeLink}:focus & {
      transform: scale(1.1);
      transition: transform 200ms;
    }
  }
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
  margin-left: 4px;
  font-size: 1.25rem;
`;

const ShoePrice = styled.span`
  margin-right: 12px;

  color: ${COLORS.black};
`;

const ShoeDesc = styled.p`
  margin-top: 4px;
  color: ${COLORS.gray[300]};
  margin-bottom: 12px;
  margin-left: 4px;
`;
