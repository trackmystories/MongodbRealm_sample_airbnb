import * as React from 'react';
import {ReactElement} from 'react';
import banner from '../../assets/banner.jpeg';
import Icon from 'react-native-vector-icons/Ionicons';
import styled, {css} from 'styled-components/native';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Paragraph, Banner, PrimaryButton, Title} from '../../components';
import {useNavigation} from '@react-navigation/native';

const introBanner = banner;
const arrow = <Icon name="md-arrow-forward" size={15} color="#fff" />;
const login = 'Login';
const register = 'Create an account';
const title = 'Listings And Reviews ';
const paragraph =
  'This is a sample listings and reviews app built with mongodb realm, react native, styled-components and typescript.';

export default function Intro(): ReactElement {
  const navigation = useNavigation();
  return (
    <MainContainer>
      <View style={styles.container}>
        <Banner bannerImg={introBanner} />
      </View>
      <View style={styles.container}>
        <Title titleText={title} />
        <Paragraph paragraphText={paragraph} />

        <ButtonWrapper>
          <PrimaryButton
            onClick={() => navigation.navigate('Login')}
            text={login}
            arrow={arrow}
          />
          <PrimaryButton
            onClick={() => navigation.navigate('Register')}
            text={register}
            arrow={arrow}
          />
        </ButtonWrapper>
      </View>
    </MainContainer>
  );
}

const MainContainer = styled.View`
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  bottom: 15%;
  width: 90%;
`;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
