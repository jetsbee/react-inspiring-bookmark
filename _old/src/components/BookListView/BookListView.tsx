import { dateFormat } from "@/utils/dateFormat";
import BookDescription from "../BookDescription/BookDescription";
import BookThumbnail from "../BookThumbnail/BookThumbnail";
import BookmarkStar from "../BookmarkStar/BookmarkStar";
import {
  RowDiv,
  StyledH1,
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
              <section>
                <RowDiv>
                  <BookThumbnail {...bookThumbnailProps} />
                </RowDiv>
                <RowDiv>
                  <StyledH1>
                    <BookmarkStar {...bookmarkStarProps} />
                    {title}
                  </StyledH1>
                  <StyledPForAuthors>by {authors.join(", ")}</StyledPForAuthors>
                  <StyledPForDate>
                    published{" "}
                    {dateFormat(publishedDate).length === 4 ? "in" : "on"}{" "}
                    {dateFormat(publishedDate)}
                  </StyledPForDate>
                  <BookDescription>{description}</BookDescription>
                </RowDiv>
              </section>
            </StyledLi>
          );
        }
      )}
    </StyledUl>
  );
};

export default BookListView;
