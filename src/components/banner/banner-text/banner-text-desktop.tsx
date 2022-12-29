import { useStyletron } from 'baseui';
import { DisplayMedium, ParagraphLarge } from 'baseui/typography';
import React from 'react';
import { BannerTextProps } from '.';

const BannerTextDesktop: React.FC<BannerTextProps> = ({
  title,
  description,
}) => {
  const [css] = useStyletron();

  return (
    <>
      <DisplayMedium className={css({ textAlign: 'center' })}>
        {title}
      </DisplayMedium>

      <ParagraphLarge
        width={['auto', 'auto', '90%', '70%']}
        className={css({ textAlign: 'center' })}
      >
        {description}
      </ParagraphLarge>
    </>
  );
};

export default BannerTextDesktop;
