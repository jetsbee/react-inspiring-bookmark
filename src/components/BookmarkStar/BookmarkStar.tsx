import { useIsClient } from "@/hooks/isCilent";
import { createPortal } from "react-dom";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { StyledButton } from "./BookmarkStar.styled";
import { Props } from "./BookmarkStar.type";
import BookmarkStarView from "./BookmarkStarView/BookmarkStarView";
import { StarLine } from "./BookmarkStarView/BookmarkStarView.styled";
import useConfirmBookmark from "./hooks/useConfirmBookmark";

const BookmarkStar = ({ id }: Props) => {
  const isClient = useIsClient();
  const { isBookmarked, toggleBookmarkWithConfirm, needConfirm, askConfirm } =
    useConfirmBookmark(id);

  const bookmarkStarViewProps = {
    filled: isBookmarked,
  };

  const confirmModalProps = {
    onConfirm: (isProceed: boolean) => {
      toggleBookmarkWithConfirm(isProceed);
    },
  };

  const styledButtonProps = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      isBookmarked ? askConfirm() : toggleBookmarkWithConfirm(true);
    },
    "aria-label": "Bookmark",
  };

  return isClient ? (
    <>
      {needConfirm &&
        createPortal(<ConfirmModal {...confirmModalProps} />, document.body)}

      <StyledButton {...styledButtonProps}>
        <BookmarkStarView {...bookmarkStarViewProps} />
      </StyledButton>
    </>
  ) : (
    <StarLine />
  );
};

export default BookmarkStar;
