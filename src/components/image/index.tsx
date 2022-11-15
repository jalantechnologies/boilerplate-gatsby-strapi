import React, { FC } from 'react';

type ImagePropTypes = {
  className?: string;
  height?: number;
  src: string;
  style?: React.CSSProperties;
  width?: number;
};

export const Image: FC<ImagePropTypes> = ({
  className,
  height,
  src,
  width,
  style,
}) => {
  return (
    <img
      src={src}
      style={style}
      width={width}
      height={height}
      className={`${className} image`}
    />
  );
};
