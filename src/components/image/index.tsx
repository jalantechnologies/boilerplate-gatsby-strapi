import React, { FC } from 'react'

type ImagePropTypes = {
  className?:string;
  height:number;
  src:string;
  width:number;
}

export const Image: FC<ImagePropTypes> = ({className,height,src,width}) => {
  return (
    <img src={src} width={width} height={height} className={className}/>
  )
}
