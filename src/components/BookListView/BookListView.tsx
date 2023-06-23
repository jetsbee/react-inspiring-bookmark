import { StyledLi, StyledUl } from "./BookListView.styled";
import { Props } from "./BookListView.type";

const BookListView = ({ books }: Props) => {
  return (
    <StyledUl>
      {books.map(({ isbn, title }) => (
        <StyledLi key={isbn}>{title}</StyledLi>
      ))}
    </StyledUl>
  );
};

export default BookListView;
