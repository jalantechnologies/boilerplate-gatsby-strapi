import React, { FC, useEffect, useState } from 'react';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import BannerOverlay from './banner-overlay';
import BannerWrapper from './banner-wrapper';
import CarouselIndicators from './carousel-indicators';
import BannerText from './banner-text';
import { Banner } from '../../types/homepage';
import { getMediaUrl } from '../../utils/get-media-url';
import SlideButton from './slide-button';

declare type HeroProps = {
  data: Banner[];
};

export const Hero: FC<HeroProps> = ({ data }) => {
  const [, theme] = useStyletron();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentHero, setCurrentHero] = useState<Banner>(data?.[0]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    setCurrentHero(data[currentIndex]);
  }, [currentIndex, data]);

  return currentHero ? (
    <BannerWrapper
      backgroundUrl={getMediaUrl(
        data[currentIndex].Background.data.attributes.url,
      )}
    >
      <BannerOverlay />
      <Block
        display="flex"
        position={'absolute'}
        justifyContent={'space-between'}
        alignItems="center"
        width={'100%'}
        paddingTop={'scale2400'}
      >
        <Block
          marginLeft={theme.sizing.scale400}
          display={['none', 'none', 'block']}
        >
          <SlideButton type="previous" onClick={goToPrevious} />
        </Block>
        <Block display="flex" alignItems={'center'} flexDirection="column">
          <BannerText title={currentHero.H1} description={currentHero.H2} />

          <CarouselIndicators
            currentIndex={currentIndex}
            totalCounts={data.length}
            setCurrentIndex={setCurrentIndex}
            marginTop={['auto', 'auto', 'scale4800']}
          />
        </Block>
        <Block
          marginRight={theme.sizing.scale400}
          display={['none', 'none', 'block']}
        >
          <SlideButton type="next" onClick={goToNext} />
        </Block>
      </Block>
    </BannerWrapper>
  ) : null;
};
