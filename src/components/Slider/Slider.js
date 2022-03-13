import React, { useEffect, useRef, useState } from 'react';
import { Popular } from '../../data/data';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { COLORS, QUERIES } from '../../variables';
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
              <ShoeLink to="/new-release">
                <DesktopShoeImg
                  src={imgSrc}
                  alt="Shoe"
                  height={height / 3.06}
                />

                <TabletShoeImg src={imgSrc} alt="Shoe" height={height / 2.05} />
                <PhoneShoeImg src={imgSrc} alt="Shoe" height={height / 1.03} />
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
  transition: all 0.3s;
`;

const ShoeLink = styled(Link)`
  text-decoration: none;
`;

const DesktopShoeImg = styled.img`
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
  margin-bottom: 8px;
  margin-left: 4px;
`;
