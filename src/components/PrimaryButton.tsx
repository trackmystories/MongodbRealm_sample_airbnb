import * as React from 'react';
import {ReactElement} from 'react';
import styled, {css} from 'styled-components/native';

const ButtonWrapper = styled.TouchableOpacity`
  padding: 12px;
  margin-bottom: 10px;
  background-color: black;
  border: 1px solid black;
`;

export const StyledText = styled.Text`
  color: white;
  font-weight: bold;
  width: 100%;
  text-align: center;
`;

interface Props {
  text: string;
  onClick?: () => void;
  arrow?: string;
}

export default function PrimaryButton(props: Props): ReactElement {
  return (
    <ButtonWrapper onPress={props.onClick}>
      <StyledText>{props.text}</StyledText>
    </ButtonWrapper>
  );
}
