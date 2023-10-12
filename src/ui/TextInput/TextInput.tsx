import { InputTypes } from '../../data/dynamic-form';

import {
  Container,
  Input,
  Label,
} from './styled';

interface Props {
  children: React.ReactNode,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  type?: InputTypes.TEXT | InputTypes.NUMBER,
  value: string,
};
export const TextInput = ({
  children,
  onChange,
  type = InputTypes.TEXT,
  value,
}: Props) => {
  return (
    <Container>
      <Label>{children}&nbsp;</Label>
      <Input
        onChange={onChange}
        type={type}
        value={value}
      />
    </Container>
  );
};
