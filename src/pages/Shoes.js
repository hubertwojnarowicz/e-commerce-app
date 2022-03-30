import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AllShoes } from '../data/data';
import styled from 'styled-components/macro';
import SuperHeader from '../components/SuperHeader';
import Header from '../components/Header/Header';
import SizeGrid from '../components/SizeGrid';
import { QUERIES } from '../variables';
import Footer from '../components/Footer';

function Shoes() {
  const { id } = useParams();
  const numIndex = parseInt(id);
  const findCorrespondingShoe = AllShoes.filter((shoe) => shoe.id === numIndex);

  return (
    <>
      <SuperHeader />
      <Header />
      <MaxWidthWrapper>
        {findCorrespondingShoe.map((shoe) => {
          const { id, imgSrc, name, desc, price, salePrice, sizes } = shoe;
          return (
            <ShoeWrapper key={id}>
              <ImageColumnWrapper key={id}>
                <ShoeImg src={imgSrc} alt="shoe" />
              </ImageColumnWrapper>
              <RightColumnWrapper>
                <ShoeName>{name}</ShoeName>
                <ShoeDesc>{desc}</ShoeDesc>
                <PriceWrapper>
                  {salePrice ? <SalePrice>${salePrice}</SalePrice> : null}
                  {salePrice ? (
                    <ShoePrice
                      style={{
                        color: 'gray',
                        textDecoration: 'line-through',
                        marginLeft: '8px',
                      }}
                    >
                      ${price}
                    </ShoePrice>
                  ) : (
                    <ShoePrice style={{ color: 'black' }}>${price}</ShoePrice>
                  )}
                </PriceWrapper>
                <SizeGrid sizes={sizes} shoe={findCorrespondingShoe} />
              </RightColumnWrapper>
            </ShoeWrapper>
          );
        })}
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}

export default Shoes;

const MaxWidthWrapper = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 56px;
  height: 73%;
`;

const ShoeWrapper = styled.div`
  display: flex;
  gap: 64px;
  margin-bottom: 16px;
  margin-left: 32px;
  margin-right: 32px;

  @media ${QUERIES.tabletAndSmaller} {
    display: grid;
  }
`;

const ImageColumnWrapper = styled.div`
  min-width: 440px;
  max-width: 600px;
`;

const ShoeImg = styled.img`
  width: 100%;
`;

const RightColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ShoeName = styled.h1`
  font-size: 1.825rem;
  font-weight: 500;
  margin-top: -8px;
`;

const ShoeDesc = styled.h2`
  font-weight: 500;
  font-size: 1rem;
`;

const PriceWrapper = styled.div`
  margin-top: 12px;
`;

const ShoePrice = styled.span`
  font-size: 1.125rem;
`;

const SalePrice = styled.span`
  font-size: 1.125rem;
`;
