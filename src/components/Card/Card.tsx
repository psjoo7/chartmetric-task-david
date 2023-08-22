import { ICard, CardContainer, CardPopularity, CardImage, CardText } from './CardUtils';

const Card = (props: ICard) => {
  const { profilePath, name, popularity } = props;
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w200';
  const filteredPopularity = Math.round(popularity);
  const placeholderImage = `${process.env.PUBLIC_URL}/assets/images/404_not_found.svg`;

  const srcImage = profilePath ? `${imageBaseUrl}${profilePath}` : placeholderImage;

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = placeholderImage;
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
