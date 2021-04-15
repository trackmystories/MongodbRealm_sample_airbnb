import * as React from 'react';
import {useState, useEffect} from 'react';
import {SafeAreaView, View, Alert, StyleSheet} from 'react-native';
import {PrimaryButton, Input} from '../../components';
import styled, {css} from 'styled-components/native';
import {useAuth} from '../../providers/AuthProvider';

const account = 'I forgot my password';
const signin = 'Sign In';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, signUp, signIn} = useAuth();

  const onPressSignIn = async () => {
    console.log('Pressed sign in');
    try {
      await signIn(email, password);
      console.log(await user);
    } catch (error) {
      Alert.alert(`Failed to sign in: ${error.message}`);
    }
  };

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Box>
            <Input
              onChangeText={setEmail}
              value={email}
              placeholder="email"
              autoCapitalize="none"
            />

            <Input
              onChangeText={setPassword}
              value={password}
              placeholder="password"
              secureTextEntry
            />
          </Box>
          <ButtonWrapper>
            <PrimaryButton onClick={onPressSignIn} text={signin} />
          </ButtonWrapper>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#fff',
  },
});

const Box = styled.View`
  align-items: center;
  margin-top: 60%;
  width: 100%;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  bottom: 15%;
  width: 90%;
`;
