import * as React from 'react';
import {ReactElement} from 'react';
import styled, {css} from 'styled-components/native';

const TitleText = styled.Text`
  font-size: 20px;
  color: black;
  text-align: center;
  width: 95%;
  padding-bottom: 5%;
`;

type TitleProps = {
  titleText: string;
};

export default function Title(props: ParagraphProps): ReactElement {
  return <TitleText>{props.titleText}</TitleText>;
}
