import React from 'react';
import { Block } from 'baseui/block';
import { StyledLink } from 'baseui/link';
import NavWrapper from './nav-wrapper';
import MenuItemWrapper from './menu-item-wrapper';
import { getMediaUrl } from '../../utils/get-media-url';
import Logo from './logo';
import { Header } from '../../types';

type NavBarProps = {
  data: Header;
  position?: 'static' | 'absolute' | 'relative' | 'fixed' | 'sticky';
};

const NavBar: React.FC<NavBarProps> = ({ data, position = 'absolute' }) => {
  return (
    <NavWrapper position={position}>
      <StyledLink href="/">
        <Logo url={getMediaUrl(data.Logo.data.attributes.url)} />
      </StyledLink>

      <Block justifyContent="center" alignItems="center" display={'flex'}>
        {data.Menus.map((item, index) => (
          <MenuItemWrapper item={item} key={index} />
        ))}
      </Block>
    </NavWrapper>
  );
};

export default NavBar;
