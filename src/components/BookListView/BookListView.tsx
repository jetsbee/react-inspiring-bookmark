import BookThumbnail from "../BookThumbnail/BookThumbnail";
import { StyledLi, StyledUl } from "./BookListView.styled";
import { Props } from "./BookListView.type";

const BookListView = ({ books }: Props) => {
  return (
    <StyledUl>
      {books.map(({ isbn, title, imageLinks }) => {
        const bookThumbnailProps = {
          title,
          thumbnail: imageLinks?.thumbnail,
        };

        return (
          <StyledLi key={isbn}>
            <h2>{title}</h2>
            <BookThumbnail {...bookThumbnailProps} />
          </StyledLi>
        );
      })}
    </StyledUl>
  );
};

export default BookListView;
