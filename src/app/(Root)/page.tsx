import MainHeadingView from "@/components/MainHeadingView/MainHeadingView";
import BookList from "./BookList";
import { HydrateBookList } from "@/utils/hydrators";
import { StyledMain } from "./page.styled";
import BookSearchForm from "@/components/BookSearchForm/BookSearchForm";

const Root = () => {
  return (
    <StyledMain>
      <MainHeadingView>Hello, Inspiring bookmark!</MainHeadingView>
      <BookSearchForm />
      <HydrateBookList>
        <BookList />
      </HydrateBookList>
    </StyledMain>
  );
};

export default Root;
