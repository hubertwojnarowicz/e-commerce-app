import React from 'react';
import styled from 'styled-components/macro';
import { Heart } from 'react-feather';
import { COLORS } from '../../variables';

function SizeForm({ checked, forWho }) {
  return (
    <SizeFormWrapper>
      <SizeInfoWrapper>
        <SelectSize>Select Size</SelectSize>
        <SizeGuide>Size Guide</SizeGuide>
      </SizeInfoWrapper>
      <ButtonWrapper>
        <BagButton type="submit">Add to Bag</BagButton>
        <FavouriteButton type="submit">
          <FavouriteText>Favourite</FavouriteText>
          <Heart />
        </FavouriteButton>
      </ButtonWrapper>
    </SizeFormWrapper>
  );
}

export default SizeForm;

const SizeFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 24px;
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
  margin-top: 42px;
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
