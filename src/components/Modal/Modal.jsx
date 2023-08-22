import { useRef } from 'react';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalHeaderText,
  ModalHeaderButton,
  ModalContentContainer,
  ModalContentImg,
  ModalContent,
  ModalContentTextContainer,
  ModalKnownContainer,
  ModalContentBoldText,
  ModalContentTextImage,
} from './ModalUtils';

const Modal = ({ profilePath, name, gender, popularity, known_for, setModalOpen }) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const placeholderImage = `${process.env.PUBLIC_URL}/assets/images/404_not_found.svg`;

  const handleError = (e) => {
    e.target.onerror = null;
    e.target.src = placeholderImage;
  };
  const handleModalContentClick = (e) => {
    e.stopPropagation(); // 클릭 이벤트의 전파를 중단하여 모달이 닫히지 않도록 함
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOverlayClick = () => {
    setModalOpen(false);
  };

  const modalRef = useRef(); // modalRef 생성

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer ref={modalRef} onClick={handleModalContentClick}>
        <ModalHeader>
          <ModalHeaderText>{name}</ModalHeaderText>
          <ModalHeaderButton onClick={closeModal} />
        </ModalHeader>
        <ModalContentContainer>
          <ModalContentImg
            src={profilePath ? `${imageBaseUrl}${profilePath}` : placeholderImage}
            alt="Person Image"
          />
          <ModalContent>
            <ModalContentTextContainer>
              <ModalContentBoldText>Gender:</ModalContentBoldText>
              &nbsp;{gender}
            </ModalContentTextContainer>
            <ModalContentTextContainer>
              <ModalContentBoldText>Popularity:</ModalContentBoldText>
              &nbsp;{popularity}
            </ModalContentTextContainer>
            <ModalContentTextContainer>
              <ModalContentBoldText>Known for:</ModalContentBoldText>
            </ModalContentTextContainer>
            {known_for.map((known, index) => (
              <ModalKnownContainer key={index}>
                {known.backdrop_path && (
                  <ModalContentTextImage
                    src={`${imageBaseUrl}${known.backdrop_path}`}
                    alt="Known For"
                    onError={handleError}
                  />
                )}
                {known.original_title || known.original_name}
              </ModalKnownContainer>
            ))}
          </ModalContent>
        </ModalContentContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
