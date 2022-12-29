import { Block } from 'baseui/block';
import React from 'react';
import BannerTextDesktop from './banner-text-desktop';
import BannerTextMobile from './banner-text-mobile';

export type BannerTextProps = {
  title: string;
  description: string;
};

const BannerText: React.FC<BannerTextProps> = props => {
  return (
    <>
      <Block
        flexDirection={'column'}
        alignItems="center"
        padding={'scale800'}
        display={['flex', 'flex', 'none', 'none']}
      >
        <BannerTextMobile {...props} />
      </Block>
      <Block
        alignItems="center"
        flexDirection={'column'}
        display={['none', 'none', 'flex']}
      >
        <BannerTextDesktop {...props} />
      </Block>
    </>
  );
};

export default BannerText;
