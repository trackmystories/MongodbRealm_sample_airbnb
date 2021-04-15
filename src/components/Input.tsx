import * as React from 'react';
import {ReactElement} from 'react';
import styled, {css} from 'styled-components/native';

interface InputProps {
  onChangeText(): void;
  value: string;
  placeholder: string;
  autoCapitalize: string;
}

export default function Input(props: InputProps): ReactElement {
  return (
    <Container>
      <InputComponent
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        autoCapitalize={props.autoCapitalize}
      />
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  padding: 15px;
`;

const InputComponent = styled.TextInput`
  border-color: transparent;
  border-width: 1px;
  padding: 10px;
  border-radius: 2px;
  background-color: #f0f0f0;
`;
