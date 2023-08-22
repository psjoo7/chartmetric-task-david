import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 2px 4px ${(props) => props.theme.shadowPrimary};
`;

export const CardPopularity = styled.div`
  position: absolute;
  top: 0.7rem;
  left: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.7rem;
  height: 1.7rem;
  font-size: 0.8rem;
  border: 1px solid ${(props) => props.theme.shadowPrimary};
  border-radius: 1.7rem;
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

export const CardImage = styled.img`
  width: 100%;
  height: 85%;
`;

export const CardText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15%;
  background-color: ${(props) => props.theme.backgroundPrimary};
`;
