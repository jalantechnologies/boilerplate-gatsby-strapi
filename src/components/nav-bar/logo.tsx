import React from 'react';
import { AspectRatioBox, AspectRatioBoxBody } from 'baseui/aspect-ratio-box';

type LogoProps = {
  url: string;
};

const Logo: React.FC<LogoProps> = ({ url }) => {
  return (
    <AspectRatioBox width="scale4800" aspectRatio={2 / 1}>
      <AspectRatioBoxBody
        as="img"
        src={url}
        maxHeight={'scale2400'}
        overrides={{
          Block: {
            style: {
              objectFit: 'contain',
            },
          },
        }}
      />
    </AspectRatioBox>
  );
};

export default Logo;
