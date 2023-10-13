import { Code } from './styled';

interface Props { children: React.ReactNode };
export const Data = ({ children }: Props) => {
  return (
    <Code>
      {children}
    </Code>
  );
};
