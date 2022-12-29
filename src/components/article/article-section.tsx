import React, { FC, useMemo } from 'react';
import { Block } from 'baseui/block';
import { SIZE, StyledDivider } from 'baseui/divider';
import {
  DisplaySmall,
  LabelLarge,
  LabelMedium,
  ParagraphMedium,
} from 'baseui/typography';
import { useStyletron } from 'baseui';
import ReactMarkdown from 'react-markdown';
import { ArticleAttributes } from '../../types/article';
import { getDateString } from '../../utils/date-util';
import { getMediaUrl } from '../../utils/get-media-url';

type ArticleSectionPropTypes = {
  article: ArticleAttributes;
};

const ArticleSection: FC<ArticleSectionPropTypes> = ({ article }) => {
  const [css, theme] = useStyletron();
  const date = useMemo(() => {
    return getDateString(article.createdAt);
  }, [article.createdAt]);

  return (
    <Block backgroundColor={theme.colors.backgroundPrimary} height="100%">
      <DisplaySmall>{article.Title}</DisplaySmall>
      <StyledDivider $size={SIZE.section} />
      <img
        src={getMediaUrl(article.Media.data.attributes.url)}
        width="100%"
        height="200px"
        className={css({ objectFit: 'cover' })}
        alt={article.Title}
      />
      <Block display={'flex'} justifyContent={'space-between'}>
        <LabelLarge>Author: {article.Author}</LabelLarge>
        <LabelMedium>Published on: {date}</LabelMedium>
      </Block>
      <StyledDivider $size={SIZE.section} />

      <Block display={'flex'} justifyContent="center">
        <ParagraphMedium width={['auto', 'auto', '80%', '60%']}>
          <ReactMarkdown children={article.Description} />
        </ParagraphMedium>
      </Block>
    </Block>
  );
};

export default ArticleSection;
