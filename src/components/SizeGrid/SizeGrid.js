import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { COLORS, QUERIES } from '../../variables';
import { Heart } from 'react-feather';
import { useCart } from 'react-use-cart';

function SizeGrid({ sizes, shoe }) {
  const { addItem } = useCart();

  const [error, setError] = useState('');
  const [checkedValue, setCheckedValue] = useState('');
  const findChecked = (e) => {
    if (e.target.checked) {
      setCheckedValue(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checkedValue) {
      setError('Please select size');
    }

    const sizesArr = shoe[0].selectedSize;
    sizesArr.push(checkedValue);
    addItem(...shoe);
  };

  return (
    <SizeForm onSubmit={handleSubmit}>
      <SizeInfoWrapper>
        <SelectSize>Select Size</SelectSize>
        <SizeGuide>Size Guide</SizeGuide>
      </SizeInfoWrapper>
      <GridWrapper>
        {sizes.map((size) => {
          return (
            <OneCube key={Math.random() * 2}>
              <RadioInput
                type="radio"
                value={size}
                name="size"
                id={size}
                onChange={findChecked}
                checked={checkedValue == size} // cant use === because kids sizes have letters
              />
              <ShoeLabel htmlFor={size}>{size}</ShoeLabel>
            </OneCube>
          );
        })}
      </GridWrapper>
      {error}
      <ButtonWrapper>
        <BagButton type="submit">Add to Bag</BagButton>
        <FavouriteButton type="submit">
          <FavouriteText>Favourite</FavouriteText>
          <Heart />
        </FavouriteButton>
      </ButtonWrapper>
    </SizeForm>
  );
}

export default SizeGrid;

const SizeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 24px;
  margin-bottom: 24px;
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

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 70px);
  gap: 8px;

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: repeat(5, 19%);
  }

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: repeat(3, 31%);
  }
`;

const OneCube = styled.div`
  position: relative;
  height: 48px;
`;

const RadioInput = styled.input`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
  border: 1px solid ${COLORS.gray[800]};
  padding: 0;
  margin: 0;
  cursor: pointer;

  &:hover {
    border-color: ${COLORS.black};
  }

  &:checked {
    border: 1px solid ${COLORS.black};
  }
`;

const ShoeLabel = styled.label`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  z-index: -10;
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
