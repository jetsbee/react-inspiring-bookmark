import { BookListView } from "../BookListView";
import { StyledH1 } from "./NYTimesBookList.styled";

export const NYTimesBookList = () => {
  return (
    <>
      <StyledH1>The New York Times Best Sellers</StyledH1>
      <BookListView />
    </>
  );
};
