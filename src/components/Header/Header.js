import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { COLORS, WEIGHTS, QUERIES } from "../../variables";
import { Trash, Heart, Menu, Search, Tablet } from "react-feather";
import MobileNav from "../MobileNav";
import * as ROUTES from "../../constants/routes";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showMobileMenu]);

  return (
    <HeaderMaxWidthWrapper>
      <HeaderWrapper>
        <ImageWrapper to="/">
          <Logo src="images/assets/logo.jpg" />
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
          <Form>
            <SearchInputWrapper>
              <SearchInput type="text" placeholder="Search" />
            </SearchInputWrapper>
            <IconButton>
              <Icon size="24" />
            </IconButton>
          </Form>
          <FavouritesLink to={ROUTES.FAVOURITES}>
            <Heart size="32" />
          </FavouritesLink>
          <CartLink to="cart">
            <Trash size="32" />
          </CartLink>
        </SearchWrapper>
        <TabletWrapper>
          <CartLinkMobile to={ROUTES.CART}>
            <Trash size="28" />
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
  display: flex;
  align-items: center;
  background: ${COLORS.white};
  margin: 0 32px;
  gap: 16px;
  padding: 16px 0;

  @media ${QUERIES.tabletAndSmaller} {
    margin: 4px 12px 0px 12px;
  }
`;

const ImageWrapper = styled(Link)``;

const Logo = styled.img`
  height: 48px;
  aspect-ratio: 16 / 10;
  margin-top: 4px;
`;

const DesktopNavigation = styled.nav`
  margin-left: auto;

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
    content: "";
    position: absolute;
    width: 0%;
    height: 3px;
    bottom: -20px;
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
  margin-left: auto;
  display: flex;
  gap: 16px;
  align-items: center;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const Form = styled.form`
  height: 32px;
  position: relative;
`;

const SearchInputWrapper = styled.div`
  border-radius: 24px;
  background-color: ${COLORS.gray[1000]};
  height: 100%;
  display: flex;
  align-items: baseline;
  padding: 8px 24px;

  &:hover {
    background-color: ${COLORS.gray[900]};
  }
`;

const SearchInput = styled.input`
  border: none;
  background-color: inherit;
  border-radius: 24px;
  margin-left: 16px;

  &:focus {
    outline: none;
  }
`;

const IconButton = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
  border: none;
  background-color: inherit;
  border-radius: 50%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.gray[800]};
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

  &:hover {
    background-color: ${COLORS.gray[900]};
  }
`;

const TabletWrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    gap: 24px;
    margin-left: auto;
    align-items: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const CartLinkMobile = styled(Link)`
  color: ${COLORS.black};
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
  }
`;
