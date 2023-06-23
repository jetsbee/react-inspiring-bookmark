import BookDescription from "../BookDescription/BookDescription";
import BookThumbnail from "../BookThumbnail/BookThumbnail";
import { StyledLi, StyledUl } from "./BookListView.styled";
import { Props } from "./BookListView.type";

const BookListView = ({ books }: Props) => {
  return (
    <StyledUl>
      {books.map(
        ({ isbn, title, authors, publishedDate, description, imageLinks }) => {
          const bookThumbnailProps = {
            title,
            thumbnail: imageLinks?.thumbnail,
          };

          return (
            <StyledLi key={isbn}>
              <BookThumbnail {...bookThumbnailProps} />
              <h2>{title}</h2>
              <p>by {authors.join(", ")}</p>
              <p>{publishedDate}</p>
              <BookDescription>{description}</BookDescription>
            </StyledLi>
          );
        }
      )}
    </StyledUl>
  );
};

export default BookListView;
