import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #646cff;
  border-radius: 2rem;
  border: 1px solid transparent;

  padding: 0.6rem 1.2rem;
  font-size: 1.4em;
  font-weight: 500;
  font-family: inherit;

  cursor: pointer;
  transition: color .25s, border-color .25s, background-color .25s;

  &:hover {
    border-color: #747bff;
    color: #fff;
    background-color: #747bff;
  }

  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  pointer-events: ${({ disabled }) => disabled ? 'disabled' : 'auto'};
`;
