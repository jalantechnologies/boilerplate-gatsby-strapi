import { Block } from 'baseui/block';
import React, { PropsWithChildren } from 'react';

declare type BannerWrapperProps = {
  backgroundUrl: string;
};

const BannerWrapper: React.FC<PropsWithChildren<BannerWrapperProps>> = ({
  backgroundUrl,
  children,
}) => {
  return (
    <Block
      height={'100vh'}
      width="100%"
      display="flex"
      justifyContent={'center'}
      alignItems="center"
      position={'relative'}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundImage={`url(${backgroundUrl})`}
    >
      {children}
    </Block>
  );
};

export default BannerWrapper;
