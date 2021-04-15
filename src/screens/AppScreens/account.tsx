import React, {ReactElement} from 'react';
import styled from 'styled-components/native';
import {Heading, InfoRow} from '../components';
import {Logout, AccButton, CompanyInfo} from '../components/buttons';
import {View, Text, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../providers/AuthProvider';

const icon = <Ionicons name="exit" size={29} />;

export default function Account() {
  const navigation = useNavigation();
  const {user, signOut} = useAuth();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Wrapper>
        <Text
          style={{fontWeight: 'bold', marginBottom: 40, textAlign: 'center'}}>
          Welcome User ID : {user.id}
        </Text>
        <CardTwo
          onPress={() => {
            Alert.alert('Log Out', null, [
              {
                text: 'Yes, Log Out',
                style: 'destructive',
                onPress: () => {
                  signOut();
                  navigation.popToTop();
                },
              },
              {text: 'Cancel', style: 'cancel'},
            ]);
          }}>
          <StyledText>{icon}</StyledText>
          <StyledText style={{color: 'red'}}>Sign Out</StyledText>
        </CardTwo>
      </Wrapper>
    </View>
  );
}

const Wrapper = styled.View`
  justify-content: center;
  width: 100%;
  margin-top: 20%;
`;

const CardTwo = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: white;
`;

const StyledText = styled.Text`
  padding: 10px;
  color: black;
  font-size: 22px;
`;
