import { Container, StyledBtn, StyledP } from "./BookDescription.styled";
import { Props } from "./BookDescription.type";
import useShowMore from "./hooks/useShowMore";

export const BookDescription = ({ children: text }: Props) => {
  const { showMore, onToggle, MIN_TEXT_LENGTH_LIMIT } = useShowMore();

  // Todo: Scrolling back when "Show less" button is clicked
  return (
    <Container>
      <StyledP>
        {showMore || text.length <= MIN_TEXT_LENGTH_LIMIT
          ? text
          : `${text.substring(0, MIN_TEXT_LENGTH_LIMIT - 3)}...`}
      </StyledP>
      {text.length > MIN_TEXT_LENGTH_LIMIT && (
        <StyledBtn onPress={onToggle}>
          {showMore ? "Show less" : "Show more"}
        </StyledBtn>
      )}
    </Container>
  );
};
