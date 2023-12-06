import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h1`
  color: var(--black);

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const Nav = styled.nav`
  font-size: 1.4rem;
  font-weight: 200;

  ul a {
    margin-right: 4rem;
  }

  a {
    text-decoration: none;
    color: var(--black);

    &:hover {
      color: var(--black);
      opacity: 0.2;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    font-weight: 200;
    margin-left: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    font-weight: 200;
    margin-left: 4.6rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled.div`
  color: var(--black);
  max-width: fit-content;
`;
