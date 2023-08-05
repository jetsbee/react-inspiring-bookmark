import { StarFilled, StarLine } from "./BookmarkStarView.styled";
import { Props } from "./BookmarkStarView.type";

const BookmarkStarView = ({ filled }: Props) => {
  return filled ? <StarFilled /> : <StarLine />;
};

export default BookmarkStarView;
