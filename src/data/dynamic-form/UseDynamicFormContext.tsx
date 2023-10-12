import { memo, ReactNode } from 'react';

import { DynamicFormContext } from './dynamic-form-context';
import { useDynamicFormReducer } from './dynamic-form-reducer';

interface Props { children: ReactNode };
export const UseDynamicFormContext = memo(({ children }: Props) => {
  const { state, dynamicFormDispatch } = useDynamicFormReducer();

  return (
    <DynamicFormContext.Provider
      value={{ ...state, dynamicFormDispatch }}
    >
      {children}
    </DynamicFormContext.Provider>
  )
});
