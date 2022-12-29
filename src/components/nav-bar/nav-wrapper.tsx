import React, { PropsWithChildren } from 'react';
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';

type NavWrapperProps = {
  position?: 'static' | 'absolute' | 'relative' | 'fixed' | 'sticky';
};

const NavWrapper: React.FC<PropsWithChildren & NavWrapperProps> = ({
  children,
  position = 'absolute',
}) => {
  const [css, theme] = useStyletron();

  return (
    <Block
      position={position}
      top="0"
      left="0"
      right="0"
      justifyContent="space-between"
      display={['none', 'none', 'none', 'flex']}
      alignItems="center"
      className={css({
        background: `linear-gradient(90deg, rgba(218, 218, 218, 0.06) 0%, rgba(218, 218, 218, 0) 27.92%),
                     linear-gradient(180deg, rgba(249, 216, 54, 0.2) 0%, rgba(249, 216, 54, 0.02) 100%)`,
        zIndex: 100,
      })}
      padding={`${theme.sizing.scale700} ${theme.sizing.scale1000}`}
    >
      {children}
    </Block>
  );
};

export default NavWrapper;
