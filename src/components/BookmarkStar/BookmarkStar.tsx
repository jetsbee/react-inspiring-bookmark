import { useIsClient } from "@/hooks/isCilent";
import BookmarkStarView from "./BookmarkStarView/BookmarkStarView";
import { Props } from "./BookmarkStar.type";
import { StarLine } from "./BookmarkStarView/BookmarkStarView.styled";

const BookmarkStar = ({ isbn }: Props) => {
  const isClient = useIsClient();

  return isClient ? (
    <BookmarkStarView filled={Boolean(Math.floor(Math.random() * 2))} />
  ) : (
    <StarLine />
  );
};

export default BookmarkStar;
