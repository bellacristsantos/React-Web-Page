import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--black);
  margin-top: 4rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
    font-size: 80%;
  }

  @media (max-width: 480px) {
    margin-top: 2rem;
    font-size: 80%;
  }
`;

export const FooterIcons = styled.div`
  font-size: 2.4rem;

  a {
    text-decoration: none;
    color: var(--black);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const FooterText = styled.div`
  p {
    color: var(--black);
  }
`;
