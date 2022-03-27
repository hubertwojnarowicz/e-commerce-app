import React from 'react';
import { ChevronLeft } from 'react-feather';
import styled, { keyframes } from 'styled-components/macro';
import { COLORS, QUERIES } from '../../variables';
import { DialogOverlay, DialogContent } from '@reach/dialog';

function MobileNavUser({ isOpen, onDismiss, children }) {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="user-menu">
        <ExitButton onClick={onDismiss}>
          <ChevronLeft />
          <ExitButtonText>All</ExitButtonText>
        </ExitButton>
        {children}
      </Content>
    </Overlay>
  );
}

export default MobileNavUser;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  background-color: hsl(220deg 5% 40% / 0.7);
  display: flex;
  justify-content: flex-end;
`;
const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const Content = styled(DialogContent)`
  background-color: ${COLORS.white};
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;

  gap: 12px;
  padding: 12px 24px 0px 24px;
  animation: ${slideIn} 500ms both cubic-bezier(0, 0.6, 0.32, 1);

  animation-delay: 200ms;

  @media ${QUERIES.phoneAndSmaller} {
    width: 75%;
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
