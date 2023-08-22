import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.backgroundSecondary};
  z-index: 1000;
`;

export const HeaderLogo = styled.img`
  width: 15rem;
  height: 100%;
`;

export const HeaderSearchbarContainer = styled.div`
  position: relative;
  width: 15rem;
  height: 2.5rem;
`;

export const HeaderSearchbarIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 5%;
  width: 1.5rem;
  cursor: pointer;
  transform: translateY(-50%);
`;

export const HeaderSearchbar = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border-radius: 0.2rem;
  background-color: ${(props) => props.theme.backgroundPrimary};
`;
