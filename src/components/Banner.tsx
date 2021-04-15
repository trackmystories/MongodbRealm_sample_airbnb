import * as React from 'react';
import {ReactElement} from 'react';
import styled, {css} from 'styled-components/native';

type BannerProps = {
  bannerImg: string;
};

const BannerImg = styled.Image`
  width: 100%;
  height: 100%;
  align-self: center;
  flex: 1;
  resize-mode: contain;
`;

export default function Banner(props: BannerProps) {
  return (
    <>
      <BannerImg source={props.bannerImg} />
    </>
  );
}
