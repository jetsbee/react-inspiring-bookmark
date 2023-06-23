import { useState } from "react";
import { BookImage, ImageContainer, NoImageBox } from "./BookThumbnail.styled";
import { Props } from "./BookThumbnail.type";

const BookThumbnail = ({ title, thumbnail }: Props) => {
  const [imageError, setImageError] = useState(false);

  return thumbnail === undefined || imageError ? (
    <NoImageBox>No Image</NoImageBox>
  ) : (
    <ImageContainer>
      <BookImage
        src={thumbnail}
        alt={title}
        fill={true}
        sizes="110px"
        onError={() => {
          setImageError(true);
        }}
      />
    </ImageContainer>
  );
};

export default BookThumbnail;
