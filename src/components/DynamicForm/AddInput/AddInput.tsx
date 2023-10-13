import { useCallback, useMemo, useState } from 'react';

import {
  AddOption,
  Buttons,
  Container,
  Heading,
  Option,
  Options,
  RadioButtons,
  Title,
} from './styled';
import {
  Button,
  ButtonColors,
  TextInput,
  RadioButton,
} from '../../../ui';
import {
  SelectOption,
  InputTypes,
  useDynamicForm,
  InputConfiguration,
} from '../../../data';
import { uuid } from '../../../utils';

const DEFAULT_TYPE = InputTypes.NUMBER;

export const AddInput = () => {
  const { addInput } = useDynamicForm();

  // states
  /////
  const [ label, setLabel ] = useState('');
  const [ type, setType ] = useState(DEFAULT_TYPE);
  const [ options, setOptions ] = useState<SelectOption[]>([]);

  // callbacks
  /////
  const cleanLabel = useCallback(
    () => setLabel(''),
    [ setLabel ]
  );

  const cleanOptions = useCallback(
    () => setOptions([]),
    [ setOptions ]
  );

  const reset = useCallback(() => {
    cleanLabel();
    cleanOptions();

    setType(DEFAULT_TYPE);
  }, [
    cleanLabel,
    cleanOptions,
    setType,
  ]);

  const addOption = useCallback(() => {
    const option:SelectOption = {
      id: uuid(),
      label: '',
      value: '',
    };

    setOptions(prev => [ ...prev, option ]);
  }, [ setOptions ]);

  const addDynamicInput = useCallback(() => {
    const input = (type === InputTypes.SELECT)
      ? { label, type, options, value: options[0].value }
      : { label, type };

    addInput(input as InputConfiguration);
    reset();
  }, [
    addInput,
    label,
    options,
    reset,
    type,
  ]);

  const changeLabel = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setLabel(e.target.value),
    [ setLabel ]
  );

  const changeType = useCallback(
    (inputType: InputTypes) => () => setType(inputType),
    [ setType ]
  );

  const changeOption = useCallback(
    (option:SelectOption, field: 'label' | 'value') =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setOptions(prev => prev.map(o => {
          const mustChange = (o.id === option.id);
          const newOption = ({ ...o, [field]: e.target.value });

          return mustChange ? newOption : o;
        }))
      },
    [ setOptions ]
  );

  const removeOption = useCallback(
    (option:SelectOption) =>
      () => {
        setOptions(prev => prev.filter((o) => o.id !== option.id ));
      },
    [ setOptions ]
  );

  // memos
  /////
  const hasOptions = useMemo(() => options.length > 0, [ options ]);
  const isNumberInputChecked = useMemo(() => type === InputTypes.NUMBER, [ type ]);
  const isSelectInputChecked = useMemo(() => type === InputTypes.SELECT, [ type ]);
  const isTextInputChecked = useMemo(() => type === InputTypes.TEXT, [ type ]);
  const disabled = useMemo(
    () => {
      const hasLabel = !!label;
      if (!isSelectInputChecked) return !hasLabel;

      const areOptionsValid = options.every(o => !!o.label && !!o.value);
      return (!hasLabel || !hasOptions || !areOptionsValid);
    },
    [
      hasOptions,
      isSelectInputChecked,
      label,
      options,
    ]
  );

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

      {isSelectInputChecked && (
        <Options>
          <Heading>Options</Heading>

          {options.map(option => (
            <Option key={option.id}>
              <TextInput
                onChange={changeOption(option, 'label')}
                value={option.label}
              >
                Label
              </TextInput>

              <TextInput
                onChange={changeOption(option, 'value')}
                value={option.value}
              >
                Value
              </TextInput>

              <div>
                <Button
                  color={ButtonColors.GRAY}
                  onClick={removeOption(option)}
                  $shrink={true}
                >
                  -
                </Button>
              </div>
            </Option>
          ))}

          <AddOption>
            <Button
              color={ButtonColors.GRAY}
              onClick={addOption}
            >
              Add new option
            </Button>
          </AddOption>
        </Options>
      )}

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
