import React, { Dispatch } from 'react';
import { Block, BlockProps } from 'baseui/block';
import { useStyletron } from 'styletron-react';
import { carousalIndicatorStyles } from './styles';
import theme from '../../page-layouts/theme';
import { StaticImage } from 'gatsby-plugin-image';

export type CarouselIndicatorsProps = {
  currentIndex: number;
  setCurrentIndex: Dispatch<number>;
  totalCounts: number;
};

const CarouselIndicators: React.FC<CarouselIndicatorsProps & BlockProps> = ({
  currentIndex,
  setCurrentIndex,
  totalCounts,
  ...props
}) => {
  const [css] = useStyletron();

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <Block display={'flex'} justifyContent={'center'} {...props}>
      {Array(totalCounts)
        .fill(0)
        .map((_slide, slideIndex) => (
          <Block
            margin="scale300"
            width={'scale750'}
            color={theme.colors.accent}
            className={css({ ...carousalIndicatorStyles })}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            {currentIndex === slideIndex ? (
              <StaticImage
                alt={`${slideIndex}`}
                src="../../images/indicator.png"
              />
            ) : (
              <StaticImage
                alt={`${slideIndex}`}
                src="../../images/indicator-active.png"
              />
            )}
          </Block>
        ))}
    </Block>
  );
};

export default CarouselIndicators;
