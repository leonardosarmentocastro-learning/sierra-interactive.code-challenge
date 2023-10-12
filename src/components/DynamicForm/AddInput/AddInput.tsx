import { useCallback, useMemo, useState } from 'react';

import {
  Buttons,
  Container,
  Heading,
  RadioButtons,
  Title,
} from './styled';
import { Button, TextInput, RadioButton } from '../../../ui';
import { useDynamicForm, InputTypes } from '../../../data';

export const AddInput = () => {
  const { addInput } = useDynamicForm();

  // states
  /////
  const [ label, setLabel ] = useState('');
  const [ type, setType ] = useState(InputTypes.NUMBER);

  // callbacks
  /////
  const cleanLabel = useCallback(
    () => setLabel(''),
    [ setLabel ]
  );

  const addDynamicInput = useCallback(() => {
    const input = (type === InputTypes.SELECT)
      ? { label, type, options: [] }
      : { label, type };

    addInput(input);
    cleanLabel();
  }, [ label, type ]);

  const changeLabel = useCallback(
    (e: any) => setLabel(e.target.value),
    [ setLabel ]
  );

  const changeType = useCallback(
    (inputType: InputTypes) => () => setType(inputType),
    [ setType ]
  );

  // memos
  /////
  const disabled = useMemo(() => !label, [ label ]);
  const isNumberInputChecked = useMemo(() => type === InputTypes.NUMBER, [ type ]);
  const isSelectInputChecked = useMemo(() => type === InputTypes.SELECT, [ type ]);
  const isTextInputChecked = useMemo(() => type === InputTypes.TEXT, [ type ]);

  return (
    <Container>
      <Title>Input configuration</Title>

      <Heading>Type</Heading>
      <RadioButtons>
        <RadioButton
          checked={isNumberInputChecked}
          onChange={changeType(InputTypes.NUMBER)}
          value={type}
        >
          Number
        </RadioButton>

        <RadioButton
          checked={isSelectInputChecked}
          onChange={changeType(InputTypes.SELECT)}
          value={type}
        >
          Select
        </RadioButton>

        <RadioButton
          checked={isTextInputChecked}
          onChange={changeType(InputTypes.TEXT)}
          value={type}
        >
          Text
        </RadioButton>
      </RadioButtons>

      <TextInput
        onChange={changeLabel}
        value={label}
      >
        Label
      </TextInput>

      <Buttons>
        <Button
          onClick={addDynamicInput}
          disabled={disabled}
        >
          Add input
        </Button>
      </Buttons>
    </Container>
  );
};
