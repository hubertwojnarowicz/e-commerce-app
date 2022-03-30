import React from 'react';
import { useCart } from 'react-use-cart';
import styled from 'styled-components/macro';

function Cart() {
  const { isEmpty, items, totalItems, totalUniqueItems, cartTotal, emptyCart } =
    useCart();
  console.log(items);
  if (isEmpty)
    return (
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
          <Line />

          <TotalWrapper>
            <Total>Total</Total>
            <TotalPrice>$0.00</TotalPrice>
          </TotalWrapper>
          <Line />
        </RightSection>
      </CartWrapper>
    );
  return (
    <RightSection>
      {items.map((item) => {
        return <img src={item.imgSrc} />;
      })}
      <button onClick={() => emptyCart()}></button>;
    </RightSection>
  );
}

export default Cart;

const CartWrapper = styled.main``;

const LeftSection = styled.section``;

const BagTitle = styled.h4``;

const EmptyBag = styled.p``;

const RightSection = styled.section``;

const Summary = styled.h4``;

const SubTotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubTotal = styled.p``;

const SubTotalPrice = styled.span``;

const Line = styled.hr``;

const Total = styled.p``;

const TotalPrice = styled.span``;
