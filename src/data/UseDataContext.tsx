import { memo, ReactNode } from 'react';

import { UseDynamicFormContext } from './dynamic-form';

interface Props { children: ReactNode };
export const UseDataContext = memo(({ children }: Props) => {
  return (
    <UseDynamicFormContext>
      {children}
    </UseDynamicFormContext>
  );
});
