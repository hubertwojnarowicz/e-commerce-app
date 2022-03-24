import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { COLORS } from "../../variables";

function Shoe({ name, imgSrc, desc, price, salePrice }) {
  return (
    <ShoeLink to={ROUTES.DASHBOARD}>
      <ShoeWrapper>
        <ImageWrapper>
          <ShoeImg src={imgSrc} />
        </ImageWrapper>
        {salePrice ? <SaleFlag>Sale</SaleFlag> : null}
        <ShoeName>{name}</ShoeName>
        <ShoeDesc>{desc}</ShoeDesc>
        {salePrice ? (
          <ShoePrice style={{ color: "gray", textDecoration: "line-through" }}>
            ${price}
          </ShoePrice>
        ) : (
          <ShoePrice style={{ color: "black" }}>${price}</ShoePrice>
        )}

        {salePrice ? <SalePrice>${salePrice}</SalePrice> : null}
      </ShoeWrapper>
    </ShoeLink>
  );
}

export default Shoe;

const ShoeLink = styled(Link)`
  text-decoration: none;
`;

const ShoeWrapper = styled.article`
  position: relative;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
`;

const ShoeImg = styled.img`
  width: 100%;
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
`;

const ShoeName = styled.h4`
  color: ${COLORS.black};
  margin-top: 4px;
`;

const ShoeDesc = styled.p`
  color: ${COLORS.gray[600]};
  margin-top: 2px;
`;

const ShoePrice = styled.span`
  color: ${COLORS.black};
  margin-top: 2px;
`;

const SalePrice = styled.span`
  color: ${COLORS.black};
  margin-left: 8px;
`;

const SaleFlag = styled.div`
  position: absolute;
  top: 6px;
  right: -4px;
  background-color: #318ce7;
  padding: 4px 12px;
  color: ${COLORS.white};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
