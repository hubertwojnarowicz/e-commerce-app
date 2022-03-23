import React from 'react';
import { ChevronLeft } from 'react-feather';
import styled from 'styled-components/macro';
import { COLORS, QUERIES } from '../../variables';

function MobileNavUser({ isOpen, onDismiss, children }) {
  if (!isOpen) return null;
  return (
    <UserButton>
      <ExitButton onClick={onDismiss}>
        <ChevronLeft />
        <ExitButtonText>All</ExitButtonText>
      </ExitButton>
      {children}
    </UserButton>
  );
}

export default MobileNavUser;

const UserButton = styled.div`
  background-color: ${COLORS.white};
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 12px 24px 0px 24px;
  gap: 16px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media ${QUERIES.tabletAndSmaller} {
    inset: 0% 0% 0% 60%;
  }

  @media ${QUERIES.phoneAndSmaller} {
    inset: 0% 0% 0% 25%;
  }
`;

const ExitButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 30%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0;

  background-color: transparent;
`;

const ExitButtonText = styled.span`
  font-size: 1.125rem;
`;
