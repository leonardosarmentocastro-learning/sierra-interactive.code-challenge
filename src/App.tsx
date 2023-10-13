import { ReactNode, memo } from 'react';

import { UseDataContext } from './data';
import { DynamicForm } from './components';
import { Page } from './ui';

interface Props { children: ReactNode }
const Prepare = memo(({ children }: Props) => {
  return (
    <UseDataContext>
      {children}
    </UseDataContext>
  )
});

function App() {
  return (
    <Prepare>
      <Page>
        <DynamicForm />
      </Page>
    </Prepare>
  )
}

export default App
