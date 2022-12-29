import { StyledLink } from 'baseui/link';
import React from 'react';
import { Submenu } from '../../types/homepage';

type SubMenuItemProps = {
  item: Submenu;
};

const SubMenuItem: React.FC<SubMenuItemProps> = ({ item }) => {
  return (
    <StyledLink
      href={item.Url}
      target={item.Target}
      $style={({ $theme }) => ({
        padding: $theme.sizing.scale300,
        color: $theme.colors.mono700,
        textDecoration: 'none',
        ':visited': {
          color: $theme.colors.mono700,
        },
        ':hover': {
          borderRadius: $theme.sizing.scale400,
          background: $theme.colors.mono400,
          fontWeight: 'bold',
          color: $theme.colors.mono1000,
        },
      })}
    >
      {item.Label.toUpperCase()}
    </StyledLink>
  );
};

export default SubMenuItem;

