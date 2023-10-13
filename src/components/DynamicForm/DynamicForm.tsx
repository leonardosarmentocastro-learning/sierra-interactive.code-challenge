import { useCallback, useContext, useMemo, useState } from 'react';

import { Data } from './Data';
import { DynamicInput } from './DynamicInput';
import { AddInput } from './AddInput';
import {
  Container,
  Content,
  FPButtons,
  FPInput,
  FPTitle,
  FormPreview,
  Heading,
  Subtitle,
  Title,
} from './styled';
import {
  DynamicFormContext,
} from '../../data';
import { Button } from '../../ui';

export const DynamicForm = () => {
  const { inputs } = useContext(DynamicFormContext);
  const [ displayData, setDisplayData ] = useState(false);

  // memos
  /////
  const displayFormPreview = useMemo(
    () => inputs.length !== 0,
    [ inputs ]
  );

  const data = useMemo(
    () => JSON.stringify(inputs, null, 2),
    [ inputs ]
  );

  // callbacks
  /////
  const toggleDisplay = useCallback(() => {
    setDisplayData(prev => !prev);
  }, [ setDisplayData ]);

  return (
    <Container>
      <Heading>
        <Title>Dynamic form</Title>
        <Subtitle>Define your own custom surveys.</Subtitle>
      </Heading>

      <Content>
        <AddInput />

        {displayFormPreview && (
          <FormPreview>
            <FPTitle>Form preview</FPTitle>

            {inputs.map((input, i) => (
              <FPInput key={i}>
                <DynamicInput
                  input={input}
                />
              </FPInput>
            ))}

            <FPButtons>
              <Button onClick={toggleDisplay}>Display data</Button>
            </FPButtons>
          </FormPreview>
        )}

        {displayData && (
          <Data>
            {data}
          </Data>
        )}
      </Content>
    </Container>
  );
};
