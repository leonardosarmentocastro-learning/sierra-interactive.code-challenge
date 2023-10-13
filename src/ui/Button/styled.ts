import styled from 'styled-components';

import { ButtonColors } from './types';

interface IStyledButton { $shrink: boolean };
export const StyledButton = styled.button<IStyledButton>`
  background-color: ${({ color }) => color};
  border-radius: 2rem;
  border: 1px solid transparent;

  padding: 0.6rem 1.2rem;
  font-size: 1.4em;

  font-weight: 500;
  font-family: inherit;

  cursor: pointer;
  transition: color .25s, border-color .25s, background-color .25s;

  &:hover {
    ${({ color }) => {
      switch (true) {
        case (color === ButtonColors.PURPLE): return `
          border-color: #747bff;
          background-color: #747bff;
        `;
        case (color === ButtonColors.GRAY): return `
          border-color: rgba(60, 60, 67, .75);
          background-color: rgba(60, 60, 67, .75);
        `;
      }
    }}

    color: #fff;
  }

  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  pointer-events: ${({ disabled }) => disabled ? 'disabled' : 'auto'};

  ${({ $shrink }) => !!$shrink && `
    height: min-content;
    width: min-content;
  `}
`;
