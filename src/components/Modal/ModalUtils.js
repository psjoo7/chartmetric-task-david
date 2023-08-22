import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7); // 반투명한 검은색
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; // 다른 요소 위에 오도록 높은 z-index 값 설정
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-wrap: wrap;
  width: 55%;
  height: 60%;
  min-width: 300px;
  min-height: 450px;
  max-width: 1200px;
  max-height: 1500px;
  padding: 2rem;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 8%;
  z-index: 999;
`;

export const ModalHeaderText = styled.p`
  font-size: 2vw;
  font-weight: 700;
`;

export const ModalHeaderButton = styled.button`
  width: 5%;
  height: 90%;
  background-image: url('${process.env.PUBLIC_URL}/assets/images/close.svg');
  background-size: contain;
  background-repeat: no-repeat;
`;

export const ModalContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 92%;
  padding: 1rem 0;
`;

export const ModalContentImg = styled.img`
  width: 48%;
  height: 100%;
`;

export const ModalContent = styled.div`
  width: 52%;
  margin-left: 2rem;
  font-size: 1.5vw;
`;

export const ModalContentTextContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5vw;
`;

export const ModalKnownContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
  margin-bottom: 1.2vw;
  font-size: 1.2vw;
`;

export const ModalContentBoldText = styled.span`
  font-weight: 700;
`;

export const ModalContentTextImage = styled.img`
  width: 20%;
  height: 100%;
  margin-right: 0.5rem;
`;
