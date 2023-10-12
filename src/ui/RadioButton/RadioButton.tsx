import React from 'react';

import { Container, StyledInput, StyledLabel } from './styled';

interface Props {
  checked: boolean,
  children: React.ReactNode,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  value: string,
};
export const RadioButton = ({
  checked,
  children,
  onChange,
  value,
}: Props) => {
  return (
    <Container>
      <StyledInput
        checked={checked}
        onChange={onChange}
        type='radio'
        value={value}
      />

      <StyledLabel>{children}</StyledLabel>
    </Container>
  );
};
