import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { Button } from 'baseui/button';
import { HeadingLarge, LabelMedium } from 'baseui/typography';
import React from 'react';
import { BannerTextProps } from '.';

const BannerTextMobile: React.FC<BannerTextProps> = ({
  title,
  description,
}) => {
  const [css] = useStyletron();

  return (
    <>
      <HeadingLarge className={css({ textAlign: 'center' })}>
        {title}
      </HeadingLarge>

      <LabelMedium
        width={['auto', 'auto', '90%', '70%']}
        className={css({ textAlign: 'center' })}
      >
        {description}
      </LabelMedium>
      <Block marginTop="scale800">
        <Button>WATCH VIDEO</Button>
      </Block>
    </>
  );
};

export default BannerTextMobile;
