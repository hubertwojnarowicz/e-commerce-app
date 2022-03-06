import React from 'react';
import styled from 'styled-components/macro';
import { ChevronRight, X } from 'react-feather';
import { COLORS } from '../../variables';
import { Link } from 'react-router-dom';

function MobileNav({ isOpen, onDismiss }) {
  if (!isOpen) {
    return null;
  }
  return (
    <MobileNavWrapper>
      <CloseButton onClick={onDismiss}>
        <X />
      </CloseButton>
      <MobileNavigation>
        <PrimaryMobileNavigation>
          <MobileListItems>
            <MobileLink to="/new-releases">
              <LinkChild>New Releases</LinkChild>
              <ChevronRight />
            </MobileLink>
          </MobileListItems>
          <MobileListItems>
            <MobileLink to="/man">
              <LinkChild>Man</LinkChild>
              <ChevronRight />
            </MobileLink>
          </MobileListItems>
          <MobileListItems>
            <MobileLink to="woman">
              <LinkChild>Woman</LinkChild>
              <ChevronRight />
            </MobileLink>
          </MobileListItems>
          <MobileListItems>
            <MobileLink to="kids">
              <LinkChild>Kids</LinkChild>
              <ChevronRight />
            </MobileLink>
          </MobileListItems>
          <MobileListItems>
            <MobileLink to="sale">
              <LinkChild>Sale</LinkChild>
              <ChevronRight />
            </MobileLink>
          </MobileListItems>
        </PrimaryMobileNavigation>
      </MobileNavigation>
    </MobileNavWrapper>
  );
}

export default MobileNav;

const MobileNavWrapper = styled.div`
  background-color: ${COLORS.white};
  position: fixed;
  right: 0;
  top: 0;
  inset: 0% 0% 0% 65%;
  z-index: 10;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button``;

const MobileNavigation = styled.nav``;

const PrimaryMobileNavigation = styled.ul``;

const MobileListItems = styled.li``;

const MobileLink = styled(Link)``;

const LinkChild = styled.span``;
