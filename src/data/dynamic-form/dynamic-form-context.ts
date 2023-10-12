import { createContext } from 'react';

import { State } from './types';

export const DEFAULT_DYNAMIC_FORM_CONTEXT:State = {
  dynamicFormDispatch: () => null,
  inputs: [],
};

export const DynamicFormContext = createContext(DEFAULT_DYNAMIC_FORM_CONTEXT);
