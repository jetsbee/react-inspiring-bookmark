import { dateFormat } from "@/utils/dateFormat";
import BookDescription from "../BookDescription/BookDescription";
import BookThumbnail from "../BookThumbnail/BookThumbnail";
import {
  RowDiv,
  StyledH3,
  StyledLi,
  StyledPForAuthors,
  StyledPForDate,
  StyledUl,
} from "./BookListView.styled";
import { Props } from "./BookListView.type";
import BookmarkStar from "../BookmarkStar/BookmarkStar";

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
                <BookmarkStar {...bookmarkStarProps} />
                <StyledH3>{title}</StyledH3>
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
