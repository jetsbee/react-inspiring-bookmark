import { StyledBtn, StyledP } from "./BookDescription.styled";
import { Props } from "./BookDescription.type";
import useShowMore from "./hooks/useShowMore";

const BookDescription = ({ children: text }: Props) => {
  const { showMore, onToggle, MIN_TEXT_LENGTH_LIMIT } = useShowMore();

  return (
    <div>
      <StyledP>
        {showMore ? text : `${text.substring(0, MIN_TEXT_LENGTH_LIMIT)}...`}
      </StyledP>
      {text.length > MIN_TEXT_LENGTH_LIMIT && (
        <StyledBtn onClick={onToggle}>
          {showMore ? "Show less" : "Show more"}
        </StyledBtn>
      )}
    </div>
  );
};

export default BookDescription;
