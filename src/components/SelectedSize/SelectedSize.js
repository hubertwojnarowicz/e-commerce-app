import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { X } from 'react-feather';
import { COLORS } from '../../variables';
import { useCart } from 'react-use-cart';

function SelectedSize({ selectedSize, item }) {
  const { updateItemQuantity } = useCart();

  const [size, setSize] = useState(selectedSize);
  const removeClickedSize = (s) => {
    setSize(size.filter((size) => size !== s));
    updateItemQuantity(item.id, item.quantity - 1);
  };

  return (
    <SizeWrapper>
      <SelectedSizeText>Selected size/sizes:</SelectedSizeText>
      <SizeFlex>
        {size.map((s) => {
          return (
            <SizeButton onClick={() => removeClickedSize(s)}>
              <SizeButtonText>{s}</SizeButtonText>
              <XIcon size="20" />
            </SizeButton>
          );
        })}
      </SizeFlex>
    </SizeWrapper>
  );
}

export default SelectedSize;

const SizeWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const SelectedSizeText = styled.p`
  white-space: nowrap;
`;

const SizeFlex = styled.div`
  display: flex;
  gap: 8px;
`;

const SizeButton = styled.button`
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  background-color: transparent;
  border: none;
  position: relative;
  outline: none;
  border: 1px solid ${COLORS.gray[900]};
  cursor: pointer;
`;

const SizeButtonText = styled.span``;

const XIcon = styled(X)`
  position: absolute;
  right: -8px;
  top: -8px;
`;
