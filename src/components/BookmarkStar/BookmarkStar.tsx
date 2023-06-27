import { useIsClient } from "@/hooks/isCilent";
import BookmarkStarView from "./BookmarkStarView/BookmarkStarView";
import { Props } from "./BookmarkStar.type";
import { StarLine } from "./BookmarkStarView/BookmarkStarView.styled";
import { StyledButton } from "./BookmarkStar.styled";
import useBookmark from "./hooks/useBookmark";

const BookmarkStar = ({ isbn }: Props) => {
  const isClient = useIsClient();
  const { toggleBookmark, isBookmarked } = useBookmark(isbn);

  const props = {
    filled: isBookmarked,
  };

  return isClient ? (
    <StyledButton onClick={toggleBookmark}>
      <BookmarkStarView {...props} />
    </StyledButton>
  ) : (
    <StarLine />
  );
};

export default BookmarkStar;
