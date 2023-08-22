import { useState } from 'react';
import { CardContainer, CardPopularity, CardImage, CardText } from './CardUtils';

const Card = ({ profilePath, name, popularity }) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w200';
  const filteredPopularity = Math.round(popularity);
  const placeholderImage = `${process.env.PUBLIC_URL}/assets/images/404_not_found.svg`;

  const srcImage = profilePath ? `${imageBaseUrl}${profilePath}` : placeholderImage;

  const handleError = (e) => {
    e.target.onerror = null;
    e.target.src = placeholderImage;
  };

  return (
    <CardContainer>
      <CardPopularity>{filteredPopularity}</CardPopularity>
      <CardImage src={srcImage} alt={name} onError={handleError} />
      <CardText>{name}</CardText>
    </CardContainer>
  );
};

export default Card;
