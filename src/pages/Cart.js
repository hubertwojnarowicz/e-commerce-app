import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import styled from 'styled-components/macro';
import UserContext from '../context/user';
import { COLORS, QUERIES } from '../variables';
import * as ROUTES from '../constants/routes';
import Header from '../components/Header/Header';
import SuperHeader from '../components/SuperHeader';
import { Heart, Trash } from 'react-feather';
import SelectLabel from '../components/SelectLabel';
import Footer from '../components/Footer';
import SelectedSize from '../components/SelectedSize';

function Cart() {
  const { isEmpty, items, removeItem, cartTotal } = useCart();

  const { user } = useContext(UserContext);

  const removeAndClearItem = (id, selectedSize) => {
    removeItem(id);
    selectedSize.length = 0;
  };

  if (isEmpty)
    return (
      <>
        <SuperHeader />
        <Header />
        <CenterCart>
          <CartWrapper>
            <LeftSection>
              <BagTitle>Bag</BagTitle>
              <EmptyBag>There are no items in your bag.</EmptyBag>
            </LeftSection>
            <RightSection>
              <Summary>Summary</Summary>
              <SubTotalWrapper>
                <SubTotal>Subtotal</SubTotal>
                <SubTotalPrice>$0.00</SubTotalPrice>
              </SubTotalWrapper>
              <TotalWrapper>
                <Total>Total</Total>
                <TotalPrice>$0.00</TotalPrice>
              </TotalWrapper>
            </RightSection>
          </CartWrapper>
        </CenterCart>
        <Footer />
      </>
    );
  return (
    <>
      <SuperHeader />
      <Header />
      <CenterCart>
        <CartWrapper>
          <LeftSection>
            {user ? null : (
              <FreeShippingWrapper>
                <FreeShippingTitle>
                  Free Shipping for Members.
                </FreeShippingTitle>
                <FreeShippingDesc>
                  Become a Fresh Balance Member for fast and free shipping.{' '}
                  <FreeShippingLinks to={ROUTES.SIGNUP}>
                    Joins us
                  </FreeShippingLinks>
                  or
                  <FreeShippingLinks to={ROUTES.SIGNIN}>
                    Sign-in
                  </FreeShippingLinks>
                </FreeShippingDesc>
              </FreeShippingWrapper>
            )}
            <BagTitle>Bag</BagTitle>
            {items.map((item) => {
              const { imgSrc, name, desc, selectedSize, price, id } = item;

              return (
                <BagItemWrapper key={id}>
                  <ImgWrapper>
                    <ShoeImg src={imgSrc} />
                  </ImgWrapper>
                  <ShoeInfoWrapper>
                    <ShoeName>{name}</ShoeName>
                    <ShoeDesc>{desc}</ShoeDesc>
                    <SelectedSize selectedSize={selectedSize} item={item} />
                    <SelectLabel item={item} {...item} />
                    <IconsWrapper>
                      <HeartButton>
                        <HeartIcon />
                      </HeartButton>
                      <TrashButton
                        onClick={() => removeAndClearItem(id, selectedSize)}
                      >
                        <TrashIcon />
                      </TrashButton>
                    </IconsWrapper>
                  </ShoeInfoWrapper>
                  <PriceWrapper>
                    <Price>${price * item.quantity}</Price>
                  </PriceWrapper>
                </BagItemWrapper>
              );
            })}
          </LeftSection>
          <RightSection>
            <Summary>Summary</Summary>
            <SubTotalWrapper>
              <SubTotal>Subtotal</SubTotal>
              <SubTotalPrice>${cartTotal}</SubTotalPrice>
            </SubTotalWrapper>
            <TotalWrapper>
              <Total>Total</Total>
              <TotalPrice>${cartTotal}</TotalPrice>
            </TotalWrapper>
            <CheckoutButtonsWrapper>
              <CheckoutBtn>
                <CheckoutText>Checkout</CheckoutText>
              </CheckoutBtn>
              <PayPalBtn>
                <PayPalText>Pay</PayPalText>
                <PayPalText>Pal</PayPalText>
              </PayPalBtn>
            </CheckoutButtonsWrapper>
          </RightSection>
        </CartWrapper>
      </CenterCart>
      <Footer />
    </>
  );
}

export default Cart;

const CenterCart = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CartWrapper = styled.div`
  display: flex;
  column-gap: calc(100vw / 12);
  margin-top: 48px;
  margin-left: 32px;
  margin-right: 32px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    width: 100%;
  }
`;

const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FreeShippingWrapper = styled.div`
  border: 1px solid ${COLORS.gray[900]};
  padding: 12px;
`;

const FreeShippingTitle = styled.h4`
  font-size: 1.25rem;
  color: #fa5400;
  font-weight: 500;
`;

const FreeShippingDesc = styled.p`
  color: ${COLORS.gray[500]};
  display: flex;
  gap: 4px;
  white-space: nowrap;
`;

const FreeShippingLinks = styled(Link)`
  color: ${COLORS.gray[300]};
  white-space: nowrap;
`;

const BagTitle = styled.h4`
  font-size: 1.75rem;
  font-weight: 500;
`;

const BagItemWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const ImgWrapper = styled.div`
  width: 150px;
  height: 150px;

  @media ${QUERIES.tabletAndSmaller} {
    width: 125px;
    height: 125px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 105px;
    height: 105px;
  }
`;

const ShoeImg = styled.img`
  width: 100%;
`;

const ShoeInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ShoeName = styled.p``;

const ShoeDesc = styled.p``;

const IconsWrapper = styled.div`
  display: flex;
  margin-top: auto;

  gap: 8px;
`;

const HeartButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`;

const HeartIcon = styled(Heart)``;
const TrashButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`;

const TrashIcon = styled(Trash)``;

const PriceWrapper = styled.div`
  margin-left: auto;
`;

const Price = styled.span``;

const EmptyBag = styled.p``;

const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 360px;
  @media ${QUERIES.tabletAndSmaller} {
    margin-top: 24px;
  }
`;

const Summary = styled.h4`
  margin-bottom: 32px;
  font-size: 1.75rem;
  font-weight: 500;
`;

const SubTotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding: 12px 0px;
  border-top: 1px solid ${COLORS.gray[900]};
  border-bottom: 1px solid ${COLORS.gray[900]};
`;

const SubTotal = styled.p``;

const SubTotalPrice = styled.span``;

const Total = styled.p``;

const TotalPrice = styled.span`
  font-weight: bold;
`;
const CheckoutButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
`;

const CheckoutBtn = styled.button`
  padding: 18px 24px;

  cursor: pointer;
  outline: none;
  border: none;
  background-color: ${COLORS.black};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
`;

const CheckoutText = styled.span`
  color: ${COLORS.white};
  font-size: 1.125rem;
`;

const PayPalBtn = styled.button`
  padding: 18px 24px;
  outline: none;
  width: 300px;
  width: 100%;

  cursor: pointer;
  border: none;
  background-color: ${COLORS.gray[1000]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  border: 1px solid ${COLORS.gray[900]};
`;

const PayPalText = styled.span`
  font-style: italic;
  color: #009cde;
  font-weight: 600;
  font-size: 1.025rem;

  &:first-child {
    color: #003087;
    font-weight: 600;
    font-size: 1.025rem;
  }
`;
