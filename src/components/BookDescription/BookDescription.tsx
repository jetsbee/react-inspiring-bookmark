import { Props } from "./BookDescription.type";
import useShowMore from "./hooks/useShowMore";

const BookDescription = ({ children: text }: Props) => {
  const { showMore, onToggle, MIN_TEXT_LENGTH_LIMIT } = useShowMore();

  return (
    <div>
      <p>
        {showMore ? text : `${text.substring(0, MIN_TEXT_LENGTH_LIMIT)}...`}
      </p>
      {text.length > MIN_TEXT_LENGTH_LIMIT && (
        <button onClick={onToggle}>
          {showMore ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default BookDescription;
