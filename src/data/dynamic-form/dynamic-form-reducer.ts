import { useReducer } from 'react';

import { Action, Actions, State } from './types';
import { DEFAULT_DYNAMIC_FORM_CONTEXT as defaultState } from './dynamic-form-context';

const reducer = (state: State, action: Action) => {
  console.debug(`[dynamic-form-reducer] action.type: ${action.type}`);
  console.debug(`[dynamic-form-reducer] action.payload: ${JSON.stringify(action.payload)}`);

  switch(action.type) {
    case Actions.ADD_NEW_INPUT: {
      const newInput = action.payload;
      const newInputs = [ ...state.inputs, newInput ];

      return { ...state, inputs: newInputs };
    };

    case Actions.CHANGE_INPUT: {
      const toChange = action.payload;
      const newInputs = state.inputs.map(input => {
        const mustChange = (input.id === toChange.id);
        return mustChange ? { ...input, value: toChange.value } : input;
      });

      return { ...state, inputs: newInputs };
    };

    default: throw new Error(`[dynamic-form-reducer] unmatched action "${action}".`);
  }
};

export const useDynamicFormReducer = () => {
  const [ state, dispatch ] = useReducer(reducer, defaultState);
  return { state, dynamicFormDispatch: dispatch };
};
