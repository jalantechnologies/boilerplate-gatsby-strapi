import React, { FC } from 'react';
import { Image } from '../image';
import { DisplaySmall, ParagraphMedium } from 'baseui/typography';
import { Block } from 'baseui/block';

type ArticleSectionPropTypes = {
  heroDesc: string;
  heroTitle: string;
  imgSrc: string;
};

export const ArticleSection: FC<ArticleSectionPropTypes> = ({
  imgSrc,
  heroTitle,
  heroDesc,
}) => {
  return (
    <Block
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image src={imgSrc} height={400} />
      {heroTitle && (
        <DisplaySmall style={{ marginTop: 100, marginBottom: 100 }}>
          {heroTitle}
        </DisplaySmall>
      )}
      <ParagraphMedium width="60%">{heroDesc}</ParagraphMedium>
    </Block>
  );
};
