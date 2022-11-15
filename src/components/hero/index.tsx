import React, { FC } from 'react'
import { Image } from '../image'
import { DisplaySmall, ParagraphMedium } from 'baseui/typography'
import { Block } from 'baseui/block'

type HeroPropTypes = {
 imgSrc: string
 heroTitle: string
 heroDesc: string
}

export const Hero: FC<HeroPropTypes> = ({ imgSrc, heroTitle, heroDesc }) => {
 return (
  <Block
   style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
   }}
  >
   <Image src={imgSrc} width={600} height={400} />
   {heroTitle && (
    <DisplaySmall style={{ marginTop: 100, marginBottom: 100 }}>
     {heroTitle}
    </DisplaySmall>
   )}
   <ParagraphMedium width="60%">{heroDesc}</ParagraphMedium>
  </Block>
 )
}
