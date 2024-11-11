import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavWrapper>
            <Text href="/sale">Sale</Text>
            {/* <BoldNavLink href="/sale">Sale</BoldNavLink> */}
          </NavWrapper>
          <NavWrapper>
            <Text href="/new">New&nbsp;Releases</Text>
            {/* {/* <BoldNavLink href="/new">New&nbsp;Releases</BoldNavLink> */}
          </NavWrapper>
          <NavWrapper>
            <Text href="/men">Men</Text>
            {/* {/* <BoldNavLink href="/men">Men</BoldNavLink> */}
          </NavWrapper>
          <NavWrapper>
            <Text href="/women">Women</Text>
            {/* {/* <BoldNavLink href="/women">Women</BoldNavLink> */}
          </NavWrapper>
          <NavWrapper>
            <Text href="/kids">Kids</Text>
            {/* {/* <BoldNavLink href="/kids">Kids</BoldNavLink> */}
          </NavWrapper>
          <NavWrapper>
            <Text href="/collections">Collections</Text>
            {/* {/* <BoldNavLink href="/collections">Collections</BoldNavLink> */}
          </NavWrapper>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavWrapper = styled.a`
  position: relative;
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }

    ::before,
    ::after {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 3px;
      background: #566473;
      content: '';
      transform: scale(0.85);
      transition: transform 0.3s;
    }

    ::after {
        transition: top 0.3s, opacity 0.3s, transform 0.3s;
    }

    &:hover ::before {
      transform: scale(1);
    }

    &:hover ::after {
     opacity: 1;
     top: 0% ;
    transform: scale(1);
    }
`;

const Text = styled.span`
  display: block;
  display: block;
  transform: translateY(var(--translate-from));
  transition: transform 500ms;

  @media (prefers-reduced-motion: no-preference) {
    ${NavWrapper}:hover & {
      transition: transform 250ms;
      transform: translateY(var(--translate-to));
    }
  }
`;

const NavLink = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;
`;

const BoldNavLink = styled(Text)`
  --translate-from: 100%;
  --translate-to: 0%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: ${WEIGHTS.bold};
`;

export default Header;
