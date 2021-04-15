import * as React from 'react';
import {ReactElement} from 'react';
import {Image} from 'react-native';
import styled, {css} from 'styled-components/native';

const ListWrapper = styled.TouchableOpacity`
  width: 100%;
  height: auto;
`;

const Card = styled.View`
  background: white;
  height: auto;
  margin: 5px;
`;

const ListText = styled.Text``;

interface ListItemProps {
  address: string;
  source?: string;
}

export default function ListItem(props: ListItemProps): ReactElement {
  return (
    <ListWrapper>
      <Card>
        <Image source={{uri: props.source}} />
      </Card>
    </ListWrapper>
  );
}
