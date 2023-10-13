import { useCallback, useContext, useMemo } from 'react';

import { DynamicInput } from './DynamicInput';
import { AddInput } from './AddInput';
import {
  Container,
  Content,
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

  // callbacks
  /////
  const displayData = useCallback(() => {
    alert(JSON.stringify(inputs, null, 2));
  }, [ inputs ]);

  // memos
  /////
  const displayFormPreview = useMemo(
    () => inputs.length !== 0,
    [ inputs ]
  );

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

            <Button onClick={displayData}>Submit</Button>
          </FormPreview>
        )}
      </Content>
    </Container>
  );
};
