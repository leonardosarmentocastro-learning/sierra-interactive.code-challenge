import {
  useCallback,
  useEffect,
  useState,
} from 'react';

import {
  InputConfiguration,
  SelectableInputConfiguration,
  useDynamicForm,
} from '../../../data';
import { SelectInput as UISelectInput } from '../../../ui';

interface Props { input: InputConfiguration }
export const SelectInput = ({ input }: Props) => {
  const selectInput = (input as SelectableInputConfiguration);
  const { changeInput } = useDynamicForm();
  const [ value, setValue ] = useState(selectInput.value);

  // callbacks
  /////
  const change = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => setValue(e.target.value),
    [ setValue ]
  );

  // effects
  /////
  useEffect(() => {
    changeInput({
      ...selectInput,
      value,
    });
  }, [ // eslint-disable-line react-hooks/exhaustive-deps
    changeInput,
    value,
  ]);

  return (
    <UISelectInput
      input={selectInput}
      onChange={change}
    />
  );
};