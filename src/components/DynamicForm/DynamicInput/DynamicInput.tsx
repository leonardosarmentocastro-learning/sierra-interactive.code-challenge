import React, { useMemo } from 'react';

import { TextInput } from './TextInput';
import { InputConfiguration, InputTypes } from '../../../data';

interface Props { input: InputConfiguration };
export const DynamicInput = ({ input }: Props) => {
  const Component = useMemo(() => {
    switch(input.type) {
      case InputTypes.TEXT: return TextInput;
      case InputTypes.NUMBER: return TextInput;

      // case InputTypes.SELECT: return <></>; // TODO: select input
      default: return React.Fragment;
    }
  }, [ input ]);

  return <Component input={input} />;
};
