import * as React from 'react';
import { MessageCard } from 'baseui/message-card';
import { navigate } from 'gatsby';

import { getArticleUrl } from '../../utils/get-route';

declare type ArticleCardProps = {
  id: string;
  title: string;
  imgSrc: string;
  subTitle: string;
};

export const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  imgSrc,
  title,
  subTitle,
}) => {
  const handleCardClick = () =>
    navigate(getArticleUrl(title), { state: { id: id } });

  return (
    <MessageCard
      heading={title}
      onClick={handleCardClick}
      paragraph={subTitle}
      image={{
        src: imgSrc,
        ariaLabel: title,
      }}
    />
  );
};

export default ArticleCard;
