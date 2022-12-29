import React from 'react';
import { useStyletron } from 'baseui';
import { StaticImage } from 'gatsby-plugin-image';

const BannerOverlay = () => {
  const [css] = useStyletron();

  return (
    <StaticImage
      className={css({
        position: 'absolute',
        top: 0,
        pointerEvents: 'none',
        height: '100%',
        width: '100%',
      })}
      src="../../images/banner-overlay.png"
      alt="banner"
    />
  );
};

export default BannerOverlay;
