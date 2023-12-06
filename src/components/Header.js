import React from 'react';
import * as S from '../styles/Header.styles';

const Header = () => (
  <S.HeaderContainer>
    <S.HeaderContent>
      <S.HeaderLogo>
        <img src="../assets/logo.svg" alt="logo" />
      </S.HeaderLogo>
      <div className="header-text">
        <S.HeaderTitle>Alex Smith</S.HeaderTitle>
      </div>
    </S.HeaderContent>
    <S.Nav>
      <div className="header-nav">
        <ul>
          <a className="nav-title" href="./home.html">
            Home
          </a>
          <a className="nav-title" href="./work.html">
            Work
          </a>
          <a className="nav-title" href="./contact.html">
            Contact
          </a>
        </ul>
      </div>
    </S.Nav>
  </S.HeaderContainer>
);

export default Header;
