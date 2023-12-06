import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;
`;

export const WorkTitle = styled.h1`
  margin: 4rem 0;
  font-size: 2.4rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 4rem;
  text-align: center;
`;

export const Button = styled.button`
  background-color: transparent;
  color: var(--black);
  border: solid 0.1rem #c8c8c8;
  padding: 1.2rem 2.4rem;
  font-size: 0.8rem;
  line-height: 1.4rem;
  height: 4rem;
  cursor: pointer;

  &:hover {
    border: solid 0.1rem var(--black);
  }
`;
