import { useIsClient } from "@/hooks/isCilent";
import BookmarkStarView from "./BookmarkStarView/BookmarkStarView";
import { Props } from "./BookmarkStar.type";
import { StarLine } from "./BookmarkStarView/BookmarkStarView.styled";
import { StyledButton } from "./BookmarkStar.styled";
import useConfirmBookmark from "./hooks/useConfirmBookmark";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { createPortal } from "react-dom";

const BookmarkStar = ({ isbn }: Props) => {
  const isClient = useIsClient();
  const { isBookmarked, toggleBookmarkWithConfirm, needConfirm, askConfirm } =
    useConfirmBookmark(isbn);

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
