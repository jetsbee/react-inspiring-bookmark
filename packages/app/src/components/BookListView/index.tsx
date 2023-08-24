import {
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
    // Todo: Need to improve
    <StyledUl>
      {books.map(
        ({ id, title, authors, publishedDate, description, imageLinks }) => (
          <StyledLi key={id}>
            <StyledArticle>
              <StyledH1>{title}</StyledH1>
              <StyledPForAuthors>{authors}</StyledPForAuthors>
              <StyledPForDate>{publishedDate}</StyledPForDate>
            </StyledArticle>
          </StyledLi>
        )
      )}
    </StyledUl>
  );
};
