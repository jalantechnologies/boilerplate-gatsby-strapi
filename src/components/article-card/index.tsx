import * as React from 'react';
import { Block } from 'baseui/block';
import { Image } from '../image';
import { navigate } from 'gatsby';
import { getRouteUrl } from '../../utils/get-route';
import './styles/style.css';

declare type ArticleCardProps = {
  id: string;
  title: string;
  imgSrc: string;
};

export const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  title,
  imgSrc,
}) => {
  return (
    <Block
      onClick={() =>
        navigate(`/articles/${getRouteUrl(title)}`, { state: { id: id } })
      }
      className="article-card"
    >
      <Image src={imgSrc} height={250} className="article-card-img" />
      <Block className="title-text">{title}</Block>
    </Block>
  );
};

export default ArticleCard;
