import { BookImage, ImageContainer, NoImageBox } from "./BookThumbnail.styled";
import { Props } from "./BookThumbnail.type";
import useImageFallback from "./hooks/useImageFallback";

const BookThumbnail = ({ title, thumbnail }: Props) => {
  const { handleOnError, hasNoImage } = useImageFallback(thumbnail);

  return hasNoImage() ? (
    <NoImageBox>No Image</NoImageBox>
  ) : (
    <ImageContainer>
      <BookImage
        src={thumbnail!}
        alt={title}
        fill={true}
        sizes="110px"
        onError={handleOnError}
      />
    </ImageContainer>
  );
};

export default BookThumbnail;
