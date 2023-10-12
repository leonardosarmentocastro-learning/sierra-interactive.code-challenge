import styled from 'styled-components';

export const Container = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  border: none;
`;

export const Label = styled.label`
  color: rgba(255,255,255, .6);
  font-size: 1.4rem;
  font-weight: 500;

  margin: 0 0 .5rem;
`;

export const Input = styled.input`
  padding: 1rem;
  max-width: 30rem;

  color: #FFF;
  font-size: 1.4rem;
`;
