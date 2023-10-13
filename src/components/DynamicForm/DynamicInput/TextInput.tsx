import {
  useCallback,
  useEffect,
  useState,
} from 'react';

import {
  InputConfiguration,
  TextInputTypes,
  TextInputConfiguration,
  useDynamicForm,
} from '../../../data';
import { TextInput as UITextInput } from '../../../ui';

interface Props { input: InputConfiguration }
export const TextInput = ({ input }: Props) => {
  const textInput = (input as TextInputConfiguration);
  const { changeInput } = useDynamicForm();
  const [ value, setValue ] = useState('');

  // callbacks
  /////
  const change = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    [ setValue ]
  );

  // effects
  /////
  useEffect(() => {
    changeInput({
      ...textInput,
      value,
    });
  }, [ // eslint-disable-line react-hooks/exhaustive-deps
    changeInput,
    value,
  ]);

  return (
    <UITextInput
      type={input.type as TextInputTypes}
      onChange={change}
      value={value}
    >
      {input.label}
    </UITextInput>
  );
};