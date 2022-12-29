import React from 'react';
import { Button } from 'baseui/button';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { buttonStyles } from './styles';

declare type SlideButtonProps = {
  type: 'next' | 'previous';
  onClick: (a: React.SyntheticEvent<HTMLButtonElement>) => unknown;
};

const SlideButton: React.FC<SlideButtonProps> = ({ onClick, type }) => {
  return (
    <Button
      onClick={onClick}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            backgroundColor: $theme.colors.transparentButton,
            ...buttonStyles,
          }),
        },
      }}
    >
      {type === 'next' ? <FaChevronRight /> : <FaChevronLeft />}
    </Button>
  );
};

export default SlideButton;
