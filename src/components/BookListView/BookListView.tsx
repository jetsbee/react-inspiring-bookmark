import { dateFormat } from "@/utils/dateFormat";
import BookDescription from "../BookDescription/BookDescription";
import BookThumbnail from "../BookThumbnail/BookThumbnail";
import BookmarkStar from "../BookmarkStar/BookmarkStar";
import {
  RowDiv,
  StyledH3,
  StyledLi,
  StyledPForAuthors,
  StyledPForDate,
  StyledUl,
} from "./BookListView.styled";
import { Props } from "./BookListView.type";

const BookListView = ({ books }: Props) => {
  return (
    <StyledUl>
      {books.map(
        ({ id, title, authors, publishedDate, description, imageLinks }) => {
          const bookThumbnailProps = {
            title,
            thumbnail: imageLinks?.thumbnail,
          };

          const bookmarkStarProps = {
            id,
          };

          return (
            <StyledLi key={id}>
              <RowDiv>
                <BookThumbnail {...bookThumbnailProps} />
              </RowDiv>
              <RowDiv>
                <StyledH3>
                  <BookmarkStar {...bookmarkStarProps} />
                  {title}
                </StyledH3>
                <StyledPForAuthors>by {authors.join(", ")}</StyledPForAuthors>
                <StyledPForDate>
                  published{" "}
                  {dateFormat(publishedDate).length === 4 ? "in" : "on"}{" "}
                  {dateFormat(publishedDate)}
                </StyledPForDate>
                <BookDescription>{description}</BookDescription>
              </RowDiv>
            </StyledLi>
          );
        }
      )}
    </StyledUl>
  );
};

export default BookListView;
