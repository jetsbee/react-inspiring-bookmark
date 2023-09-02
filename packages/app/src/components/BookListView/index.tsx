import { dateFormat } from "../../utils/dateFormat";
import { BookDescription } from "../BookDescription";
import { BookThumbnail } from "../BookThumbnail";
import {
  RowDiv,
  StyledArticle,
  StyledH1,
  StyledLi,
  StyledPForAuthors,
  StyledPForDate,
  StyledUl,
} from "./BookListView.styled";
import { Props } from "./BookListView.type";

export const BookListView = ({ books }: Props) => {
  return (
    // Todo: BookDThumbnail surrounded by BookDescription
    // React native does not support float styling.
    // Need to calculuate optimal length of character to fit width, split text into 2
    // so it can be one alongside thumbnail, the other below thumbnail (looks like float thumbnail)
    // ref.(Ways of counting text) https://stackoverflow.com/questions/4917244/most-reliable-way-of-getting-x-pixels-worth-of-text-from-string-javascript
    <StyledUl>
      {books.map(
        ({ id, title, authors, publishedDate, description, imageLinks }) => {
          const bookThumbnailProps = {
            title,
            thumbnail: imageLinks?.thumbnail,
          };
          return (
            <StyledLi key={id}>
              <StyledArticle>
                <RowDiv>
                  <StyledH1>{title}</StyledH1>
                  <StyledPForAuthors>{authors}</StyledPForAuthors>
                  <StyledPForDate>
                    published{" "}
                    {dateFormat(publishedDate).length === 4 ? "in" : "on"}{" "}
                    {dateFormat(publishedDate)}
                  </StyledPForDate>
                  <BookDescription>{description}</BookDescription>
                </RowDiv>
                <BookThumbnail {...bookThumbnailProps} />
              </StyledArticle>
            </StyledLi>
          );
        }
      )}
    </StyledUl>
  );
};
