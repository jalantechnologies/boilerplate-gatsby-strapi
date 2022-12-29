import React from 'react';
import { Block } from 'baseui/block';
import { StatefulPopover, TRIGGER_TYPE } from 'baseui/popover';
import { PLACEMENT } from 'baseui/toast';
import { Menu } from '../../types/homepage';
import SubMenuItem from './sub-menu-item';
import { StyledLink } from 'baseui/link';

export declare type MenuItemProps = {
  item: Menu;
};

const MenuItemWrapper: React.FC<MenuItemProps> = ({ item }) => {
  return item.Submenus.length ? (
    <StatefulPopover
      showArrow
      autoFocus
      content={() => (
        <Block
          padding="scale800"
          width="270px"
          display="flex"
          flexDirection="column"
        >
          {item.Submenus.map(subMenu => (
            <SubMenuItem item={subMenu} />
          ))}
        </Block>
      )}
      placement={PLACEMENT.bottom}
      triggerType={TRIGGER_TYPE.hover}
      accessibilityType={'tooltip'}
    >
      <StyledLink
        href="#"
        $style={({ $theme }) => ({
          color: $theme.colors.contentPrimary,
          margin: $theme.sizing.scale300,
          padding: $theme.sizing.scale600,
          textDecoration: 'none',
          ':visited': {
            color: $theme.colors.contentPrimary,
          },
        })}
      >
        {item.Label.toUpperCase()}
      </StyledLink>
    </StatefulPopover>
  ) : (
    <StyledLink
      href="#"
      $style={({ $theme }) => ({
        color: $theme.colors.contentPrimary,
        margin: $theme.sizing.scale300,
        padding: $theme.sizing.scale600,
        textDecoration: 'none',
        ':visited': {
          color: $theme.colors.contentPrimary,
        },
      })}
    >
      {item.Label.toUpperCase()}
    </StyledLink>
  );
};

export default MenuItemWrapper;
