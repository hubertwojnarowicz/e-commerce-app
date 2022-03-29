import React from "react";
import { useParams } from "react-router-dom";
import { AllShoes } from "../data/data";
import styled from "styled-components/macro";
import SuperHeader from "../components/SuperHeader";
import Header from "../components/Header/Header";
import SizeGrid from "../components/SizeGrid/SizeGrid";
import { Heart } from "react-feather";
import { COLORS, QUERIES } from "../variables";
import Footer from "../components/Footer";

function Shoes() {
  const { index } = useParams();
  const numIndex = parseInt(index);
  const findCorrespondingShoe = AllShoes.filter(
    (shoe) => shoe.index === numIndex
  );

  return (
    <>
      <SuperHeader />
      <Header />
      <MaxWidthWrapper>
        <ShoeWrapper>
          {findCorrespondingShoe.map((shoe) => {
            const { index, imgSrc, name, forWho, desc, price, salePrice } =
              shoe;
            return (
              <>
                <ImageColumnWrapper key={index}>
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
                          color: "gray",
                          textDecoration: "line-through",
                          marginLeft: "8px",
                        }}
                      >
                        ${price}
                      </ShoePrice>
                    ) : (
                      <ShoePrice style={{ color: "black" }}>${price}</ShoePrice>
                    )}
                  </PriceWrapper>
                  <SizeForm>
                    <SizeInfoWrapper>
                      <SelectSize>Select Size</SelectSize>
                      <SizeGuide>Size Guide</SizeGuide>
                    </SizeInfoWrapper>
                    <SizeGrid forWho={forWho} />
                    <ButtonWrapper>
                      <BagButton type="submit">Add to Bag</BagButton>
                      <FavouriteButton type="submit">
                        <FavouriteText>Favourite</FavouriteText>
                        <Heart />
                      </FavouriteButton>
                    </ButtonWrapper>
                  </SizeForm>
                </RightColumnWrapper>
              </>
            );
          })}
        </ShoeWrapper>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}

export default Shoes;

const MaxWidthWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;

const ShoeWrapper = styled.div`
  display: flex;
  gap: 64px;
  margin-bottom: 32px;
  margin-left: 32px;
  margin-right: 32px;

  @media ${QUERIES.tabletAndSmaller} {
    display: grid;
  }
`;

const ImageColumnWrapper = styled.div`
  min-width: 440px;
  max-width: 550px;
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

const ShoePrice = styled.span``;

const SalePrice = styled.span``;

const SizeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const SizeInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectSize = styled.span`
  cursor: pointer;
`;

const SizeGuide = styled.span`
  color: ${COLORS.gray[500]};
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

const BagButton = styled.button`
  padding: 16px 24px;
  background-color: ${COLORS.black};
  border-radius: 32px;
  color: ${COLORS.white};
  border: none;
  outline: none;
  font-size: 1.125rem;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.gray[100]};
    transition: 300ms;
  }
`;

const FavouriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background-color: ${COLORS.white};
  color: ${COLORS.black};
  border: none;
  outline: none;
  font-size: 1.125rem;
  padding: 16px 24px;
  border-radius: 32px;
  cursor: pointer;
  border: 1px solid ${COLORS.gray[600]};

  &:hover {
    border-color: ${COLORS.gray[200]};
    transition: 300ms;
  }
`;

const FavouriteText = styled.span``;
