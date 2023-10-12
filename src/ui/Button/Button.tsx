import React from 'react';

import { StyledButton } from './styled';

interface Props {
  children: React.ReactNode,
  disabled?: boolean,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
};

export const Button = ({
  children,
  disabled = false,
  onClick,
} : Props) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
