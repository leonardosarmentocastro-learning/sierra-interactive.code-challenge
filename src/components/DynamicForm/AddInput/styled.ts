import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  padding: 1rem;
  max-width: 32rem;
`;

export const Title = styled.h3`
  color: #FFF;
  font-size: 1.8rem;
  font-weight: 600;

  margin: 2rem 0 1rem;
`;

export const Heading = styled.h3`
  color: rgba(255,255,255, .6);
  font-size: 1.4rem;
  font-weight: 500;

  margin: 2rem 0 .5rem;
`;

export const RadioButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  margin-bottom: 1rem;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 2rem;
`;
export const Options = styled.div`
  margin-bottom: 2rem;
`;
export const Option = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(12rem, 30rem)) min-content;
  justify-content: start;
  align-items: end;
  gap: 1rem;

  margin-bottom: 1rem;
`;
export const AddOption = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 1rem;
`;