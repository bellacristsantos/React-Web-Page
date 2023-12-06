import React from 'react';
import * as S from '../styles/Footer.styles';

const Footer = () => (
  <S.FooterContainer>
    <S.FooterIcons>
      <a href="#">
        <i className="ph-thin ph-instagram-logo"></i>
      </a>
      <a href="#">
        <i className="ph-thin ph-youtube-logo"></i>
      </a>
    </S.FooterIcons>
    <S.FooterText>
      <p>Made by Isabella Santos - 2023</p>
    </S.FooterText>
  </S.FooterContainer>
);

export default Footer;
