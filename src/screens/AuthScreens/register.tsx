import * as React from 'react';
import {useState, useEffect} from 'react';
import {SafeAreaView, View, Alert, StyleSheet} from 'react-native';
import {PrimaryButton, Input} from '../../components';
import styled, {css} from 'styled-components/native';
import {useAuth} from '../../providers/AuthProvider';

const account = 'Already have an account?';
const sign = 'Sign Up';

export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, signUp, signIn} = useAuth();

  useEffect(() => {
    if (user != null) {
      navigation.navigate('BottomTabNavigator');
    }
  }, [user]);

  const onPressSignUp = async () => {
    try {
      await signUp(email, password);
      signIn(email, password);
    } catch (error) {
      Alert.alert(`Failed to sign up: ${error.message}`);
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
            <PrimaryButton onClick={onPressSignUp} text={sign} />

            <PrimaryButton
              onClick={() => navigation.navigate('Login')}
              text={account}
            />
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
