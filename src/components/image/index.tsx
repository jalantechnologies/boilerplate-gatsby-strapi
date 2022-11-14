import React, { FC } from 'react'

type ImagePropTypes = {
  className?:string;
  height:number;
  src:string;
  width:number;
  style?:React.CSSProperties;
}

export const Image: FC<ImagePropTypes> = ({className,height,src,width,style}) => {
  return (
    <img src={src} style={style} width={width} height={height} className={className}/>
  )
}
