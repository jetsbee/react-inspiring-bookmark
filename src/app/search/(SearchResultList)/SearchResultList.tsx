"use client";

import useKeywordsParam from "./(hooks)/useKeywordsParam";
import BookListView from "@/components/BookListView/BookListView";
import { StyledButton, StyledP } from "./SearchResultList.styled";
import useSearchBooks from "./(hooks)/useSearchBooks";

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
