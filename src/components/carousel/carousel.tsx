import React, { PropsWithChildren } from 'react';
import { CarouselProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// there is no other way to style carousel scroll library hence css is used to style arrows
import './carousel.css';
import { ReactMultiCarousel } from './react-multi-carousel';

const Carousel: React.FC<PropsWithChildren<CarouselProps>> = ({
  children,
  ...props
}) => {
  return (
    <ReactMultiCarousel
      swipeable={true}
      draggable={true}
      ssr={true}
      keyBoardControl={true}
      arrows={true}
      {...props}
    >
      {children}
    </ReactMultiCarousel>
  );
};

export default Carousel;
