import React, { FC } from 'react'
import {Image} from '../image';
import {
    DisplaySmall,
    ParagraphMedium
  } from 'baseui/typography';
  
type HeroPropTypes = {
    imgSrc:string;
    heroTitle:string;
    heroDesc:string;  
}

export const Hero: FC<HeroPropTypes> = ({imgSrc,heroTitle,heroDesc}) => {
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}} >
        <Image src={imgSrc} width={300} height={200}  />
        <DisplaySmall>
            {heroTitle}
        </DisplaySmall>
        <ParagraphMedium>
            {heroDesc}
        </ParagraphMedium>
    </div>
  )
}
