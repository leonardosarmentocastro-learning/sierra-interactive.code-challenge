import {
  Container,
  Select,
  Label,
} from './styled';
import { SelectableInputConfiguration } from '../../data';

interface Props {
  onChange: React.ChangeEventHandler<HTMLSelectElement>,
  input: SelectableInputConfiguration,
}
export const SelectInput = ({
  onChange,
  input,
}: Props) => {
  return (
    <Container>
      {!!input.label && <Label>{input.label}</Label>}

      <Select
        onChange={onChange}
        value={input.value}
      >
        {input.options.map(option => (
          <option
            key={option.id}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </Select>
    </Container>
  );
};
