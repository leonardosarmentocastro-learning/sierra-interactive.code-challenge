import styled from 'styled-components';

export const Container = styled.section`
  height: 100%;
`;

export const Content = styled.div``;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;

  margin: 0;
`;
export const Subtitle = styled.p`
  font-size: 1.4rem;
  font-weight: 500;

  color: rgba(255, 255, 255, .7);
  margin: 0;
`;

export const Heading = styled.div`
  border-bottom: .1rem solid rgba(82, 82, 89, .32);
  padding-bottom: 1rem;
`;

export const FormPreview = styled.div`
  border: .3rem solid rgba(82, 82, 89, .32);
  border-radius: 1rem;

  padding: 1rem;
  margin: 2rem auto;
  max-width: 32rem;
`;

export const FPTitle = styled.h3`
  color: #FFF;
  font-size: 1.8rem;
  font-weight: 600;

  margin-bottom: 2rem;
`;

export const FPInput = styled.div`
  margin-bottom: 2rem;
`;

export const FPButtons = styled.div`
  display: flex;
  justify-content: end;
`;

export const DisplayData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  align-items: center;
  justify-content: center;
`;

export const DDButtons = styled.div`
  margin: 0 auto;
`;
