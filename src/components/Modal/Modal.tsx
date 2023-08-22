import { useRef } from 'react';
import {
  IModal,
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

const Modal = (props: IModal) => {
  const { profilePath, name, gender, popularity, known_for, setModalOpen } = props;
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const placeholderImage = `${process.env.PUBLIC_URL}/assets/images/404_not_found.svg`;

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = placeholderImage;
  };

  const handleModalContentClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOverlayClick = () => {
    setModalOpen(false);
  };

  const modalRef = useRef<HTMLDivElement | null>(null);

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
