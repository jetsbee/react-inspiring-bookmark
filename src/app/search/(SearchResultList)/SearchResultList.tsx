"use client";

import BookListView from "@/components/BookListView/BookListView";
import useKeywordsParam from "./(hooks)/useKeywordsParam";
import useSearchBooks from "./(hooks)/useSearchBooks";
import { StyledButton, StyledP } from "./SearchResultList.styled";

const SearchResultList = () => {
  const keywords = useKeywordsParam();
  const { books, handleRequestMoreBooks, isAbleToRequestMore } = useSearchBooks(
    keywords ?? ""
  );

  const props = {
    books: books ?? [],
  };

  return (
    <>
      {keywords && (
        <StyledP>Search results: {keywords.replace("+", " ")}</StyledP>
      )}
      <BookListView {...props} />
      {keywords && isAbleToRequestMore && (
        <StyledButton onClick={handleRequestMoreBooks}>
          More Books...
        </StyledButton>
      )}
    </>
  );
};

export default SearchResultList;
