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

interface Props { input: InputConfiguration };
export const TextInput = ({ input }: Props) => {
  const { changeInput } = useDynamicForm();
  const [ value, setValue ] = useState('');

  // callbacks
  /////
  const change = useCallback(
    (e: any) => setValue(e.target.value),
    [ setValue ]
  );

  // effects
  /////
  useEffect(() => {
    changeInput({
      ...input as TextInputConfiguration,
      value,
    });
  }, [ changeInput, value ]);

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