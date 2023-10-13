import { useCallback, useContext } from 'react';

import { DynamicFormContext } from './dynamic-form-context';
import {
  Actions,
  InputConfiguration,
} from './types';

export const useDynamicForm = () => {
  const { dynamicFormDispatch } = useContext(DynamicFormContext);

  const addInput = useCallback((input: InputConfiguration) => {
    dynamicFormDispatch({
      type: Actions.ADD_NEW_INPUT,
      payload: input,
    });
  }, [ dynamicFormDispatch ]);

  const changeInput = useCallback((input: InputConfiguration) => {
    dynamicFormDispatch({
      type: Actions.CHANGE_INPUT,
      payload: input,
    });
  }, [ dynamicFormDispatch ]);

  return { addInput, changeInput };
};
