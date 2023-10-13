import React from 'react';

import { StyledButton } from './styled';
import { ButtonColors } from './types';

interface Props {
  children: React.ReactNode,
  color?: ButtonColors,
  disabled?: boolean,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  $shrink?: boolean,
}

export const Button = ({
  children,
  color = ButtonColors.PURPLE,
  disabled = false,
  onClick,
  $shrink = false,
} : Props) => {
  return (
    <StyledButton
      color={color}
      disabled={disabled}
      onClick={onClick}
      $shrink={$shrink}
    >
      {children}
    </StyledButton>
  );
};
