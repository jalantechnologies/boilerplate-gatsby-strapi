import * as React from 'react'
import { Block } from 'baseui/block'
import { Image } from '../image'
import { navigate } from 'gatsby'
import './styles/style.css'
import { getRouteUrl } from '../../utils/get-route'

declare type ArticleBoxProps = {
  id:string;
  title: string
  imgSrc: string
}

export const ArticleBox: React.FC<ArticleBoxProps> = ({id, title, imgSrc }) => {
  return (
    <Block onClick={() => navigate(`/articles/${getRouteUrl(title)}`,{state:{id:id}})} className="article-card">
      <Image
        src={imgSrc}
        width={350}
        height={250}
        className='boxImg'
        style={{ borderRadius: 10 }}
      />
      <Block className="title-text">{title}</Block>
    </Block>
  )
}

export default ArticleBox
