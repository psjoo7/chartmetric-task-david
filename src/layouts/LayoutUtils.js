import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 140vh;
  background-color: ${(props) => props.theme.backgroundOutside};
`;

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  heigth: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 12rem 2rem 0 2rem;
`;

export const ContentHeader = styled.div`
  position: fixed;
  top: 5rem;
  width: 100%;
  height: 6rem;
  padding-top: 3rem;
  font-size: 2.5rem;
  font-weight: 700;
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

export const ContentFooter = styled.div`
  height: 4rem;
  margin-top: auto;
  background-color: tomato;
`;
