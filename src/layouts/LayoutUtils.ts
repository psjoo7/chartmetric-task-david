import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 10rem 2rem 0 2rem;
`;

export const ContentHeader = styled.div`
  position: fixed;
  top: 5rem;
  width: 100%;
  height: 5vw;
  padding-top: 2vw;
  font-size: 2vw;
  font-weight: 700;
  background-color: ${(props) => props.theme.backgroundPrimary};
  z-index: 999;
`;
