import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  padding: 1rem 2rem;
  color: #fff;
  background-color: ${(props) => props.theme.backgroundSecondary};
  z-index: 999;
`;

export const HeaderLogo = styled.img`
  width: 15%;
  height: 100%;
`;

export const HeaderSearchbarContainer = styled.div`
  position: relative;
  width: 22%;
  height: 90%;
`;

export const HeaderSearchbarIcon = styled.img`
  position: absolute;
  top: 0.6rem;
  left: 0.5rem;
  width: 1.5rem;
  cursor: pointer;
`;

export const HeaderSearchbar = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border-radius: 0.4rem;
  background-color: ${(props) => props.theme.backgroundPrimary};
`;
