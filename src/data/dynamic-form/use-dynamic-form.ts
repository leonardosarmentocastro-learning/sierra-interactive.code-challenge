import { useCallback, useContext } from 'react';

import { DynamicFormContext } from './dynamic-form-context';
import {
  Actions,
  InputConfiguration,
  TextInputConfiguration,
} from './types';

export const useDynamicForm = () => {
  const { dynamicFormDispatch } = useContext(DynamicFormContext);

  const addInput = useCallback((configuration: InputConfiguration) => {
    dynamicFormDispatch({
      type: Actions.ADD_NEW_INPUT,
      payload: configuration,
    });
  }, [ dynamicFormDispatch ]);

  const changeInput = useCallback((input: TextInputConfiguration) => {
    dynamicFormDispatch({
      type: Actions.CHANGE_INPUT,
      payload: input,
    });
  }, [ dynamicFormDispatch ]);

  return { addInput, changeInput };
};
