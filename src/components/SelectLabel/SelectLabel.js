import React from 'react';
import styled from 'styled-components/macro';
import { useCart } from 'react-use-cart';
import { Minus, Plus } from 'react-feather';
import { COLORS } from '../../variables';

function SelectLabel({ id, name, item, selectedSize }) {
  const { updateItemQuantity } = useCart();

  return (
    <QuantityWrapper>
      <Quantity>Quantity: {item.quantity}</Quantity>
      {selectedSize.length > 1 ? null : (
        <ButtonsWrapper>
          <MinusBtn
            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
          >
            <Minus size="18" />
          </MinusBtn>
          <PlusBtn
            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
          >
            <Plus size="18" />
          </PlusBtn>
        </ButtonsWrapper>
      )}
    </QuantityWrapper>
  );
}

export default SelectLabel;

const QuantityWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 4px;
`;

const Quantity = styled.p``;

const ButtonsWrapper = styled.div`
  display: flex;

  gap: 16px;
`;

const MinusBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLORS.gray[900]};
  border-radius: 8px;
  height: 24px;
  cursor: pointer;
`;

const PlusBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLORS.gray[900]};
  border-radius: 8px;
  height: 24px;
  cursor: pointer;
`;
