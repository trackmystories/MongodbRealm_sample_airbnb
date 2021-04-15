import * as React from 'react';
import {ReactElement} from 'react';
import styled, {css} from 'styled-components/native';

const ParagraphText = styled.Text`
  font-size: 14px;
  color: gray;
  font-weight: bold;
  text-align: center;
  width: 90%;

  padding-top: 10;
`;

type ParagraphProps = {
  paragraphText: string;
};

export default function Paragraph(props: ParagraphProps): ReactElement {
  return <ParagraphText>{props.paragraphText}</ParagraphText>;
}
