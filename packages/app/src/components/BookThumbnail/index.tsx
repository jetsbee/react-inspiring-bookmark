import {
  BookImage,
  ImageContainer,
  NoImageBox,
  NoImageText,
} from "./BookThumbnail.styled";
import { Props } from "./BookThumbnail.type";
import { useImageFallback } from "./hooks/useImageFallback";

export const BookThumbnail = ({ title, thumbnail }: Props) => {
  const { handleOnError, hasNoImage } = useImageFallback(thumbnail);

  return hasNoImage() ? (
    <NoImageBox>
      <NoImageText>No Image</NoImageText>
    </NoImageBox>
  ) : (
    <ImageContainer>
      <BookImage src={thumbnail!} alt={title} onError={handleOnError} />
    </ImageContainer>
  );
};
