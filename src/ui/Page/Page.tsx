import { Wrapper } from './styled';

interface Props { children: React.ReactNode }
export const Page = ({ children }: Props) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};
