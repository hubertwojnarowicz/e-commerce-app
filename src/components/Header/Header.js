import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { COLORS, QUERIES } from '../../variables';
import { Trash, Heart, Menu, Search } from 'react-feather';
import MobileNav from '../MobileNav';
import * as ROUTES from '../../constants/routes';
import { useCart } from 'react-use-cart';

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { totalItems } = useCart();

  return (
    <HeaderMaxWidthWrapper>
      <HeaderWrapper>
        <ImageWrapper to={ROUTES.DASHBOARD}>
          <Logo src="/images/assets/logo.jpg" />
        </ImageWrapper>
        <DesktopNavigation>
          <PrimaryNavigation>
            <ListItem>
              <NavLink to={ROUTES.NEWRELEASES}>New Releases</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={ROUTES.MEN}>Men</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={ROUTES.WOMEN}>Women</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={ROUTES.KIDS}>Kids</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={ROUTES.SALE}>Sale</NavLink>
            </ListItem>
          </PrimaryNavigation>
        </DesktopNavigation>
        <SearchWrapper>
          <SearchInputWrapper>
            <SearchInput type="text" placeholder="Search" />
            <IconButton>
              <Icon size="24" />
            </IconButton>
          </SearchInputWrapper>
          <FavouritesLink to={ROUTES.FAVOURITES}>
            <Heart size="32" />
          </FavouritesLink>
          <CartLink to={ROUTES.CART}>
            <Trash size="32" />
            {totalItems ? (
              <AmmountOfCartItems>{totalItems}</AmmountOfCartItems>
            ) : null}
          </CartLink>
        </SearchWrapper>
        <TabletWrapper>
          <CartLinkMobile to={ROUTES.CART}>
            <Trash size="28" />
            {totalItems ? (
              <AmmountOfCartItems>{totalItems}</AmmountOfCartItems>
            ) : null}
          </CartLinkMobile>
          <SearchButton>
            <Search size="28" />
          </SearchButton>
          <HamburgerButton onClick={() => setShowMobileMenu(true)}>
            <Menu size="28" />
          </HamburgerButton>
          <MobileNav
            isOpen={showMobileMenu}
            onDismiss={() => setShowMobileMenu(false)}
          />
        </TabletWrapper>
        <MobileWrapper>
          <CartLinkMobile to={ROUTES.CART}>
            <Trash size="24" />
            {totalItems ? (
              <AmmountOfCartItems>{totalItems}</AmmountOfCartItems>
            ) : null}
          </CartLinkMobile>
          <SearchButton>
            <Search size="24" />
          </SearchButton>
          <HamburgerButton onClick={() => setShowMobileMenu(true)}>
            <Menu size="24" />
          </HamburgerButton>
          <MobileNav
            isOpen={showMobileMenu}
            onDismiss={() => setShowMobileMenu(false)}
          />
        </MobileWrapper>
      </HeaderWrapper>
    </HeaderMaxWidthWrapper>
  );
}

const HeaderMaxWidthWrapper = styled.div`
  height: 60px;
  background: ${COLORS.white};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 1920px;
  height: 60px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  background: ${COLORS.white};
  margin-left: 32px;
  margin-right: 32px;
  gap: 8px;

  @media ${QUERIES.tabletAndSmaller} {
    margin-top: 4px;
  }
`;

const ImageWrapper = styled(Link)`
  width: 64px;
  height: 48px;

  @media ${QUERIES.phoneAndSmaller} {
    width: 52px;
    height: 42px;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

const DesktopNavigation = styled.nav`
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const PrimaryNavigation = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  font-size: 1.25rem;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const ListItem = styled.li``;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.black};
  position: relative;
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    width: 0%;
    height: 3px;
    bottom: -19px;
    background-color: ${COLORS.black};
    transition: 0.3;
  }

  &:hover {
    color: ${COLORS.black};
  }

  &:hover::before {
    width: 100%;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-self: end;
  align-items: center;
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const SearchInputWrapper = styled.div`
  border-radius: 24px;
  background-color: ${COLORS.gray[1000]};
  height: 40px;
  min-width: 240px;
  position: relative;
`;

const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  border-radius: 24px;
  height: 100%;
  outline: none;
  border: none;
  padding: 0 44px;
  background-color: ${COLORS.gray[1000]};

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${COLORS.gray[900]};
    transition: 0.3s;
  }
`;

const IconButton = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  height: 40px;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.gray[900]};
    transition: 0.3s;
  }
`;

const Icon = styled(Search)``;

const FavouritesLink = styled(Link)`
  color: ${COLORS.black};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  background-color: ${COLORS.white};
  border-radius: 50%;
  width: 42px;
  height: 42px;

  &:hover {
    background-color: ${COLORS.gray[900]};
  }
`;

const CartLink = styled(Link)`
  color: ${COLORS.black};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  background-color: ${COLORS.white};
  border-radius: 50%;
  width: 42px;
  height: 42px;
  position: relative;

  &:hover {
    background-color: ${COLORS.gray[900]};
  }
`;

const AmmountOfCartItems = styled.span`
  position: absolute;
  top: 55%;
  transform: translate(-50%, -50%);
  left: 50%;
  font-size: 0.95rem;

  @media ${QUERIES.tabletAndSmaller} {
    top: 46%;
  }

  @media ${QUERIES.phoneAndSmaller} {
    top: 45%;
  }
`;

const TabletWrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    gap: 24px;
    margin-left: auto;
    align-items: center;
    grid-column: 3 / 4;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const CartLinkMobile = styled(Link)`
  color: ${COLORS.black};
  position: relative;
`;

const SearchButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

const HamburgerButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

const MobileWrapper = styled.div`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    margin-left: auto;
    align-items: center;
    justify-content: center;
    gap: 12px;
    grid-column: 3 / 4;
  }
`;
